(ns rp.domain.plan
  (:require
    [clojure.edn :as edn]
    [clojure.java.io :as io]))




(def default-template-path "resources/sample-plan.edn")


(defn expand-sets-in-exercise
  "Takes a map that represents an exercise in a template and returns exactly that with a sequence of actual sets, not only the number of sets.
  "
  [{:keys [name n-sets muscle-groups equipment]}]
  (let [sets (repeat n-sets {:prescribed-weight nil :prescribed-reps nil :actual-weight nil :actual-reps nil})]
    {:name name :sets sets :muscle-groups muscle-groups :equipment equipment}))


(defn expand-exercises [{:keys [name day exercises]}]
  {:name name :day day :exercises (mapv expand-sets-in-exercise exercises)})



(defn ->plan [template]
  {:microcycles (vec (repeat (:n-microcycles template) (update template :workouts #(mapv expand-exercises %))))})


(def template (->> (io/resource "sample-plan.edn")
                   slurp
                   edn/read-string))



(->plan template)

(->> template
     ->plan
     :microcycles
     first)
