import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./cards.js";

const profileElement = document.querySelector('.profile');
const profileName = profileElement.querySelector('.profile__name');
const profileJob = profileElement.querySelector('.profile__job');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

const buttonCloseList = document.querySelectorAll('.popup__close-button');
const allPopups = document.querySelectorAll('.popup');

const popupEditElement = document.querySelector('.popup_type_edit');
const popupEditForm = popupEditElement.querySelector('.popup__form');
const popupEditFieldName = popupEditElement.querySelector('.popup__field_type_name');
const popupEditFieldJob = popupEditElement.querySelector('.popup__field_type_job');

const popupAddElement = document.querySelector('.popup_type_add');
const popupAddForm = popupAddElement.querySelector('.popup__form')
const popupAddFieldName = popupAddElement.querySelector('.popup__field_type_name');
const popupAddFieldImage = popupAddElement.querySelector('.popup__field_type_image');
const popupAddSaveButton = popupAddElement.querySelector('.popup__save-button');

const elementContainer = document.querySelector('.elements');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const textPopup = imagePopup.querySelector('.popup__text');

// ф-я создания карточки с совсеми ивеннтами
const makeCard = function(card) {
	return new Card(card, '#element-template', openModalImage).render();
}

// ф-я для добавления карточки	
const renderCard = function(card) {
	elementContainer.prepend(makeCard(card));
}

// ф-я для открытия popup с его значениями
const openEditModalWindow = function() {
	popupEditFieldName.value = profileName.textContent;
	popupEditFieldJob.value = profileJob.textContent;
	openModalWindow(popupEditElement);
}

// ф-я для открытия popup
const openModalWindow = function(item) {
	item.classList.add('popup_opened');
	document.addEventListener('keydown', closeModalWindowByEsc)
}

// ф-я для закрытия popup
const closeModalWindow = function(item) {
	item.classList.remove('popup_opened');
	document.removeEventListener('keydown', closeModalWindowByEsc)
}

// ф-я для закрытия popup по нажатию на esc
const closeModalWindowByEsc = function(evt) {
	if (evt.key === "Escape") {
		closeModalWindow(document.querySelector('.popup_opened'));
	}
}

// ф-я для сохранения новых значений у edit popup
const saveEditPopupValues = function(evt) {
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
	turnOffButtom(popupAddSaveButton, validationConfig);
	popupAddForm.reset();
	closeModalWindow(popupAddElement);
}

// ф-я выключающая кнопку
const turnOffButtom = (buttonElement, validationConfig) => {
	buttonElement.setAttribute("disabled", true);
	buttonElement.classList.add(validationConfig.inactiveButtonClass);
}

// ф-я открытия popup image
const openModalImage = function(card) {
	textPopup.textContent = card.name;
	popupImage.src = card.link;
	popupImage.alt = card.name;
	openModalWindow(imagePopup);
}

popupEditButtonElement.addEventListener('click', () => {
	openEditModalWindow(popupEditElement);
});

profileAddButtonElement.addEventListener('click', () => {
	openModalWindow(popupAddElement);
});

popupEditForm.addEventListener('submit', saveEditPopupValues);

popupAddForm.addEventListener('submit', addNewCard);

// закрытие по нажатию на оверлей
allPopups.forEach(popup => {
	popup.addEventListener('click', (evt) => {
		if (evt.target === evt.currentTarget) {
			closeModalWindow(popup);
		}
	})
})

// добавление листенер на кнопки закрытия
buttonCloseList.forEach(btn => {
	const popup = btn.closest('.popup');
	btn.addEventListener('click', () => closeModalWindow(popup))
})

// добавляем изначальные карточки на страничку
initialCards.forEach(renderCard)

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__field',
	submitButtonSelector: '.popup__save-button',
	sectionSelector: '.popup__section',
	errorInputSelector: '.popup__field-error',
	errorInputActiveClass: 'popup__input-error_active',
	inactiveButtonClass: 'popup__save-button_inactive'
}

document.querySelectorAll(validationConfig.formSelector).forEach((popup) => {
	new FormValidator(validationConfig, popup).enableValidation();
})