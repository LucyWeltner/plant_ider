# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'pry'

Color.create!(name: "black")

Color.create!(name: "Purple")

Color.create!(name: "white")

Color.create!(name: "pink")

Color.create!(name: "Red")

Color.create(name: "Blue")

Color.create(name: "Green")

Color.create(name: "yellow")

Color.create!(name: "orange")

LeafType.create!({name: "toothed", description: "Leaf had small but regular points along the edge, like a serrated knife."})

LeafType.create!({name: "smooth", description: "Leaf is smooth along the edge, with no points."})

LeafType.create({name: "grass-shaped", description: "Leaf is long, thin and tapers to a point, like grass."})

LeafType.create({name: "lobed", description: "Leaf looks like it has bites taken out of the edge. A common example of a lobed leaf is an oak leaf."})

LeafType.create({name: "irregular", description: "Leaves have no regular shape; some leaves may be completely smooth along the edge, while others may have lobes or teeth."})

Plant.create!({common_name: "black nightshade", latin_name: "Solanum nigrum", leaf_type_id: 5, native: false})

Plant.create!({common_name: "pokeweed", latin_name: "Phytolacca americana", leaf_type_id: 2, native: true})

Plant.create!({common_name: "tear thumb", latin_name: "Persicaria perfoliata", leaf_type_id: 2, native: false})

Plant.create!({common_name: "garlic mustard", latin_name: "Alliaria petiolata", leaf_type_id: 1, native: false})

Plant.create!({common_name: "poison ivy", latin_name: "Toxicodendron radicans", leaf_type_id: 5, native: true})

Plant.create!({common_name: "common milkweed", latin_name: "Asclepias syriaca", leaf_type_id: 2, native: true})

FruitColor.create!(plant_id: 1, color_id: 1)

FruitColor.create!(plant_id: 1, color_id: 5)

FruitColor.create!(plant_id: 1, color_id: 2)

FlowerColor.create!(plant_id: 1, color_id: 2)

FlowerColor.create!(plant_id: 1, color_id: 3)

FlowerColor.create!(plant_id: 2, color_id: 3)

FruitColor.create!(plant_id: 2, color_id: 2)

FruitColor.create!(plant_id: 2, color_id: 1)

FlowerColor.create!(plant_id: 3, color_id: 3)

FruitColor.create!(plant_id: 3, color_id: 6)

FruitColor.create!(plant_id: 3, color_id: 7)

FruitColor.create!(plant_id: 3, color_id: 2)

FlowerColor.create!(plant_id: 4, color_id: 3)

FlowerColor.create(plant_id: 5, color_id: 7)

FlowerColor.create!(plant_id: 5, color_id: 3)

FruitColor.create!(plant_id: 5, color_id: 3)

FlowerColor.create!(plant_id: 6, color_id: 5)

FlowerColor.create!(plant_id: 6, color_id: 4)


# toothed  smooth  grass-shaped  lobed  irregular

# single clumped