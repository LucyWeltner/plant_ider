class PlantController < ApplicationController
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

end