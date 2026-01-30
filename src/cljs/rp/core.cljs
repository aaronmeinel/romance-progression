(ns rp.core
  (:require [reagent.dom :as rdom]
            [rp.db :as db]
            [rp.storage :as storage]
            [rp.ui :as ui]))

(defn init! []
  ;; Load persisted data from IndexedDB
  (storage/load-db!
   (fn []
     ;; Render the app
     (rdom/render [ui/app]
                  (.getElementById js/document "app"))

     ;; Register service worker for PWA
     (when (.-serviceWorker js/navigator)
       (-> js/navigator
           .-serviceWorker
           (.register "/sw.js")
           (.then #(js/console.log "SW registered"))
           (.catch #(js/console.error "SW failed" %))))

     (js/console.log "Romance Progression initialized"))))
