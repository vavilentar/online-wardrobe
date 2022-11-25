// Панель управления предмета
function clothActionsTab(id) {
	const actionsTab = document.createElement('div');
	actionsTab.className = 'cloth-actions'
	actionsTab.id = `actionsTab-${id}`
	actionsTab.appendChild(likeBtn(id))
	actionsTab.appendChild(collectionsList(id))
	actionsTab.appendChild(useCloth(id))
	actionsTab.appendChild(showPhotoBtn(id))
	
	return actionsTab;
}

// Функция "Использовать предмет"
function useCloth(id) {	
	const useClothBtn = document.createElement('a');
	useClothBtn.id = `useClothBtn-${id}`;
	useClothBtn.innerHTML = `Put on`;
	useClothBtn.href = '#';

	useClothBtn.addEventListener('click', (e) => {
		e.preventDefault();
		clothCollection.get(id).useDate = clothCollection.get(id).use();
		const lastUsedItem = document.getElementById(`lastUsed-${id}`);
		lastUsedItem.innerHTML = `Last used: <b>${clothCollection.get(id).useDate}</b>`;
		useClothBtn.innerHTML = `Date updated ✔`;
		useClothBtn.style = "color: green;"
		setTimeout(() => {
			useClothBtn.innerHTML = `Put on`;
			useClothBtn.style = "color: black;"
		}, 1000)
	})

	return useClothBtn;
}


// Кнопка 'Like
function likeBtn(id) {
	const likeBtn = document.createElement('a');
	likeBtn.id = `likeBtn-${id}`;
	likeBtn.className = 'like-btn_img'
	likeBtn.href = `#`
	likeBtn.innerHTML = `
	<img src="./icon/fav.svg" alt="" />
	`
	likeBtn.addEventListener('click', (e) => {
		e.preventDefault()
		likeItem(id)
		likedItemText(id)
	})

	return likeBtn;
}

// Функция 'Like'
const likeItem = (id) => {
	const likedItem = clothCollection.get(id) // Переписывать ли Id?
	if(!likedItem.liked) {
		likedItem.liked = true;
		favIdCloth++;
		favouritelist.set(favIdCloth, likedItem);
		favCollectionDisplay.innerHTML = `Favourite: ${favouritelist.size}`
	} else {
		likedItem.liked = false;
		favouritelist.delete(favIdCloth, likedItem);
		favCollectionDisplay.innerHTML = `Favourite: ${favouritelist.size}`
		favIdCloth--;
	}
}

// Текст на кнопке
const likedItemText = (id) => {
	const item = document.getElementById(`likeBtn-${id}`)
	if(clothCollection.get(id).liked) {
		item.innerHTML = `<img src="./icon/favClicked.svg" alt="" />`
	} else {
		item.innerHTML = `<img src="./icon/fav.svg" alt="" />`
	}
}

// Кнопка 'Photo'
function showPhotoBtn(id) {
	const photoBtn = document.createElement('a');
	photoBtn.id = `photoBtn-${id}`;
	photoBtn.className = 'photo-btn_img'
	photoBtn.href = `#`
	photoBtn.innerHTML = `
	<img src="./icon/camera.png" alt="" />
	`

	photoBtn.addEventListener('click', (e) => {
		const photo = document.getElementById(`clothPhoto-${id}`)
		photo.classList.toggle('photo-show')
	})

	return photoBtn;
}
