const newClothInputs = document.querySelectorAll('.new-cloth_input');
const newClothButton = document.getElementById('new-cloth_btn');
const clothCollectionDisplay = document.getElementById('cloth-collection_counter');
const favCollectionDisplay = document.getElementById('fav-collection_counter');
const clothCollectionWardrobe = document.getElementById('cloth-collection_wardrobe');

// Кнопка удаления предмета
newClothButton.addEventListener('click', () => {
	const item = new Cloth(++idCloth, newClothInputs[0].value, newClothInputs[1].value, newClothInputs[2].value, newClothInputs[3].value);
	clothCollection.set(idCloth, item);
	clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`
	createElement(item.brand, item.type, item.color, item.season, item.useDate)
})

// Функция создания предмета
function createElement(brand, type, color, season, useDate) {
	const clothTab = document.createElement('div');
	clothTab.classList.add('cloth-tab','cloth-show');
	clothTab.id = `clothItem-${idCloth}`
	clothTab.innerHTML = `
	<h2>${brand}</h2>
	<h3>${type}</h3>
	<div id="clothDescr">
	<p>Color: <b>${color}</b></p>
	<p>Season: <b>${season}</b></p>
	<p id="lastUsed-${idCloth}">Last used: <b>${useDate}</b></p>
	</div>
	`
	clothTab.appendChild(clothActionsTab(idCloth))
	clothTab.appendChild(moveBtn(idCloth))
	clothTab.appendChild(deleteBtn())
	clothCollectionWardrobe.appendChild(clothTab)
}


// Кнопка удаления предмета
function deleteBtn() {
	const deleteBtn = document.createElement('button');
	deleteBtn.className = 'delete-cloth_btn';
	deleteBtn.innerHTML = 'Delete'
	deleteBtn.addEventListener('click', (e) => {
		deleteItem(e.target.parentElement.id.split('-').pop())
	})

	return deleteBtn;
}

// Функция удаления предмета
function deleteItem(id) { // Добавить удаление из Избранного!
	clothCollection.delete(parseInt(id))
	if (favouritelist.get(parseInt(id))) {

	}
	clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`
	const itemTab = document.getElementById(`clothItem-${id}`)
	itemTab.remove()
}

// Кнопка "Добавить в коллекцию" - НЕ РАБОТАЕТ
function moveBtn(id) {
	const moveBtn = document.createElement('button');
	moveBtn.className = 'move-cloth_btn';
	moveBtn.innerHTML = 'Move'
	moveBtn.addEventListener('click', (e) => {
		const list = document.getElementById(`collectionsList-${id}`);
		console.log(list.value)
		moveItem(list.value, id)
	})

	return moveBtn;
}

// Функция "Добавить в коллекцию" - НЕ РАБОТАЕТ
const moveItem = (list, id) => {
	const item = clothCollection.get(id)
	console.log('moveItem ~ item', item)
	console.log('moveItem ~ id', id)
	console.log('moveItem ~ list', list)
	// list.set(id, item)
}