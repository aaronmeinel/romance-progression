(ns rp.logging
  (:require [xtdb.api :as xt]
            [com.biffweb :as biff]))


(defn log! [ctx event]
  (let [user-id (biff/lookup-id (xt/db (:biff/db ctx)) :user/email
                                (get-in ctx [:session :user]))
        doc (merge event
                   {:xt/id (random-uuid)
                    :event/user user-id})]
    (biff/submit-tx ctx [(assoc doc :db/op :create :db/doc-type :event)])
    doc))




(defn ->domain-event
  "Strip persistence metadata, keep only domain fields, remove namespaces."
  [event-doc]
  (->> event-doc
       (filter (fn [[k _]] (namespace k)))
       (filter (fn [[k _]] (= "event" (namespace k))))
       (map (fn [[k v]] [(keyword (name k)) v]))
       (into {})))



(defn events [db user-id]
  (->> (xt/q db
             '{:find [(pull e [*]) tx]
               :in [user]
               :where [[e :event/user user]
                       [e :event/type _ tx]]
               :order-by [[tx :asc]]}
             user-id)
       (map first)
       (map ->domain-event)))



;; =============================================================================
;; Helpers
;; =============================================================================

(defn microcycle-started! [ctx]
  (log! ctx {:event/type :microcycle-started}))

(defn workout-started! [ctx name]
  (log! ctx {:event/type :workout-started :event/name name}))

(defn set-completed! [ctx exercise idx weight reps]
  (log! ctx {:event/type :set-completed
             :event/exercise exercise
             :event/set-index idx
             :event/weight weight
             :event/reps reps}))

(defn workout-completed! [ctx]
  (log! ctx {:event/type :workout-completed}))

(defn microcycle-completed! [ctx]
  (log! ctx {:event/type :microcycle-completed}))
