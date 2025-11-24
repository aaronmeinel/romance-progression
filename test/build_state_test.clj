(ns build-state-test

  (:require [clojure.test :refer :all]
             [clojure.test.check.clojure-test :refer [defspec]]
             [clojure.test.check.properties :as prop]
             [clojure.test.check.generators :as gen]
             [rp.domain.state :as e]))

;; =============================================================================
;; Generators
;; =============================================================================

(def workout-names ["A" "B" "C" "Push" "Pull" "Legs"])
(def exercise-names ["Bench" "Squat" "Deadlift" "Row" "OHP" "Curl"])

(def gen-microcycle-started
  (gen/return {:type :microcycle-started}))

(def gen-workout-started
  (gen/fmap #(hash-map :type :workout-started :name %)
            (gen/elements workout-names)))

(def gen-set-completed
  (gen/fmap (fn [[ex idx w r]]
              {:type :set-completed
               :exercise ex
               :set-index idx
               :weight w
               :reps r})
            (gen/tuple (gen/elements exercise-names)
                      (gen/choose 0 4)
                      (gen/choose 20 200)
                      (gen/choose 1 20))))

(def gen-workout-completed
  (gen/return {:type :workout-completed}))

(def gen-microcycle-completed
  (gen/return {:type :microcycle-completed}))

(def gen-event
  (gen/frequency [[10 gen-microcycle-started]
                  [20 gen-workout-started]
                  [40 gen-set-completed]
                  [15 gen-workout-completed]
                  [15 gen-microcycle-completed]]))

;; Valid sequences with causality preserved
(def gen-valid-workout
  (gen/let [name (gen/elements workout-names)
            n-sets (gen/choose 1 5)
            sets (gen/vector gen-set-completed n-sets)]
    (concat [{:type :workout-started :name name}]
            sets
            [{:type :workout-completed}])))

(def gen-valid-microcycle
  (gen/let [n-workouts (gen/choose 1 3)
            workouts (gen/vector gen-valid-workout n-workouts)]
    (concat [{:type :microcycle-started}]
            (apply concat workouts)
            [{:type :microcycle-completed}])))

;; Plan generators
(def gen-exercise-spec
  (gen/fmap (fn [[name n-sets]]
              {:name name :n-sets n-sets :muscle-groups [:chest]})
            (gen/tuple (gen/elements exercise-names)
                      (gen/choose 1 5))))

(def gen-workout-spec
  (gen/fmap (fn [[name exercises]]
              {:name name :day :monday :exercises exercises})
            (gen/tuple (gen/elements workout-names)
                      (gen/vector gen-exercise-spec 1 4))))

(def gen-plan-template
  (gen/fmap (fn [[n-mc workouts]]
              {:n-microcycles n-mc :workouts workouts})
            (gen/tuple (gen/choose 1 4)
                      (gen/vector gen-workout-spec 1 3))))

;; =============================================================================
;; Properties - Core Invariants
;; =============================================================================

(defspec empty-events-empty-state 100
  (prop/for-all [_ gen/nat]
    (= {} (e/build-state []))))

(defspec deterministic 100
  (prop/for-all [events (gen/vector gen-event)]
    (= (e/build-state events)
       (e/build-state events))))

(defspec always-map 100
  (prop/for-all [events (gen/vector gen-event)]
    (map? (e/build-state events))))

(defspec unknown-events-ignored 100
  (prop/for-all [bad-type gen/keyword]
    (= {} (e/build-state [{:type bad-type :foo "bar"}]))))

;; =============================================================================
;; Properties - Structural Invariants
;; =============================================================================

(defspec microcycles-is-vector 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)]
      (or (nil? (:microcycles state))
          (vector? (:microcycles state))))))

(defspec microcycle-count-matches-starts 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)
          n-started (count (filter #(= :microcycle-started (:type %)) events))
          n-in-state (count (:microcycles state))]
      (= n-started n-in-state))))

(defspec current-mc-in-bounds 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)
          current (:current-mc state)
          n-microcycles (count (:microcycles state))]
      (or (nil? current)
          (< current n-microcycles)))))

(defspec workouts-are-maps 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)
          all-workouts (mapcat :workouts (:microcycles state))]
      (every? map? all-workouts))))

;; =============================================================================
;; Properties - Causal Invariants
;; =============================================================================

(defspec no-workout-without-microcycle 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)
          has-workouts? (some (fn [mc] (seq (:workouts mc)))
                             (:microcycles state))
          has-mc-started? (some #(= :microcycle-started (:type %)) events)]
      (or (not has-workouts?) has-mc-started?))))

