import Card from "./Card.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

import { initialCards } from "./cards.js";

import {
  profileName,
  profileJob,
  popupEditButtonElement,
  profileAddButtonElement,
  popupEditForm,
  popupAddForm,
  popupAddSaveButton,
  elementContainer
} from '../utils/constants.js'

// код для работы Popup с Image
const popupImageClass = new PopupWithImage('.popup_type_image');

popupImageClass.setEventListeners();

// ф-я создания карточки с совсеми ивеннтами
const makeCard = function(card) {
  return new Card(card, '#element-template', popupImageClass).render();
}

// ф-я для добавления карточки	
const renderCard = function(card) {
  elementContainer.prepend(makeCard(card));
}

// добавляем изначальные карточки на страничку
initialCards.forEach(renderCard)

// ф-я выключающая кнопку
const turnOffButtom = (buttonElement, validationConfig) => {
  buttonElement.setAttribute("disabled", true);
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  sectionSelector: '.popup__section',
  errorInputSelector: '.popup__field-error',
  errorInputActiveClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__save-button_inactive'
}

// код для работы валидации
const addPopupValidator = new FormValidator(validationConfig, popupAddForm);
const editPopupValidator = new FormValidator(validationConfig, popupEditForm);
addPopupValidator.enableValidation();
editPopupValidator.enableValidation();

// UserInfo - код для управления информации о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__job')

// PopupEdit - код для работы Popup редактирования пользователя
const popupEditClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  userInfo.setUserInfo(inputValue)

  popupEditClass.close();
}}, '.popup_type_edit')

popupEditClass.setEventListeners();

popupEditButtonElement.addEventListener('click', () => {
  popupEditClass.open();
});

// PopupAdd - код для работы Popup добавления карточки
const popupAddClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  console.log(inputValue)
  renderCard(inputValue);
  turnOffButtom(popupAddSaveButton, validationConfig);
  popupAddClass.close();
}}, '.popup_type_add')

popupAddClass.setEventListeners();

profileAddButtonElement.addEventListener('click', () => {
  popupAddClass.open();
})
