class FruitColor < ApplicationRecord
	belongs_to :color 
	belongs_to :plant
end
