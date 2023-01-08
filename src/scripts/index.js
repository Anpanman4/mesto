import Card from "./Card.js";
import Section from "./Section.js";
import FormValidator from "./FormValidator.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

import {
  popupEditButtonElement,
  profileAddButtonElement,
  popupEditForm,
  popupAddForm,
  popupAddSaveButton,
  initialCards,
  validationConfig
} from '../utils/constants.js'
import { turnOffButtom } from '../utils/utils.js'


// код для работы Popup с Image
const popupImageClass = new PopupWithImage('.popup_type_image');

popupImageClass.setEventListeners();


// Section: добавление изначальных карточек

const cardSection = new Section({ items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#element-template', popupImageClass).render();
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

  const card = new Card(inputValue, '#element-template', popupImageClass).render()
  cardSection.addItem(card);

  turnOffButtom(popupAddSaveButton);

  popupAddClass.close();
}}, '.popup_type_add')

popupAddClass.setEventListeners();

profileAddButtonElement.addEventListener('click', () => {
  popupAddClass.open();
})


