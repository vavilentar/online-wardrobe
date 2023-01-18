"use strict";

let database = [
	{
		id : 1,
		photo: './storage/photos/1.jpg',
		brand : 'Бренд',
		type : 'Кофта',
		color : 'Зеленая',
		season : 'Осень/весна',
		useDate : 'Никогда',
		liked : false,
	},
	{
		id : 2,
		photo: './storage/photos/2.jpg',
		brand : 'Бренд',
		type : 'Платье',
		color : 'Коричневое',
		season : 'Лето',
		useDate : 'Никогда',
		liked : false,
	},
	{
		id : 3,
		photo: './storage/photos/3.jpg',
		brand : 'Бренд',
		type : 'Платье',
		color : 'Синее',
		season : 'Лето',
		useDate : 'Никогда',
		liked : false,
	},
	{
		id : 4,
		photo: './storage/photos/4.jpg',
		brand : 'Бренд',
		type : 'Футболка',
		color : 'Белая',
		season : 'Лето',
		useDate : 'Никогда',
		liked : false,
	},
	{
		id : 5,
		photo: './storage/photos/5.jpg',
		brand : 'Бренд',
		type : 'Рубашка',
		color : 'Фиолетовая',
		season : 'Лето',
		useDate : 'Никогда',
		liked : false,
	},
	{
		id : 6,
		photo: './storage/photos/6.jpg',
		brand : 'Бренд',
		type : 'Рубашка',
		color : 'Фиолетовая',
		season : 'Лето',
		useDate : 'Никогда',
		liked : false,
	},
]


const newClothInputs = document.querySelectorAll('.new-cloth_input');
const newClothButton = document.getElementById('new-cloth_btn');
const clothCollectionDisplay = document.getElementById('cloth-collection_counter');
const favCollectionDisplay = document.getElementById('fav-collection_counter');
const clothCollectionWardrobe = document.getElementById('cloth-collection_wardrobe');
// Кнопка удаления предмета
newClothButton?.addEventListener('click', () => {
    const item = new Cloth(++idCloth, newClothInputs[0].value, newClothInputs[1].value, newClothInputs[2].value, newClothInputs[3].value);
    clothCollection.set(idCloth, item);
    clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`;
    createElement(item.brand, item.type, item.color, item.season, item.useDate);
});
// Функция создания предмета
function createElement(brand, type, color, season, useDate) {
    const clothTab = document.createElement('div');
    clothTab.classList.add('cloth-tab', 'cloth-show');
    clothTab.id = `clothItem-${idCloth}`;
    clothTab.innerHTML = `
	<h2>${brand}</h2>
	<h3>${type}</h3>
	<div id="clothDescr">
	<p>Color: <b>${color}</b></p>
	<p>Season: <b>${season}</b></p>
	<p id="lastUsed-${idCloth}">Last used: <b>${useDate}</b></p>
	</div>
	`;
    clothTab.appendChild(clothActionsTab(idCloth));
    clothTab.appendChild(moveButton(idCloth));
    clothTab.appendChild(deleteButton());
    clothCollectionWardrobe.appendChild(clothTab);
}

function loadCollection() {
    for(let i = 0; i < database.length; i++) {
        const clothTab = document.createElement('div');
        clothTab.classList.add('cloth-tab', 'cloth-show');
        clothTab.id = `clothItem-${database[i].id}`;
        clothTab.innerHTML = `
        <div>
        <img class="cloth-img" src="${database[i].photo}" alt="" />
        </div>
        <div>
        <h2>${database[i].brand}</h2>
        <h3>${database[i].type}</h3>
        <div id="clothDescr">
        <p>Color: <b>${database[i].color}</b></p>
        <p>Season: <b>${database[i].season}</b></p>
        <p id="lastUsed-${database[i].id}">Last used: <b>${database[i].useDate}</b></p>
        </div>
        </div>

        `;
        clothTab.appendChild(clothActionsTab(idCloth));
        clothTab.appendChild(moveButton(idCloth));
        clothTab.appendChild(deleteButton());
        clothCollectionWardrobe.appendChild(clothTab);  
    }
}

// Кнопка удаления предмета
function deleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-cloth_btn';
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
        deleteItem(e.target.parentElement.id.split('-').pop());
    });
    return deleteBtn;
}
// Функция удаления предмета
function deleteItem(id) {
    clothCollection.delete(id);
    if (favouritelist.get(id))
        clothCollectionDisplay.innerHTML = `Collection: ${clothCollection.size}`;
    const itemTab = document.getElementById(`clothItem-${id}`);
    itemTab.remove();
}
// Кнопка "Добавить в коллекцию" - НЕ РАБОТАЕТ
function moveButton(id) {
    const moveBtn = document.createElement('button');
    moveBtn.className = 'move-cloth_btn';
    moveBtn.innerHTML = 'Move';
    moveBtn.addEventListener('click', () => {
        const list = document.getElementById(`collectionsList-${id}`);
        moveItem(list.value, id);
    });
    return moveBtn;
}
// Функция "Добавить в коллекцию" - НЕ РАБОТАЕТ
const moveItem = (list, id) => {
    const item = clothCollection.get(id);
};
//# sourceMappingURL=wardrobe.js.map

loadCollection() 