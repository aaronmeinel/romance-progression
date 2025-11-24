(ns rp.schema)

(def schema
  {:user/id :uuid
   :user [:map {:closed true}
          [:xt/id                     :user/id]
          [:user/email                :string]
          [:user/joined-at            inst?]
          [:user/foo {:optional true} :string]
          [:user/bar {:optional true} :string]]

   :msg/id :uuid
   :msg [:map {:closed true}
         [:xt/id       :msg/id]
         [:msg/user    :user/id]
         [:msg/text    :string]
         [:msg/sent-at inst?]]
   :event/id :uuid
   :event [:map {:closed true}
           [:xt/id           :event/id]
           [:event/type      [:enum :microcycle-started
                              :workout-started
                              :set-completed
                              :workout-completed
                              :microcycle-completed]]
           [:event/user      :uuid]
           [:event/timestamp inst?]
           [:event/name      {:optional true} :string]
           [:event/exercise  {:optional true} :string]
           [:event/set-index {:optional true} :int]
           [:event/weight    {:optional true} :double]
           [:event/reps      {:optional true} :int]]})


(def module
  {:schema schema})
