(ns rp.domain.state

  "Event sourcing for workout tracking. State = reduce over events.
   Vectors for natural ordering, maps for lookup by name.")

;; =============================================================================
;; Core
;; =============================================================================

(defn apply-event [state {:keys [type] :as event}]
  (case type
    :microcycle-started
    (let [idx (count (:microcycles state))]
      (-> state
          (assoc :current-mc idx)
          (update :microcycles (fnil conj []) {:status :active :workouts {}})))

    :workout-started
    (-> state
        (assoc :current-wo (:name event))
        (assoc-in [:microcycles (:current-mc state)
                   :workouts (:name event)]
                  {:name (:name event) :status :active :exercises {}}))

    :set-completed
    (let [{:keys [current-mc current-wo]} state
          {:keys [exercise set-index weight reps]} event]
      (assoc-in state [:microcycles current-mc
                       :workouts current-wo
                       :exercises exercise
                       set-index]
                {:weight weight :reps reps}))

    :workout-completed
    (-> state
        (assoc-in [:microcycles (:current-mc state)
                   :workouts (:current-wo state)
                   :status] :completed)
        (dissoc :current-wo))

    :microcycle-completed
    (-> state
        (assoc-in [:microcycles (:current-mc state) :status] :completed)
        (dissoc :current-mc))

    state))

(defn build-state [events]
  (reduce apply-event {} events))

;; =============================================================================
;; Merge
;; =============================================================================

(defn merge-set [planned actual]
  (merge planned actual))

(defn merge-exercise [planned actual-sets]
  (if-not actual-sets
    planned
    (update planned :sets
            (fn [sets]
              (mapv #(merge-set % (get actual-sets %2))
                    sets
                    (range))))))

(defn merge-workout [planned actual]
  (cond-> planned
    true (assoc :status (or (:status actual) :not-started))
    actual (update :exercises
                   (fn [exercises]
                     (mapv #(merge-exercise % (get-in actual [:exercises (:name %)]))
                           exercises)))))

(defn merge-microcycle [planned actual]
  (cond-> planned
    true (assoc :status (or (:status actual) :not-started))
    actual (update :workouts
                   (fn [workouts]
                     (mapv #(merge-workout % (get-in actual [:workouts (:name %)]))
                           workouts)))))

(defn annotate-plan [plan state]
  (update plan :microcycles
          (fn [microcycles]
            (mapv #(merge-microcycle % (get-in state [:microcycles %2]))
                  microcycles
                  (range)))))

;; =============================================================================
;; Queries
;; =============================================================================

(defn current-workout [state]
  (when-let [wo-name (:current-wo state)]
    (get-in state [:microcycles (:current-mc state) :workouts wo-name])))

(defn volume [workout]
  (->> workout :exercises vals
       (mapcat vals)
       (keep (fn [{:keys [weight reps]}]
               (when (and weight reps) (* weight reps))))
       (reduce + 0)))

;; =============================================================================
;; Rich Comment
;; =============================================================================

(comment
  ;; Simple events - no IDs needed
  (def events
    [{:type :microcycle-started}
     {:type :workout-started :name "A"}
     {:type :set-completed :exercise "Bench" :set-index 0 :weight 100 :reps 8}
     {:type :set-completed :exercise "Bench" :set-index 1 :weight 100 :reps 7}
     {:type :workout-completed}
     {:type :workout-started :name "B"}
     {:type :set-completed :exercise "Row" :set-index 0 :weight 80 :reps 10}])

  (def state (build-state events))
  state

  (current-workout state)
  (volume (current-workout state))

  )
