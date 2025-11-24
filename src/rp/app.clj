(ns rp.app
  (:require [com.biffweb :as biff :refer [q]]
            [rp.middleware :as mid]
            [rp.ui :as ui]
            [rp.settings :as settings]
            [rum.core :as rum]
            [rp.domain.plan :as plan]
            [xtdb.api :as xt]
            [cheshire.core :as cheshire]
            [clojure.core :as c]))





(defn app [{:keys [session biff/db] :as ctx}]
  (let [{:user/keys [email]} (xt/entity db (:uid session))]
    (ui/page
      {}
      [:div "Signed in as " email ". "
       (biff/form
         {:action "/auth/signout"
          :class "inline"}
         [:button.text-blue-500.hover:text-blue-800 {:type "submit"}
          "Sign out"])
       "."]
      [:.h-6 "Plan"]
      (ui/render-plan (plan/->plan plan/template))
      [:.h-6])))



(def about-page
  (ui/page
   {:base/title (str "About " settings/app-name)}
   [:p "This app was made with "
    [:a.link {:href "https://biffweb.com"} "Biff"] "."]))

(defn echo [{:keys [params]}]
  {:status 200
   :headers {"content-type" "application/json"}
   :body params})

(def module
  {:static {"/about/" about-page}
   :routes ["/app" {:middleware [mid/wrap-signed-in]}
            ["" {:get app}]
            ]
   :api-routes [["/api/echo" {:post echo}]]})
