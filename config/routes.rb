Rails.application.routes.draw do
  resources :portfolios

  get 'about-me', to: "pages#about"
  get 'get-in-touch', to: "pages#contact"

  resources :posts
  
  root to: "pages#home"
end
