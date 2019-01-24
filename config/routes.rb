Rails.application.routes.draw do
  resources :portfolios

  get 'about-me', to: "pages#about"
  get 'get-in-touch', to: "pages#contact"
  
  resources :posts do
    member do
      get :toggle_status
    end
  end
  
  root to: "pages#home"
end
