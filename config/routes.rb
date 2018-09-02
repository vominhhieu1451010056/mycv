Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'welcome#homepage', as: 'home'
  get 'newBlog' => 'blog#blogroot', as: 'newblog'
  get 'newContact' => 'contact#contactroot', as: 'newcontact'
  get 'newPdf' => 'sendfile', as: 'academics_download_file'
  get "home/download_pdf"
end
