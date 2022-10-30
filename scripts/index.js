const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileJob = profileElement.querySelector('.profile__job');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const popupEditElement = document.querySelector('.popup_type_edit');
const popupEditCloseButtonElement = popupEditElement.querySelector('.popup__close-button');
const popupEditForm = popupEditElement.querySelector('.popup__form');
const popupEditFieldName = popupEditElement.querySelector('.popup__field_type_name');
const popupEditFieldJob = popupEditElement.querySelector('.popup__field_type_job');

const popupAddElement = document.querySelector('.popup_type_add');
const popupAddCloseButtonElement = popupAddElement.querySelector('.popup__close-button');
const popupAddForm = popupAddElement.querySelector('.popup__form')
const popupAddFieldName = popupAddElement.querySelector('.popup__field_type_name');
const popupAddFieldImage = popupAddElement.querySelector('.popup__field_type_image');

const elementContainer = document.querySelector('.elements');
const templateElement = document.querySelector('#element-template').content;
const imagePopup = document.querySelector('.popup_type-image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

const initialCards = [
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	}
];

// ф-я создания карточки с совсеми ивеннтами
const makeCard = function(card) {
	const elementElement = templateElement.querySelector('.element').cloneNode(true);
	const elementName = elementElement.querySelector('.element__place');
	const elementLink = elementElement.querySelector('.element__image');
	elementName.textContent = card.name;
	elementLink.src = card.link;
	elementLink.alt = card.name;
	const elementLike = elementElement.querySelector('.element__like');
	const elementTrash = elementElement.querySelector('.element__trash');
	const elementImage = elementElement.querySelector('.element__image');

	elementElement.addEventListener('click', (env) => {
		if (env.target === elementLike) {
			elementLike.classList.toggle('element__like_active');
		}
		if (env.target === elementTrash) {
			env.currentTarget.remove();
		}
		if (env.target === elementImage) {
			openModalImage(elementName, elementLink);
		}
	})

	elementContainer.prepend(elementElement);
}

// добавляем изначальные карточки на страничку
initialCards.forEach(function (card){
	makeCard(card)
})

// ф-я для открытия popup с его значениями
const openEditModalWindow = function() {
	popupEditFieldName.value = profileName.textContent;
	popupEditFieldJob.value = profileJob.textContent;
	openModalWindow(popupEditElement);
}

// ф-я для открытия popup
const openModalWindow = function(item) {
	item.classList.add('popup_opened');
}

// ф-я для закрытия popup
const closeModalWindow = function(item) {
	item.classList.remove('popup_opened');
}

// ф-я для сохранения новых значений popup
const savePopupValue = function(evt) {
	evt.preventDefault()
	profileName.textContent = popupEditFieldName.value;
	profileJob.textContent = popupEditFieldJob.value;
	closeModalWindow(popupEditElement);
}

// ф-я отвечающия за добавление новых карточек
const addNewCard = function(evt) {
	evt.preventDefault()
	const valueCard = {
		name: popupAddFieldName.value,
		link: popupAddFieldImage.value
	};
	makeCard(valueCard);
	popupAddFieldName.value = '';
	popupAddFieldImage.value = '';
	closeModalWindow(popupAddElement);
}

// ф-я открытия popup image
const openModalImage = function(elementName, elementLink) {
	const imagePopup = document.querySelector('.popup_type-image');
	imagePopup.querySelector('.popup__text').textContent = elementName.textContent;
	imagePopup.querySelector('.popup__image').src = elementLink.src;
	imagePopup.querySelector('.popup__image').alt = elementName.textContent;
	openModalWindow(imagePopup);
}

popupEditButtonElement.addEventListener('click', () => {
	openEditModalWindow(popupEditElement);
});
popupEditCloseButtonElement.addEventListener('click', () => {
	closeModalWindow(popupEditElement);
});
popupEditForm.addEventListener('submit', savePopupValue);

profileAddButtonElement.addEventListener('click', () => {
	openModalWindow(popupAddElement);
});
popupAddCloseButtonElement.addEventListener('click', () => {
	closeModalWindow(popupAddElement);
});
popupAddForm.addEventListener('submit', addNewCard);
imagePopupCloseButton.addEventListener('click', () => {
	closeModalWindow(imagePopup);
})

