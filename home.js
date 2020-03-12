
class Plant {
	static all = [];
	constructor(id, common_name, latin_name, leaf_type_id, native, flower_colors, fruit_colors){
		this.id = id
		this.common_name = common_name;
		this.latin_name = latin_name;
		this.leaf_type_id = leaf_type_id;
		this.native = native;
		this.flower_colors = flower_colors
		this.fruit_colors = fruit_colors
		this.flower_colors_ids = flower_colors.map(color => color.id)
		this.fruit_colors_ids = fruit_colors.map(color => color.id)
		this.info = document.createElement("div")
		Plant.all.push(this)
	}
	render(element){
		this.info.id = this.id
		this.info.innerHTML = `<h3>${this.titleize("common_name")}</h3><p><i>${this.latin_name}</i></p><p>Native to NE?: ${this.native}</p>`
		element.appendChild(this.info)
	}
	titleize(attr){
		console.log(this)
		this[`${attr}`] = this[`${attr}`].split(" ")
		this[`${attr}`] = this[`${attr}`].map(word => word[0].toUpperCase()+word.slice(1)).join(" ")
		return this[`${attr}`]
	}
}

class LeafType {
	static all = [];
	constructor(id, name, description, image_link){
		this.id = id;
		this.name = name;
		this.description = description;
		this.image_link = image_link;
		this.label = document.createElement("label");
		this.label.for = this.id;
		this.label.innerText = `${this.name[0].toUpperCase() + this.name.slice(1)}`;
		this.checkbox = document.createElement("input");
		this.checkbox.type = "checkbox";
		this.checkbox.name = "leaftype";
		this.checkbox.id = this.id
		LeafType.all.push(this)
	}
	form(element){
		element.appendChild(this.label)
		element.appendChild(this.checkbox)
		element.innerHTML += `<br></br>`
	}
}

class Color {
	static all = []
	constructor(id, name){
		this.id = id;
		this.name = name
		this.label = document.createElement("label");
		this.label.for = this.id;
		this.label.innerText = `${this.name[0].toUpperCase() + this.name.slice(1)}`;
		this.checkbox = document.createElement("input");
		this.checkbox.type = "checkbox";
		this.checkbox.id = this.id;
		Color.all.push(this)
	}
	form(element){
		element.appendChild(this.label);
		element.appendChild(this.checkbox);
		element.innerHTML += `<br></br>`;
	}
}

class FlowerColor extends Color {
	constructor(id, name) {
		super(id, name);
		this.checkbox.name = "flowerColor";
	}
}

class FruitColor extends Color {
	constructor(id, name) {
		super(id, name)
		this.checkbox.name = "fruitColor";
	}
}

let checked_box_ids = function(checkboxes_array) {
	filtered_array = checkboxes_array.filter(box => box.checked == true)
	let ids = filtered_array.map(checkbox => checkbox.id)
	return ids
}

let filter_plants = function(plant_array, id_array, attr) {
	if (Array.isArray(plant_array[0][attr])) {
		plant_array = plant_array.slice()
		let filtered_plants = []
		id_array.forEach(function(id){
			plant_array.forEach(function(plant, index) {
				if (plant[attr].find(plant_id => plant_id == id) && !(filtered_plants.find(item => item === plant))) {
					filtered_plants.push(plant)
				}
			})
		})
		return filtered_plants
	}
	else {
		id_array = id_array.map(id => plant_array.filter(plant => plant[`${attr}`] == id))
		return id_array.flat()
	}
}

document.addEventListener("DOMContentLoaded", function(){
	let filter = document.querySelector("main")
	fetch("http://localhost:3000/plants").then(response => response.json()).then(function(json){
		json.forEach(function(p){
			let plant = new Plant(p.id, p.common_name, p.latin_name, p.leaf_type_id, p.native, p.flower_colors, p.fruit_colors)
		})
		console.log(Plant.all)
	}).then(function(){
		fetch("http://localhost:3000/leaf_types").then(response => response.json()).then(json => {
			json.forEach(leaf => {
				let leaftype = new LeafType(leaf.id, leaf.name, leaf.description, leaf.image_link)
				leaftype.form(filter)
			})
		}).then(function(){
			fetch("http://localhost:3000/colors").then(response => response.json()).then(json => {
			let flower_colors_title = document.createElement("h3")
			flower_colors_title.innerHTML = "What Color Were The Flowers?"
			filter.appendChild(flower_colors_title)
			json.forEach(color => {
				let color1 = new FlowerColor(color.id, color.name)
				color1.form(filter)
			})
			let fruit_colors_title = document.createElement("h3")
			fruit_colors_title.innerHTML = "What Color Were The Fruits/Berries?"
			filter.appendChild(fruit_colors_title)
			json.forEach(color => {
				let color1 = new FruitColor(color.id, color.name)
				color1.form(filter)
			})
		}).then(function(){
			let leaftypes = Array.from(document.querySelectorAll('[name="leaftype"]'))
			let fruitColors = Array.from(document.querySelectorAll('[name="fruitColor"]'))
			let flowerColors = Array.from(document.querySelectorAll('[name="flowerColor"]'))
			let button = document.querySelector("button")
			button.addEventListener("click", (event => {
				let results = document.querySelector(".results")
				results.innerHTML = ""
				let leaf_ids = checked_box_ids(leaftypes)
				let fruit_color_ids = checked_box_ids(fruitColors)
				let flower_color_ids = checked_box_ids(flowerColors)
				let filtered = Plant.all 
				if (leaf_ids.length !== 0) {
					filtered = filter_plants(Plant.all, leaf_ids, "leaf_type_id")
				}
				if (flower_color_ids.length !== 0) {
					filtered = filter_plants(filtered, flower_color_ids, "flower_colors_ids")
				}
				if (fruit_color_ids.length !== 0) {
					filtered = filter_plants(filtered, fruit_color_ids, "fruit_colors_ids")
				}
				filtered.forEach(plant => plant.render(results))
			}))
		})
	})
})

})