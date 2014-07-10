Pageflow::ExternalLinks::Engine.routes.draw do
  resources :entries, only: [], shallow: true do
    resources :sites
  end
end
