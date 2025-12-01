(ns rp.domain.state
)



(defn completed-set "Log a completed set with full context."
  [mesocycle microcycle workout exercise performed-weight performed-reps prescribed-weight prescribed-reps]
  {:type :set-completed
   :mesocycle mesocycle
   :microcycle microcycle
   :workout workout
   :exercise exercise
   :performed-weight performed-weight
   :performed-reps prescribed-reps
   :prescribed-weight prescribed-weight
   :prescribed-reps prescribed-reps
   :timestamp (java.time.Instant/now)})





(defn ->set [event]
  (select-keys event [:weight :reps]))

(defn ->sets [events]
  (mapv ->set events))

(defn get-all-workouts-for-day
  "Get all instances of a certain workout.
   That would be e.g. the monday workout,
   over the whole history.
  Not sure how useful this is, more of an exercise.
   "
  [day events]
  (->> events
       (filter #(= (:workout %) day))
       (group-by (juxt :mesocycle :microcycle :workout :exercise))))




;; Probably have to ditch the :exercise to make this usable for workouts that consist of several exercises
;; AAAAnd thats what i did. To actually render the "day" for ui i might have to put the vals through another group-by :exercise then
;; Actually I am doing that directly in this function. This gives us structurally almost what we need to render this in the UI, only need to transform this somehow to make rendering more convenient. Maybe its already possible like this, lets
;; explore further
;; Maybe we just need to come up with a better name for this function
(defn get-microcycle [n events]
  (let [by-microcycle-and-workout (->> events
                                       (filter #(= (:microcycle %) n))
                                       (group-by (juxt :mesocycle :microcycle :workout)))]
    (update-vals by-microcycle-and-workout (partial group-by :exercise))))


(defn microcycle->plan-structure
  "Transform a microcycle view on the events into a nested map that is congruent
  with the structure of a plan."
  [microcycle]

  (reduce-kv (fn [m k v]
               (assoc-in m k v)) {} microcycle))




(comment

  (def events
    [(completed-set "full body" 0 :monday "Squat" 100 10 nil nil)
     (completed-set "full body" 0 :monday "Squat" 100 9  nil nil)
     (completed-set "full body" 0 :monday "Pullup" 80 10  nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 8 nil nil)
     (completed-set "full body" 0 :thursday "Bench" 100 6 nil nil)
     (completed-set "full body" 0 :thursday "Deadlift" 300 5 nil nil)
     (completed-set "full body" 1 :monday "Squat" nil nil 102.5 10)])

  (def ^:private new-value
    (->> events
         (get-microcycle 0)
         microcycle->plan-structure))


  new-value
{"full body" {0 {:monday {"Squat" [{:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Squat", :type :set-completed, :workout :monday, :performed-weight 100, :mesocycle "full body", :timestamp #object[java.time.Instant 0x1048339f "2025-11-30T16:24:07.192697121Z"], :performed-reps nil} {:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Squat", :type :set-completed, :workout :monday, :performed-weight 100, :mesocycle "full body", :timestamp #object[java.time.Instant 0x10fd118b "2025-11-30T16:24:07.192705237Z"], :performed-reps nil}], "Pullup" [{:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Pullup", :type :set-completed, :workout :monday, :performed-weight 80, :mesocycle "full body", :timestamp #object[java.time.Instant 0x7948a1c3 "2025-11-30T16:24:07.192707751Z"], :performed-reps nil}]}, :thursday {"Bench" [{:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Bench", :type :set-completed, :workout :thursday, :performed-weight 100, :mesocycle "full body", :timestamp #object[java.time.Instant 0x5b3d8cf5 "2025-11-30T16:24:07.192711800Z"], :performed-reps nil} {:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Bench", :type :set-completed, :workout :thursday, :performed-weight 100, :mesocycle "full body", :timestamp #object[java.time.Instant 0xab888c6 "2025-11-30T16:24:07.192713943Z"], :performed-reps nil}], "Deadlift" [{:microcycle 0, :prescribed-weight nil, :prescribed-reps nil, :exercise "Deadlift", :type :set-completed, :workout :thursday, :performed-weight 300, :mesocycle "full body", :timestamp #object[java.time.Instant 0x7231a153 "2025-11-30T16:24:07.192716136Z"], :performed-reps nil}]}}}}


  (get-in new-value ["full body" 0 :thursday])






  ()) ;;
 ;;)
