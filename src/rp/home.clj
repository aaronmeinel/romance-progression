(ns rp.home
  (:require [com.biffweb :as biff]
            [rp.middleware :as mid]
            [rp.ui :as ui]
            [rp.settings :as settings]))

(def email-disabled-notice
  [:small {:role "alert"}
   "Until you add API keys for MailerSend and reCAPTCHA, we'll print your sign-up "
   "link to the console. See config.edn."])

(defn home-page [{:keys [recaptcha/site-key params] :as ctx}]
  (ui/page
   (assoc ctx ::ui/recaptcha true)
   (biff/form
    {:action "/auth/send-link"
     :id "signup"
     :hidden {:on-error "/"}}
    (biff/recaptcha-callback "submitSignup" "signup")
    [:h2 (str "Sign up for " settings/app-name)]
    [:fieldset {:role "group"}
     [:input#email {:name "email"
                    :type "email"
                    :autocomplete "email"
                    :placeholder "Enter your email address"}]
     [:button.g-recaptcha
      (merge (when site-key
               {:data-sitekey site-key
                :data-callback "submitSignup"})
             {:type "submit"})
      "Sign up"]]
    (when-some [error (:error params)]
      [:small {:style {:color "var(--pico-color-red-500)"}}
       (case error
         "recaptcha" (str "You failed the recaptcha test. Try again, "
                          "and make sure you aren't blocking scripts from Google.")
         "invalid-email" "Invalid email. Try again with a different address."
         "send-failed" (str "We weren't able to send an email to that address. "
                            "If the problem persists, try another address.")
         "There was an error.")])
    [:p [:small "Already have an account? " [:a {:href "/signin"} "Sign in"] "."]]
    biff/recaptcha-disclosure
    email-disabled-notice)))

(defn link-sent [{:keys [params] :as ctx}]
  (ui/page
   ctx
   [:h2 "Check your inbox"]
   [:p "We've sent a sign-in link to " [:strong (:email params)] "."]))

(defn verify-email-page [{:keys [params] :as ctx}]
  (ui/page
   ctx
   [:h2 (str "Sign up for " settings/app-name)]
   (biff/form
    {:action "/auth/verify-link"
     :hidden {:token (:token params)}}
    [:p
     "It looks like you opened this link on a different device or browser than the one "
     "you signed up on. For verification, please enter the email you signed up with:"]
    [:fieldset {:role "group"}
     [:input#email {:name "email" :type "email"
                    :placeholder "Enter your email address"}]
     [:button {:type "submit"} "Sign in"]])
   (when-some [error (:error params)]
     [:small {:style {:color "var(--pico-color-red-500)"}}
      (case error
        "incorrect-email" "Incorrect email address. Try again."
        "There was an error.")])))

(defn signin-page [{:keys [recaptcha/site-key params] :as ctx}]
  (ui/page
   (assoc ctx ::ui/recaptcha true)
   (biff/form
    {:action "/auth/send-code"
     :id "signin"
     :hidden {:on-error "/signin"}}
    (biff/recaptcha-callback "submitSignin" "signin")
    [:h2 "Sign in to " settings/app-name]
    [:fieldset {:role "group"}
     [:input#email {:name "email"
                    :type "email"
                    :autocomplete "email"
                    :placeholder "Enter your email address"}]
     [:button.g-recaptcha
      (merge (when site-key
               {:data-sitekey site-key
                :data-callback "submitSignin"})
             {:type "submit"})
      "Sign in"]]
    (when-some [error (:error params)]
      [:small {:style {:color "var(--pico-color-red-500)"}}
       (case error
         "recaptcha" (str "You failed the recaptcha test. Try again, "
                          "and make sure you aren't blocking scripts from Google.")
         "invalid-email" "Invalid email. Try again with a different address."
         "send-failed" (str "We weren't able to send an email to that address. "
                            "If the problem persists, try another address.")
         "invalid-link" "Invalid or expired link. Sign in to get a new link."
         "not-signed-in" "You must be signed in to view that page."
         "There was an error.")])
    [:p [:small "Don't have an account yet? " [:a {:href "/"} "Sign up"] "."]]
    biff/recaptcha-disclosure
    email-disabled-notice)))

(defn enter-code-page [{:keys [recaptcha/site-key params] :as ctx}]
  (ui/page
   (assoc ctx ::ui/recaptcha true)
   (biff/form
    {:action "/auth/verify-code"
     :id "code-form"
     :hidden {:email (:email params)}}
    (biff/recaptcha-callback "submitCode" "code-form")
    [:p "Enter the 6-digit code that we sent to " [:strong (:email params)]]
    [:fieldset {:role "group"}
     [:input#code {:name "code" :type "text"}]
     [:button.g-recaptcha
      (merge (when site-key
               {:data-sitekey site-key
                :data-callback "submitCode"})
             {:type "submit"})
      "Sign in"]])
   (when-some [error (:error params)]
     [:small {:style {:color "var(--pico-color-red-500)"}}
      (case error
        "invalid-code" "Invalid code."
        "There was an error.")])
   (biff/form
    {:action "/auth/send-code"
     :id "signin"
     :hidden {:email (:email params)
              :on-error "/signin"}}
    (biff/recaptcha-callback "submitSignin" "signin")
    [:button.g-recaptcha.secondary
     (merge (when site-key
              {:data-sitekey site-key
               :data-callback "submitSignin"})
            {:type "submit"})
     "Send another code"])))

(def module
  {:routes [["" {:middleware [mid/wrap-redirect-signed-in]}
             ["/"                  {:get home-page}]]
            ["/link-sent"          {:get link-sent}]
            ["/verify-link"        {:get verify-email-page}]
            ["/signin"             {:get signin-page}]
            ["/verify-code"        {:get enter-code-page}]]})
