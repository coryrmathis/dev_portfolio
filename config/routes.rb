Rails.application.routes.draw do

  get "/about", to: "pages#about"
  get "/projects", to: "pages#projects"


  root "pages#index"

end
