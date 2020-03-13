
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
		this.info.id = `plant-${this.id}`
		let plant_info = () => {return `<h3>${this.titleize("common_name")}</h3><p><i>${this.latin_name}</i></p><p>Native to NE?: ${this.native}</p>`}
		this.info.innerHTML = plant_info()
		let edit = document.createElement("button")
		edit.classList.add("edit")
		edit.id = this.id
		edit.innerHTML = `Edit ${this.titleize("common_name")}`
		let leaf_type_select = () => {
			let html = ""
			for(let i=0; i<LeafType.all.length; i++){
				html += `<option value="${i+1}">${LeafType.all[i].name}</value><br></br>`
			}
			return html
		}
		this.info.appendChild(edit)
		edit.addEventListener("click", () => {
			this.info.innerHTML = `<h3>Edit ${this.common_name}</h3>
				<label for="common_name">Edit Common Name:  </label>
				<input type="text" name="common_name" value="${this.common_name}"></input>
				<br></br><label for="latin_name">Edit Latin Name:  </label>
				<input type="text" name="latin_name" value="${this.latin_name}"></input><br></br>
				<label for="leaf_type_id">Edit Leaf Type:  </label>
				<select id="leaf_type_selector">${leaf_type_select()}</select>
				<label for="password">Password:  </label>
				<input type="password" name="password"></input><br></br>
				<input type="submit" class="submit" value="Edit Plant">`
			let submit_button = document.querySelector(`div#plant-${this.id} > input.submit`)
			let c_name_input = document.querySelector(`div#plant-${this.id} > input[name=common_name]`)
			let l_name_input = document.querySelector(`div#plant-${this.id} > input[name=latin_name]`)
			let leaf_type_menu = document.querySelector(`div#plant-${this.id} > select#leaf_type_selector`)
			let password_input = document.querySelector(`div#plant-${this.id} > input[name=password]`)
			submit_button.addEventListener("click", (event) => {
				event.preventDefault()
				let configObj = {
			 		method: "PATCH",
			 		headers: {
			 			"Content-Type": "application/json",
			 			"Accept": "application/json"
			 		},
			 		body: JSON.stringify({
			 			"common_name": c_name_input.value,
			 			"latin_name": l_name_input.value,
			 			"leaf_type_id": leaf_type_menu.value, 
			 			"password": password_input.value
			 		})
				}
				fetch(`http://localhost:3000/plants/${this.id}`, configObj).then(response => response.json()).then(json => {
					if (json["error"]) {
						this.info.innerHTML = `<p style = "color: #ff8957">${json["error"]}</p>` + plant_info()
					}
					else {
						this.common_name = json["common_name"]
						this.latin_name = json["latin_name"]
						this.leaf_type_id = json["leaf_type_id"]
						this.info.innerHTML = `<p style = "color: #ff8957">Plant successfully edited!</p>` 
						this.info.innerHTML += plant_info()
					}
				})
			})
		})
		element.appendChild(this.info)
	}
	titleize(attr){
		this[`${attr}`] = this[`${attr}`].split(" ")
		this[`${attr}`] = this[`${attr}`].map(word => word[0].toUpperCase()+word.slice(1)).join(" ")
		return this[`${attr}`]
	}
}

class Attribute {
	
	constructor(id, name){
		this.id = id;
		this.name = name
		this.label = document.createElement("label");
		this.label.for = this.id;
		this.label.innerText = `${this.name[0].toUpperCase() + this.name.slice(1)}`;
		this.checkbox = document.createElement("input");
		this.checkbox.type = "checkbox";
		this.checkbox.id = this.id;
		this.constructor.all.push(this)
	}
	static appenddiv(element) {
		element.appendChild(this.div)
	}

	form(){
		this.constructor.div.appendChild(this.label);
		this.constructor.div.appendChild(this.checkbox);
		this.constructor.div.innerHTML += `<br></br>`;
	}
}

class LeafType extends Attribute {
	static all = []
	static div = document.createElement("div")
	constructor(id, name, description, image_link){
		super(id, name);
		this.description = description
		this.image_link = image_link
		this.constructor.div.classList.add("leaf_types")
		this.checkbox.name = "leaftype";
		this.checkbox.id = this.id
	}
}

class FlowerColor extends Attribute {
	static all = []
	static div = document.createElement("div")
	constructor(id, name) {
		super(id, name);
		this.checkbox.name = "flowerColor";
		this.constructor.div.classList.add("flower_colors")
	}
}

class FruitColor extends Attribute {
	static all = []
	static div = document.createElement("div")
	constructor(id, name) {
		super(id, name)
		this.checkbox.name = "fruitColor";
		this.constructor.div.classList.add("fruit_colors")
	}
}

let checked_box_ids = function(checkboxes_array) {
	filtered_array = checkboxes_array.filter(box => box.checked)
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
	let see_all = document.querySelector("nav > p")
	fetch("http://localhost:3000/plants").then(response => response.json()).then(function(json){
		json.forEach(function(p){
			let plant = new Plant(p.id, p.common_name, p.latin_name, p.leaf_type_id, p.native, p.flower_colors, p.fruit_colors)
		})
	}).then(function(){
		fetch("http://localhost:3000/leaf_types").then(response => response.json()).then(json => {
			LeafType.appenddiv(filter)
			json.forEach(leaf => {
				let leaftype = new LeafType(leaf.id, leaf.name, leaf.description, leaf.image_link)
				leaftype.form()
			})
		}).then(function(){
			fetch("http://localhost:3000/colors").then(response => response.json()).then(json => {
			let flower_colors_title = document.createElement("h3")
			flower_colors_title.innerHTML = "What Color Were The Flowers?"
			filter.appendChild(flower_colors_title)
			FlowerColor.appenddiv(filter)
			json.forEach(color => {
				let color1 = new FlowerColor(color.id, color.name)
				color1.form()
			})
			let fruit_colors_title = document.createElement("h3")
			fruit_colors_title.innerHTML = "What Color Were The Fruits/Berries?"
			filter.appendChild(fruit_colors_title)
			FruitColor.appenddiv(filter)
			json.forEach(color => {
				let color1 = new FruitColor(color.id, color.name)
				color1.form()
			})
			}).then(function(){
				let leaftypes = Array.from(document.querySelectorAll('[name="leaftype"]'))
				let fruitColors = Array.from(document.querySelectorAll('[name="fruitColor"]'))
				let flowerColors = Array.from(document.querySelectorAll('[name="flowerColor"]'))
				let button = document.querySelector("#filter")
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

