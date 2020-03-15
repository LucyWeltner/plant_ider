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

Plant.create!({common_name: "black nightshade", latin_name: "Solanum nigrum", leaf_type_id: 5, native: false, image: "https://plantsam.com/wp-content/uploads/2019/10/Solanum-nigrum-1600x1067.jpg"})

Plant.create!({common_name: "pokeweed", latin_name: "Phytolacca americana", leaf_type_id: 2, native: true, image: "https://extension.umass.edu/landscape/sites/landscape/files/weeds/leaves/phtam7w.jpg"})

Plant.create!({common_name: "tear thumb", latin_name: "Persicaria perfoliata", leaf_type_id: 2, native: false, image: "https://extension.umd.edu/sites/default/files/_images/programs/hgic/Weeds/Mile%20a%20Minute%20DSCN2548.jpg"})

Plant.create!({common_name: "garlic mustard", latin_name: "Alliaria petiolata", leaf_type_id: 1, native: false, image: "https://silentsports.net/wp-content/uploads/2016/05/CS-Garlic-mustard-Lliam-Rooney-900x1355.jpg"})

Plant.create!({common_name: "poison ivy", latin_name: "Toxicodendron radicans", leaf_type_id: 5, native: true, image: "https://keepkidshealthycom.files.wordpress.com/2018/04/dsc_0353.jpg"})

Plant.create!({common_name: "common milkweed", latin_name: "Asclepias syriaca", leaf_type_id: 2, native: true, image: "https://www.fs.fed.us/wildflowers/plant-of-the-week/images/commonmilkweed/Asclepias_syriaca_7A_lg.jpg"})

Plant.create!({common_name: "yarrow", latin_name: "Achillea Millefolium", leaf_type_id: 1, native: true, image: "https://www.friendsofthewildflowergarden.org/generaljpegs/Seasons/earlysummer/yarrowplt65x380.jpg"})

Plant.create!({common_name: "purple false foxglove", latin_name: "Agalinis purpurea", leaf_type_id: 3, native: true, image: "https://farm6.staticflickr.com/5332/9926174443_d51b92c0a2_b.jpg"})

Plant.create!({common_name: "Tansy", latin_name: "Tanacetum vulgare", leaf_type_id: 1, native: false, image: "https://sedonaaromatics.com/wp-content/uploads/2015/07/Tansy-Tanacetum-vulgare-M-Schuppich-Fotolia.jpg"})

Plant.create!({common_name: "Canada goldenrod", latin_name: "Solidago Canadensis", leaf_type_id: 2, native: true, image: "http://www.bio.brandeis.edu/fieldbio/medicinal_plants/images/goldenrod_whole_full.jpg"})

Plant.create!({common_name: "Asiatic Dayflower", latin_name: "Commelina communis", leaf_type_id: 3, native: false, image: "http://mywildflowers.com/hires/stv21.jpg"})



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

FlowerColor.create!(plant_id: 9, color_id: 9)

FlowerColor.create!(plant_id: 9, color_id: 8)

FlowerColor.create!(plant_id: 8, color_id: 4)

FlowerColor.create!(plant_id: 8, color_id: 2)

FlowerColor.create!(plant_id: 7, color_id: 3)

FlowerColor.create!(plant_id: 10, color_id: 8)

FlowerColor.create!(plant_id: 10, color_id: 9)

FlowerColor.create!(plant_id: 11, color_id: 6)
# toothed  smooth  grass-shaped  lobed  irregular

# single clumped