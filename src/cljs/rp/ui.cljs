(ns rp.ui
  (:require [reagent.core :as r]
            [rp.db :as db]
            [rp.plan :as plan]
            [clojure.string :as str]))

(defn set-row
  "A single set with weight/reps inputs."
  [mesocycle microcycle workout exercise set-index]
  (let [weight (r/atom "")
        reps (r/atom "")
        logged (db/get-set-log mesocycle microcycle workout exercise set-index)]
    (fn []
      (let [completed? (some? (:event/performed-weight logged))]
        [:form {:style {:display "flex" :gap "0.5rem" :align-items "center" :margin-bottom "0.5rem"}}
         [:input {:type "number"
                  :placeholder "kg"
                  :value (or (:event/performed-weight logged) @weight)
                  :disabled completed?
                  :on-change #(reset! weight (-> % .-target .-value))
                  :style {:width "5rem"}}]
         [:span "×"]
         [:input {:type "number"
                  :placeholder "reps"
                  :value (or (:event/performed-reps logged) @reps)
                  :disabled completed?
                  :on-change #(reset! reps (-> % .-target .-value))
                  :style {:width "4rem"}}]
         [:input {:type "checkbox"
                  :checked completed?
                  :disabled completed?
                  :on-change (fn [_]
                               (when (and (seq @weight) (seq @reps))
                                 (db/log-set!
                                  {:mesocycle mesocycle
                                   :microcycle microcycle
                                   :workout workout
                                   :exercise exercise
                                   :set-index set-index
                                   :weight (js/parseFloat @weight)
                                   :reps (js/parseInt @reps)})))}]
         (when completed?
           [:span "✓"])]))))

(defn exercise-card
  "An exercise with its sets."
  [mesocycle microcycle workout [exercise-name sets]]
  [:article {:key exercise-name}
   [:h4 exercise-name]
   (for [idx (range (count sets))]
     ^{:key idx}
     [set-row mesocycle microcycle workout exercise-name idx])])

(defn workout-section
  "A workout day with its exercises."
  [mesocycle microcycle [day exercises]]
  [:section {:key (name day)}
   [:h3 (str/capitalize (name day))]
   (for [ex exercises]
     ^{:key (first ex)}
     [exercise-card mesocycle microcycle (name day) ex])])

(defn microcycle-section
  "A week with its workouts."
  [[idx workouts] mesocycle]
  [:section {:key idx}
   [:h2 (str "Week " (inc idx))]
   (for [workout (seq workouts)]
     ^{:key (first workout)}
     [workout-section mesocycle idx workout])])

(defn app
  "Main app component."
  []
  (let [{:keys [name microcycles]} plan/plan]
    [:main.container
     [:header
      [:h1 name]
      [:p "Track your workout progression"]]

     (for [micro microcycles]
       ^{:key (first micro)}
       [microcycle-section micro name])

     [:footer {:style {:margin-top "2rem" :text-align "center"}}
      [:small "Romance Progression • Local-first PWA"]]]))
