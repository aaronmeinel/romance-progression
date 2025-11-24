(ns rp.ui
  (:require [cheshire.core :as cheshire]
            [clojure.java.io :as io]
            [rp.settings :as settings]
            [com.biffweb :as biff]
            [ring.middleware.anti-forgery :as csrf]
            [ring.util.response :as ring-response]
            [rum.core :as rum]))

(defn static-path [path]
  (if-some [last-modified (some-> (io/resource (str "public" path))
                                  ring-response/resource-data
                                  :last-modified
                                  (.getTime))]
    (str path "?t=" last-modified)
    path))

(defn base [{:keys [::recaptcha] :as ctx} & body]
  (apply
   biff/base-html
   (-> ctx
       (merge #:base{:title settings/app-name
                     :lang "en-US"
                     :icon "/img/glider.png"
                     :description (str settings/app-name " Description")
                     :image "https://clojure.org/images/clojure-logo-120b.png"})
       (update :base/head (fn [head]
                            (concat [[:link {:rel "stylesheet" :href (static-path "/css/main.css")}]
                                     [:script {:src (static-path "/js/main.js")}]
                                     [:script {:src "https://unpkg.com/htmx.org@2.0.7"}]
                                     [:script {:src "https://unpkg.com/htmx-ext-ws@2.0.2/ws.js"}]
                                     [:script {:src "https://unpkg.com/hyperscript.org@0.9.14"}]
                                     (when recaptcha
                                       [:script {:src "https://www.google.com/recaptcha/api.js"
                                                 :async "async" :defer "defer"}])]
                                    head))))
   body))

(defn page [ctx & body]
  (base
   ctx
   [:.flex-grow]
   [:.p-3.mx-auto.max-w-screen-sm.w-full
    (when (bound? #'csrf/*anti-forgery-token*)
      {:hx-headers (cheshire/generate-string
                    {:x-csrf-token csrf/*anti-forgery-token*})})
    body]
   [:.flex-grow]
   [:.flex-grow]))

(defn on-error [{:keys [status ex] :as ctx}]
  {:status status
   :headers {"content-type" "text/html"}
   :body (rum/render-static-markup
          (page
           ctx
           [:h1.text-lg.font-bold
            (if (= status 404)
              "Page not found."
              "Something went wrong.")]))})

(defn input
  "Generic input element for forms."
  [attrs]
  [:input (merge {:type "number" :class "input input-bordered"} attrs)])

(defn set-row
  "Display a set in a row with input elements for logging."
  [{:keys [prescribed-weight prescribed-reps
           actual-weight actual-reps]}]
  [:div.set-row.flex.items-center.gap-2
   (input {:name "weight"
           :value actual-weight
           :placeholder (or prescribed-weight "kg")
           :inputmode "decimal"
           :step "0.5"})
   [:span "×"]
   (input {:name "reps"
           :value actual-reps
           :placeholder (or prescribed-reps "reps")
           :inputmode "numeric"})
   [:input {:type "checkbox"
            :name "completed"
            :checked (some? actual-weight)}]])





(defn exercise
  "Display an exercise with its sets."
  [{:keys [name sets]}] [:div.exercise.mb-6
                                      [:h3.text-lg.font-semibold.mb2 name]
                                      [:div.sets.space-y-2
                                       (for [set-data sets] (set-row set-data))]])

(defn workout
  "Display a workout as a section, with the exercises in it."
  [{:keys [name day exercises]}]
  [:div.workout
   [:h2.text-2xl.font-bold.mb-4
    name " - " (clojure.core/name day)]
   [:div.exercises
    (for [ex exercises]
      (exercise ex))]])

(defn workout-list [workouts]
  [:div.workout-list.p-4
   (for [w workouts]
     (workout w))])

(defn render-plan [{:keys [microcycles]}]
  (->> microcycles
       first ;; TODO: replace this with get-active-microcycle
       :workouts
       workout-list))
