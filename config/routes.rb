Rails.application.routes.draw do

  get "/about", to: "pages#about"
  get "/projects", to: "pages#projects"

  get "/projects/:id", to: "projects#show", as: "project"


  root "pages#index"

end
