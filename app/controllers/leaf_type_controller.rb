class LeafTypeController < ApplicationController
	def index
		leaf_types = LeafType.all 
		render json: leaf_types
	end
	def show
		leaf_type = LeafType.find_by_id(params[:id])
		render json: leaf_type 
	end
end