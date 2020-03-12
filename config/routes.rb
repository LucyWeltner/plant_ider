Rails.application.routes.draw do
	get '/plants' => 'plant#index'
	get 'plants/:id' => 'plant#show'
	get '/leaf_types' => 'leaf_type#index'
	get '/leaf_types/:id' => 'leaf_type#show'
	get '/colors' => 'color#index'
	get '/colors/:id' => 'colors#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
