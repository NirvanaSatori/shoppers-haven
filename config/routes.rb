Rails.application.routes.draw do
    resources :feedbacks
    resources :ratings
    resources :products
    resources :ecommerce_websites
    resources :search_histories 
    resources :users 
    # root 'feedbacks#new'
    # post "contact", to:'feedbacks#new'
    post "/login", to:"auth#login"
    delete "/logout", to: "auth#logout"
    get "/me", to: "users#me"
    post "/signup", to:"users#signup"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
