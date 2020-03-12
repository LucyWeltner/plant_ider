class Color < ApplicationRecord
	has_many :flower_colors
	has_many :fruit_colors
	has_many :flowers, through: :flower_colors, source: :plants
	has_many :fruits, through: :fruit_colors, source: :plants
end
