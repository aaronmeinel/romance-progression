(ns rp.domain.progression
  (:require [rp.domain.state :as st]
            [com.rpl.specter :as s]
            [clojure.core.match :refer [match]]
            [clojure.math :as math]))

(defn progress-weight-based-on-reps
  "Returns the next set that should be done, based on set-data.

  If any prescription data are nil, returns the set with a slight weight increase and the same reps as
  prescribed data and no performed-weight and performed-reps.

  This is only for the simplest case: The progression is only via weight, the actual performance indicator is just the reps.
  So the function differentiates between less, exact, or more than prescribed and applies a fixed percentage on the weight.
  We'll need to cover the case where the weight is held constant but a progression is still in order
  at a different place.
  In general we'll want to make the prediction adapt more intelligently to the data the user is going to put in.
  I.e. we need to differentiate between what is logged and what is put in as a 'promise'.
  So, this function is currently only usable for logging.
  When the user says \"You prescribed this, but I dont want to increase weight, so I'll override the prescription\",
  we need to adjust the reps instead.
  This should probably override the prescription then.

  "
  [{:keys [performed-weight performed-reps prescribed-weight prescribed-reps] :as set-data}  ]
 (if (and prescribed-weight prescribed-reps)
   (let [
         delta-r (- performed-reps prescribed-reps)
         next-weight (fn [w]
                       (cond
                         (< delta-r 0) (* w 0.975)
                         (> delta-r 0) (* w 1.05)
                         (= delta-r 0) (* w 1.025)))]
    {:prescribed-weight (next-weight performed-weight)
     :prescribed-reps prescribed-reps}

     )
   {:prescribed-weight (* 1.025 performed-weight)
    :prescribed-reps performed-reps}))

(defn change-number-of-sets?
  "Decides whether number of sets should be increased (1), left unchanged (0) or decreased (-1).

  Currently this is just a simple decision matrix. That will probably work alright, but I would like
  some supervised learning here.
  "
  ([metrics]
   (change-number-of-sets? metrics (constantly 0)))
  ([{:keys [joint-pain  soreness-duration pump progress-rating workload] :as metrics} score-based-decision]

   (let [score (cond-> 0
                 (>= joint-pain 2) (- 10)
                 (= soreness-duration 3) (- 10)

                 (= progress-rating 3) (+ 2)
                 (= progress-rating 2) (+ 1)
                 (= progress-rating 1) (- 2)

                 (<= workload 1) (+ 2)
                 (>= workload 2) (- 2)


                 (= soreness-duration 0) (+ 1)
                 (= soreness-duration 2) (- 1)

                 (= pump 0) (+ 2)
                 (= joint-pain 1) (- 1)
                 )]
     (cond
       (>= score 3) 1
       (<= score -3) -1
       :else 0))))


(defn copy-head [[a & rest]]
  (into [ ] (concat [a a] rest)))

(defn adjust-set-count
  "Takes a list of set-maps and a target set count and returns a modified vector of set-maps with the right amount."
  [target-n sets]
  (cond->> sets
    true (take target-n)
    (< (count sets) target-n) copy-head ))


(defn predict-next-exercise
  "Takes a whole exercise log of a workout and predicts the next workout for that exercise, based on data from the workouts performed so far.

  This is not just a map over sets - this takes into account additional feedback and may also increase or decrease the number of sets for an exercise!

  "
  [previous-exercise feedback]
  (let [progress-rating 4
        sets-change (change-number-of-sets? (assoc feedback :progress-rating progress-rating))
        n-sets (+ (count previous-exercise) sets-change )]
    (->> previous-exercise
         (mapv progress-weight-based-on-reps)
         (adjust-set-count n-sets ))))





(defn fill-in-predictions
  "Given training data as a flat vector of maps and a plan, fills the next workout after the latest completed workout with predictions.

  Since you don't want predictions during a workout, this will just return the plan with filled in progress if no workout is completed.
  "
  [data plan]
  nil
  ;; TODO: Find completed workouts
  ;; TODO: Find next workouts after completed workouts
  )


