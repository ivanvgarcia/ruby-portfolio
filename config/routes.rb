Rails.application.routes.draw do
  devise_for :users
  resources :portfolios
  get 'react-items', to: 'portfolios#react'

  get 'about-me', to: "pages#about"
  get 'contact', to: "pages#contact"

  resources :posts do
    member do
      post :toggle_status
    end
  end

  root to: "pages#home"
end
