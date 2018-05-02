Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games, path: "/api/games"

  post    "/login"       => "sessions#create"
delete    "/logout"      => "sessions#destroy"
get       "/profile"     => "users#profile"
resources :users
end
