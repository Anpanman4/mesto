const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileJob = profileElement.querySelector('.profile__job');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const buttonCloseList = document.querySelectorAll('.popup__close-button');

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
const imagePopup = document.querySelector('.popup_type_image');
const photoPopup = imagePopup.querySelector('.popup__image');
const textPopup = imagePopup.querySelector('.popup__text');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button');

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

	elementLike.addEventListener('click', () => {
		elementLike.classList.toggle('element__like_active');
	})
	elementTrash.addEventListener('click', () => {
		elementElement.remove();
	})
	elementImage.addEventListener('click', () => {
		openModalImage(card);
	})

	return elementElement;
	// elementContainer.prepend(elementElement);
}

// ф-я для добавления карточки
const renderCard = function(card) {
	elementContainer.prepend(makeCard(card));
}

// добавляем изначальные карточки на страничку
initialCards.forEach(function (card){
	renderCard(card)
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
	renderCard(valueCard);
	popupAddForm.reset();
	closeModalWindow(popupAddElement);
}

// ф-я открытия popup image
const openModalImage = function(card) {
	textPopup.textContent = card.name;
	photoPopup.src = card.link;
	photoPopup.alt = card.name;
	openModalWindow(imagePopup);
}

popupEditButtonElement.addEventListener('click', () => {
	openEditModalWindow(popupEditElement);
});

profileAddButtonElement.addEventListener('click', () => {
	openModalWindow(popupAddElement);
});

popupEditForm.addEventListener('submit', savePopupValue);

popupAddForm.addEventListener('submit', addNewCard);

buttonCloseList.forEach(btn => {
	const popup = btn.closest('.popup');
	btn.addEventListener('click', () => closeModalWindow(popup))
})
