Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :friendships, only: [:create, :destory]
    resources :requests, only: [:create, :destroy]
    resources :comments, only: [:index, :create, :update, :destroy]
  end

  root to: "static_pages#root"
end
