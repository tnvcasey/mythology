Rails.application.routes.draw do
  namespace :api do 
    resources :gods
    root "gods#index"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
end
