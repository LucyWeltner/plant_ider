class Plant < ApplicationRecord
	belongs_to :leaf_type
	has_many :flower_colors 
	has_many :flow_colors, through: :flower_colors, source: :color
	has_many :fruit_colors 
	has_many :fru_colors, through: :fruit_colors, source: :color
	@@password = ENV["PLANT_SECRET"]
	def self.password
		@@password
	end
end