Rails.application.routes.draw do
  devise_for :users, path: '', 
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }
  resources :portfolios do
    put :sort, on: :collection
  end
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
