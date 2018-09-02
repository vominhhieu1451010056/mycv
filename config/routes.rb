Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#homepage', as: 'home'
  get 'new' => 'blog#new', as: 'new'
  get "home/download_pdf"
end
