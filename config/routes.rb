Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :lists
    resources :tasks
  end
  root "static_pages#root"
end
