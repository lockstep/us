Rails.application.routes.draw do
  devise_for :users

  unauthenticated :user do
    resources :interactive_text, only: [:index]
    resources :opportunities, only: [:create]
    get '/landing', to: 'pages#landing'
    get '/contact', to: 'pages#hire_us'
    get '/work', to: 'pages#work'
    get '/services', to: 'pages#services'
    get '/team', to: 'pages#team'

    root to: 'pages#home'
  end
end
