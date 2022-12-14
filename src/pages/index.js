import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";

import {
  popupEditButtonElement,
  profileAddButtonElement,
  popupEditForm,
  popupAddForm,
  initialCards,
  validationConfig
} from '../utils/constants.js'


// код для работы Popup с Image
export const popupImageClass = new PopupWithImage('.popup_type_image');

popupImageClass.setEventListeners();


// ф-я создания карточки
export const createCard = (item) => {
  const cardElement = new Card(item, '#element-template', popupImageClass).render();
  return cardElement;
}


// Section: добавление изначальных карточек

const cardSection = new Section({ items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card);
  }}, '.elements');

cardSection.renderer();


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

  userInfo.setUserInfo(inputValue);

  popupEditClass.close();
}}, '.popup_type_edit')

popupEditClass.setEventListeners();

popupEditButtonElement.addEventListener('click', () => {
  popupEditClass.setInputValues(userInfo.getUserInfo());

  editPopupValidator.resetValidation();

  popupEditClass.open();
});


// PopupAdd - код для работы Popup добавления карточки
const popupAddClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  const card = createCard(inputValue);
  cardSection.addItem(card);

  popupAddClass.close();
}}, '.popup_type_add')

popupAddClass.setEventListeners();

profileAddButtonElement.addEventListener('click', () => {
  addPopupValidator.resetValidation();

  popupAddClass.open();
})


