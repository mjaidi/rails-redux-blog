Rails.application.routes.draw do
  get 'react_blog', to: 'pages#react_blog'
  get 'vue_blog', to: 'pages#vue_blog'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "react_blog/posts/:id", to: 'pages#react_blog'
  get "react_blog/posts/new", to: 'pages#react_blog'
  get "vue_blog/posts/:id", to: 'pages#vue_blog'
  get "vue_blog/posts/new", to: 'pages#vue_blog'

  # API routing
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :posts, only: [ :index, :show, :create ]
    end
  end
end
