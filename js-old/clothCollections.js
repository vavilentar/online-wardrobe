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