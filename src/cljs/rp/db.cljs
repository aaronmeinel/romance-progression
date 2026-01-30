(ns rp.db
  (:require [datascript.core :as d]
            [reagent.core :as r]))

;; DataScript schema - matches server-side event structure
(def schema
  {:event/id         {:db/unique :db.unique/identity}
   :event/type       {}
   :event/mesocycle  {}
   :event/microcycle {}
   :event/workout    {}
   :event/exercise   {}
   :event/set-index  {}
   :event/performed-weight {}
   :event/performed-reps   {}
   :event/prescribed-weight {}
   :event/prescribed-reps   {}
   :event/timestamp  {}})

;; Create the database connection
(defonce conn (d/create-conn schema))

;; Reactive atom for triggering re-renders
(defonce db-listener (r/atom 0))

;; Listen for DB changes and trigger re-renders
(d/listen! conn :ui-listener
           (fn [_tx-report]
             (swap! db-listener inc)))

;; ----- Transactions -----

(defn log-set!
  "Log a completed set to the database."
  [{:keys [mesocycle microcycle workout exercise set-index weight reps]}]
  (let [event-id (str (random-uuid))]
    (d/transact! conn
                 [{:event/id event-id
                   :event/type :set-completed
                   :event/mesocycle mesocycle
                   :event/microcycle microcycle
                   :event/workout workout
                   :event/exercise exercise
                   :event/set-index set-index
                   :event/performed-weight weight
                   :event/performed-reps reps
                   :event/timestamp (js/Date.now)}])))

;; ----- Queries -----

(defn get-all-events
  "Get all logged events from the database."
  []
  @db-listener  ; Subscribe to changes
  (->> (d/q '[:find [(pull ?e [*]) ...]
              :where [?e :event/type]]
            @conn)
       (sort-by :event/timestamp)))

(defn get-set-log
  "Get the logged data for a specific set if it exists."
  [mesocycle microcycle workout exercise set-index]
  @db-listener  ; Subscribe to changes
  (first
   (d/q '[:find [(pull ?e [:event/performed-weight :event/performed-reps]) ...]
          :in $ ?meso ?micro ?workout ?exercise ?idx
          :where
          [?e :event/mesocycle ?meso]
          [?e :event/microcycle ?micro]
          [?e :event/workout ?workout]
          [?e :event/exercise ?exercise]
          [?e :event/set-index ?idx]]
        @conn mesocycle microcycle workout exercise set-index)))

;; ----- Serialization -----

(defn db->edn
  "Serialize the database to EDN for storage."
  []
  (pr-str (d/serializable @conn)))

(defn load-from-edn!
  "Load database from EDN string."
  [edn-str]
  (when edn-str
    (let [db (d/from-serializable (cljs.reader/read-string edn-str) schema)]
      (reset! conn db))))
