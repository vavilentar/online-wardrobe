"use strict";
let clothCollection = new Map();
let favouritelist = new Map();
let trashList = new Map();
function collectionsList(id) {
    const list = document.createElement('p');
    list.innerHTML = `
	Add to...
	<select id="collectionsList-${id}">
	<option value="favouritelist">Favourite</option>
	<option value="trashList">Trash</option>
	</select>
	`;
    return list;
}
//# sourceMappingURL=clothCollections.js.map