(defspec current-workout-needs-start 100
  (prop/for-all [events (gen/vector gen-event)]
    (let [state (e/build-state events)
          has-current? (some? (:current-wo state))
          has-started? (some #(= :workout-started (:type %)) events)]
      (or (not has-current?) has-started?))))

(defspec completed-workout-clears-current 100
  (prop/for-all [seq gen-valid-workout]
    (let [state (e/build-state (concat [{:type :microcycle-started}] seq))]
      (nil? (:current-wo state)))))

(defspec completed-microcycle-clears-current 100
  (prop/for-all [seq gen-valid-microcycle]
    (let [state (e/build-state seq)]
      (nil? (:current-mc state)))))

;; =============================================================================
;; Properties - Set Data Integrity
;; =============================================================================

(defspec sets-have-weight-and-reps 100
  (prop/for-all [seq gen-valid-workout]
    (let [state (e/build-state (concat [{:type :microcycle-started}] seq))
          all-sets (->> state :microcycles
                       (mapcat :workouts)
                       (map val)
                       (mapcat :exercises)
                       (map val)
                       (mapcat vals))]
      (every? (fn [s] (and (contains? s :weight)
                          (contains? s :reps)))
              all-sets))))

(defspec set-values-match-events 100
  (prop/for-all [weight (gen/choose 50 150)
                 reps (gen/choose 5 12)]
    (let [events [{:type :microcycle-started}
                  {:type :workout-started :name "A"}
                  {:type :set-completed
                   :exercise "Bench"
                   :set-index 0
                   :weight weight
                   :reps reps}]
          state (e/build-state events)
          set-data (get-in state [:microcycles 0 :workouts "A" :exercises "Bench" 0])]
      (and (= weight (:weight set-data))
           (= reps (:reps set-data))))))

;; =============================================================================
;; Properties - Merge Invariants
;; =============================================================================

(defn ->plan [template]
  {:microcycles
   (vec (repeat (:n-microcycles template)
                {:workouts
                 (mapv (fn [wo]
                        {:name (:name wo)
                         :day (:day wo)
                         :exercises
                         (mapv (fn [ex]
                                {:name (:name ex)
                                 :sets (vec (repeat (:n-sets ex)
                                                   {:weight nil :reps nil}))
                                 :muscle-groups (:muscle-groups ex)})
                              (:exercises wo))})
                      (:workouts template))}))})

(defspec merge-preserves-microcycle-count 100
  (prop/for-all [template gen-plan-template
                 events (gen/vector gen-event)]
    (let [plan (->plan template)
          state (e/build-state events)
          merged (e/annotate-plan plan state)]
      (= (count (:microcycles plan))
         (count (:microcycles merged))))))

(defspec merge-preserves-workout-count 100
  (prop/for-all [template gen-plan-template
                 events (gen/vector gen-event)]
    (let [plan (->plan template)
          state (e/build-state events)
          merged (e/annotate-plan plan state)]
      (every? (fn [[p m]]
               (= (count (:workouts p))
                  (count (:workouts m))))
             (map vector (:microcycles plan) (:microcycles merged))))))

(defspec merge-adds-status-everywhere 100
  (prop/for-all [template gen-plan-template
                 events (gen/vector gen-event)]
    (let [plan (->plan template)
          state (e/build-state events)
          merged (e/annotate-plan plan state)]
      (and (every? #(contains? % :status) (:microcycles merged))
           (every? (fn [mc]
                    (every? #(contains? % :status) (:workouts mc)))
                  (:microcycles merged))))))

(defspec merge-is-idempotent 100
  (prop/for-all [template gen-plan-template
                 events (gen/vector gen-event)]
    (let [plan (->plan template)
          state (e/build-state events)
          merged1 (e/annotate-plan plan state)
          merged2 (e/annotate-plan plan state)]
      (= merged1 merged2))))

;; =============================================================================
;; Properties - Valid Sequences
;; =============================================================================

(defspec valid-workout-sequences-work 100
  (prop/for-all [seq gen-valid-workout]
    (try
      (let [state (e/build-state (concat [{:type :microcycle-started}] seq))]
        (and (map? state)
             (= 1 (count (:microcycles state)))))
      (catch Exception _ false))))

(defspec valid-microcycle-sequences-work 100
  (prop/for-all [seq gen-valid-microcycle]
    (try
      (let [state (e/build-state seq)]
        (and (map? state)
             (= 1 (count (:microcycles state)))))
      (catch Exception _ false))))

(defspec multiple-microcycles-increment 100
  (prop/for-all [n (gen/choose 1 5)]
    (let [events (mapcat (fn [_]
                          [{:type :microcycle-started}
                           {:type :microcycle-completed}])
                        (range n))
          state (e/build-state events)]
      (= n (count (:microcycles state))))))

;; =============================================================================
;; Traditional Unit Tests
;; =============================================================================

(deftest basic-workout-flow
  (let [events [{:type :microcycle-started}
                {:type :workout-started :name "A"}
                {:type :set-completed :exercise "Bench" :set-index 0
                 :weight 100 :reps 8}
                {:type :workout-completed}]
        state (e/build-state events)]
    (is (= 0 (:current-mc state)))
    (is (nil? (:current-wo state)))
    (is (= :completed (get-in state [:microcycles 0 :workouts "A" :status])))))

(deftest merge-with-actuals
  (let [plan {:microcycles [{:workouts [{:name "A"
                                         :exercises [{:name "Bench"
                                                     :sets [{:weight nil :reps nil}
                                                            {:weight nil :reps nil}]}]}]}]}
        state {:microcycles [{:workouts {"A" {:exercises {"Bench" {0 {:weight 100 :reps 8}
                                                                   1 {:weight 100 :reps 7}}}}}}]}
        merged (e/annotate-plan plan state)]
    (is (= 100 (get-in merged [:microcycles 0 :workouts 0 :exercises 0 :sets 0 :weight])))
    (is (= 7 (get-in merged [:microcycles 0 :workouts 0 :exercises 0 :sets 1 :reps])))))

(comment
  (run-tests)

  ;; Sample some generators
  (gen/sample gen-valid-workout 3)
  (gen/sample gen-valid-microcycle 2)
  (gen/sample gen-plan-template 3)
  )
