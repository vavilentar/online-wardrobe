let clothCollection = new Map();
let favouritelist = new Map();
let trashList = new Map();

let collectionsBase = [favouritelist, trashList]

function collectionsList(id) {
	const list = document.createElement('p');
	list.innerHTML = `
	Add to...
	<select id="collectionsList-${id}">
	<option value="favouritelist">Favourite</option>
	<option value="trashList">Trash</option>
	</select>
	`
	return list;
}

// Тестовая функция заполнения коллекции данными

// function fillTemporary() {
// 	for (let i = 0; i < 10; i++) {
// 		let cloth = new Cloth(i,'Puma','T-Shirt','Green','Summer','Never',false)
// 		clothCollection.set(i,cloth);
// 	}
// }

// function fillFavourite() {
// 	for (let i = 0; i < 5; i++) {
// 		let cloth = new Cloth(i,'Puma','T-Shirt','Green','Summer','Never',true)
// 		favouritelist.set(i,cloth);
// 	}
// }

// fillTemporary()
// fillFavourite()

