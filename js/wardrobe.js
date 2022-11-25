const newClothInputs = document.querySelectorAll('.new-cloth_input');
const newClothButton = document.getElementById('new-cloth_btn');
const clothCollectionDisplay = document.getElementById('cloth-collection_counter');
const favCollectionDisplay = document.getElementById('fav-collection_counter');
const clothCollectionWardrobe = document.getElementById('cloth-collection_wardrobe');

const photoLink = `https://avatars.mds.yandex.net/get-mpic/5280162/img_id2720470264380093359.jpeg/orig`

// Кнопка создания предмета
newClothButton.addEventListener('click', () => {
	const item = new Cloth(++idCloth, newClothInputs[0].value, newClothInputs[1].value, newClothInputs[2].value, newClothInputs[3].value);
	clothCollection.set(idCloth, item);
	clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`
	createElement(item.brand, item.type, item.color, item.season, item.useDate)
})

// Кнопка отрисовки коллекции - ПОЧИНИТЬ ФУНКЦИЮ!!!
const myCollBtn = document.getElementById('my-collection_btn');
myCollBtn.addEventListener('click', () => {
	fillMyCollection()
})

// Кнопка отрисовки Избранного - ПОЧИНИТЬ ФУНКЦИЮ!!!
const myFavBtn = document.getElementById('favourite-list_btn');
myFavBtn.addEventListener('click', () => {
	fillMyFavourites()
})

// Функция отрисовки всей коллекции - ПОЧИНИТЬ!!!
function fillMyFavourites() {
	clothCollectionWardrobe.innerHTML = ``
	for (let i = 0; i < favouritelist.size; i++) {
		console.log(favouritelist.get(i).brand)
	}
	favCollectionDisplay.innerHTML = `Favourite: ${favouritelist.size}`
}

// Функция отрисовки Избранного - ПОЧИНИТЬ!!!
function fillMyCollection() {
	clothCollectionWardrobe.innerHTML = ``
	for (let i = 0; i < clothCollection.size; i++) {
		console.log(clothCollection.get(i).brand)
	}
	clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`
}

// Функция создания предмета
function createElement(brand, type, color, season, useDate) {
	const clothTab = document.createElement('div');
	clothTab.classList.add('cloth-tab', 'cloth-show');
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
	setTimeout(() => {
		clothTab.appendChild(clothPhoto(photoLink, idCloth))
	},300)
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
	const deletedItemId = clothCollection.get(parseInt(id)).id;
	compareCollections(deletedItemId);
	clothCollection.delete(parseInt(id))
	clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`
	const itemTab = document.getElementById(`clothItem-${id}`)
	itemTab.remove()
}

function compareCollections(itemId) { //НЕ РАБОТАЕТ!!!
	for (let i = 1; i < favouritelist.size; i++) {
		if (parseInt(favouritelist.get(i).id) == itemId) {
			favouritelist.delete(i);
		} else {
			return false
		}
	}
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

// Отрисовка блока с фотографией
//https://avatars.mds.yandex.net/get-mpic/5280162/img_id2720470264380093359.jpeg/orig

const clothPhoto = (link, id) => {
	const photoDiv = document.createElement('div');
	photoDiv.id = `clothPhoto-${id}`;
	photoDiv.className = 'cloth-photo_img'
	photoDiv.innerHTML = `
	<img src="${link}" alt="Cloth photo" />
	`
	photoDiv.addEventListener('click', (e) => {
		photoDiv.classList.toggle('photo-show');
	})

	return photoDiv;
}