(comment
  (def events
    [(st/completed-set "full body" 0 :monday "Squat" 100 10 nil nil)
     (st/completed-set "full body" 0 :monday "Squat" 105 8 nil nil)
     (st/completed-set "full body" 0 :monday "Pullup" 80 10  nil nil)
     (st/completed-set "full body" 0 :thursday "Bench" 100 8 nil nil)
     (st/completed-set "full body" 0 :thursday "Deadlift" 300 5 nil nil)])

  (def feedbacks [{:soreness 0 :joint-pain 0 :pump 1 :workload 2}])

  (def plan
    {"full body"
     {0
      {:monday {"Squat"
                [{}]
                "Pullup"
                [{}]}
       :thursday {"Bench"
                  [{}]
                  "Deadlift"
                  [{}]}}

      1
      {:monday {"Squat"
                [{}]
                "Pullup"
                [{}]}
       :thursday {"Bench"
                  [{}]
                  "Deadlift"
                  [{}]}}}})

  events
  ;; Do we really want to walk through a map for the prediction?
  ;; Lets first try if we can just build the progression/prediction from the flat event log
  (as-> events ev
    (filterv #(= (:exercise %) "Squat") ev)
    ;; This is already way more convenient than picking the individual exercises out of the global state map
    (group-by (juxt :microcycle :workout) ev)
    ;; Now whats left to do is check prescriptions against performances, put that together with feedback and then give back new exercise data
    ;; Once we have a function for that, we could probably just do something like update-vals in our top level pipeline
    )
;; Simplest scenario: A set is logged as prescribed. Then we just get the next set.
  ;; In fact, at the point of logging, the full data should always be available.
  ;; Any other case (something not being there) is actually not relevant for logging.
  ;; The only exception is at the beginning of a mesocycle, when no data to build prescriptions on is available.
  ;; Then we just take the performed reps and sets as the starting point.
  (let [my-set {:performed-weight 100 :performed-reps 8 :prescribed-reps 8  :prescribed-weight 100}]

    (progress-weight-based-on-reps my-set))

;; ADJUSTING THE WEIGHT
;; When we receive set-data without performance information, that can only mean that the weight was overridden.
  ;; So in this case, we want to adjust the reps, within a certain range, and return nil if the weight would push us out of that rep range.
  (let [my-set {:performed-weight nil :performed-reps nil :prescribed-reps 8 :prescribed-weight 100.0}
        ;; But how do we know, whether that 'overridden' weight actually deviates from what our algorithm prescribed?
        ;; We need to know what the algorithm came up with originally!
        ;; Let's say the algorithm wanted us to lift heavier:

        predicted-set {:prescribed-reps 7 :prescribed-weight 102.5}]

        ;; We need to make sure that the work stays the same. The easiest proxy for that is probably weight*reps (I dont want to call it volume here)
        ;; The simplest approach is probably a scaling factor that does exactly that (you can easily verify yourself that this does it).
    (let [rep-scaling-factor (/ (:prescribed-weight predicted-set) (:prescribed-weight my-set))]
      (-> predicted-set
          (assoc :prescribed-weight (:prescribed-weight my-set))
          (update :prescribed-reps #(* rep-scaling-factor %))))

    ;; Of course, in this case a decrease in weight of 2.5% will still not push us to one more rep (unless we take ceiling).
    ;; So, in fact, we might do just that or some aggressive rounding:
    (let [rep-scaling-factor (/ (:prescribed-weight predicted-set) (:prescribed-weight my-set))]
      (-> predicted-set
          (assoc :prescribed-weight (:prescribed-weight my-set))
          (update :prescribed-reps #(* rep-scaling-factor %))
          (update :prescribed-reps math/ceil)
          (update :prescribed-reps int)))

   ;; Ceiling might be a bit too extreme, because it will ask us to do one more rep as soon as we choose a lighter weight.
    (let [rep-scaling-factor (/ (:prescribed-weight predicted-set) (:prescribed-weight my-set))]
      (-> predicted-set
          (assoc :prescribed-weight (:prescribed-weight my-set))
          (update :prescribed-reps #(* rep-scaling-factor %))
          (update :prescribed-reps math/round)))

;; Still too extreme. I could no engineer the hell out of this to build a really precise approximation.
  ;; What the benchmark seems to do though is just assume 2.5kg steps and if go one step away from the prescribed weight it will
  ;; add/remove one rep.
  ;; So this might actually be good enough: Define a step size, and say one step makes one rep difference.
  ;; I mean you would probably arrive at the same conclusion if you solved this with MILP or whatever, and even if that statement is incorrect,
  ;; I really dont care because this is good enough and I want to ship.
  ;; After all this is neither a math nor an exercise science project, but a software engineering project.

    (let [step-size 2.5]
      ;; TODO: Write a function that maps steps to reps
      ))

;: We might want to add feedback as well, to control the progression
  (predict-next-exercise [{:exercise-name "Squat" :prescribed-weight 100 :prescribed-reps 10 :performed-weight 100 :performed-reps 10}
                          {:exercise-name "Squat" :prescribed-weight 100 :prescribed-reps 10 :performed-weight 100 :performed-reps 10}] {:soreness 0 :joint-pain  0 :pump 0 :workload 0}))

()
