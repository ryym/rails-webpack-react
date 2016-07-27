require_relative '../lib/racks/frontend_proxy'

Rails.application.routes.draw do
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  mount FrontendProxy.new, at: "/assets" if Rails.env.development?
end
