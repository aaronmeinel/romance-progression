(ns rp.plan
  "Training plan logic - ported from server-side Clojure.")

;; Sample plan template - in production this would be loaded from user config
(def template
  {:name "Twice a week upper body focus"
   :n-microcycles 4
   :workouts {:monday
              {:exercises [["Dumbbell Press (Incline)" {:n-sets 2}]
                           ["Cable Triceps Pushdown (Bar)" {:n-sets 3}]
                           ["Seated Cable Row" {:n-sets 3}]
                           ["Lying Biceps Dumbbell Curl" {:n-sets 2}]
                           ["Barbell Upright Row" {:n-sets 3}]
                           ["Barbell Squat (High Bar)" {:n-sets 2}]
                           ["Bodyweight Squat" {:n-sets 1}]
                           ["Back Raise" {:n-sets 1}]]}
              :thursday
              {:exercises [["Pulldown (Narrow Grip)" {:n-sets 2}]
                           ["Cable Flexion Row" {:n-sets 2}]
                           ["Barbell Curl (Narrow Grip)" {:n-sets 3}]
                           ["Cable Overhead Triceps Extension" {:n-sets 3}]
                           ["Pushup (Deficit)" {:n-sets 2}]
                           ["Dumbbell Shoulder Press" {:n-sets 4}]
                           ["Back Raise" {:n-sets 1}]
                           ["Barbell Squat (High Bar)" {:n-sets 2}]
                           ["Bodyweight Squat" {:n-sets 1}]]}}})

(defn expand-exercises
  "Turn the n-sets specification from a template into n-sets maps."
  [exercises]
  (mapv (fn [[exercise-name {:keys [n-sets]}]]
          [exercise-name (vec (repeat n-sets {}))])
        exercises))

(defn ->plan
  "Expand template into a full plan structure."
  [{:keys [name n-microcycles workouts]}]
  (let [expanded-workouts
        (into {}
              (map (fn [[day {:keys [exercises]}]]
                     [day (expand-exercises exercises)])
                   workouts))
        microcycles (mapv (fn [i] [i expanded-workouts])
                          (range n-microcycles))]
    {:name name
     :microcycles microcycles}))

(def plan (->plan template))
