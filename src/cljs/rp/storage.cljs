(ns rp.storage
  (:require [rp.db :as db]))

(def DB-KEY "rp-workout-db")

(defn save-db!
  "Persist the database to localStorage."
  []
  (try
    (.setItem js/localStorage DB-KEY (db/db->edn))
    (catch :default e
      (js/console.error "Failed to save DB:" e))))

(defn load-db!
  "Load the database from localStorage and call callback when done."
  [on-complete]
  (try
    (when-let [data (.getItem js/localStorage DB-KEY)]
      (db/load-from-edn! data))
    (catch :default e
      (js/console.error "Failed to load DB:" e)))

  ;; Auto-save on every transaction
  (add-watch db/db-listener :auto-save
             (fn [_ _ _ _]
               (save-db!)))

  (on-complete))

;; Future: IndexedDB for larger datasets
;; localStorage has ~5MB limit, fine for workout logs
