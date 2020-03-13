class PlantController < ApplicationController
	skip_before_action :verify_authenticity_token, except: [:create, :destroy]
	def index
		plants = Plant.all
		plants = plants.map do |plant|
			{id: plant.id, common_name: plant.common_name, latin_name: plant.latin_name, leaf_type_id: plant.leaf_type_id, native: plant.native, fruit_colors: plant.fru_colors, flower_colors: plant.flow_colors}
		end
		render json: plants
	end

	def show 
		plant = Plant.find_by_id(params[:id])
		render json: {id: plant.id, common_name: plant.common_name, latin_name: plant.latin_name, leaf_type_id: plant.leaf_type_id, native: plant.native, fruit_colors: plant.fru_colors, flower_colors: plant.flow_colors}
	end

	def update
		plant = Plant.find_by_id(params[:id])
		if params[:password] == Plant.password
			if plant.update(params.permit(:common_name, :latin_name, :leaf_type_id, :native)) 
				render json: {id: plant.id, common_name: plant.common_name, latin_name: plant.latin_name, leaf_type_id: plant.leaf_type_id, native: plant.native, fruit_colors: plant.fru_colors, flower_colors: plant.flow_colors}
			else
				render json: {error: "Password is not correct"}
			end
		end
	end
end