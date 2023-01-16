import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  popupEditButtonElement,
  profileAddButtonElement,
  popupEditForm,
  popupAddForm,
  validationConfig
} from '../utils/constants.js'


// код для работы с API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57/",
  headers: {
    authorization: "8a834428-9740-47ce-9a26-1ae204198268",
    "Content-Type": "application/json"
  }
})


// код для работы Popup с Image
export const popupImageClass = new PopupWithImage('.popup_type_image');

popupImageClass.setEventListeners();


// Popup: popup delete
const popupDeleteClass = new Popup('.popup_type_delete');
popupDeleteClass.setEventListeners();


// ф-я удаляющая карточку с сервера
const deleteCardServer = (id) => {
  console.log('его', id)
  api.deleteCard(id)
}


// ф-я создания карточки
const createCard = (item) => {
  const cardElement = new Card(item, '#element-template', popupImageClass, popupDeleteClass, userInfo.getUserOwner(), deleteCardServer).render();
  return cardElement;
}


// Section: добавление изначальных карточек
const cardSection = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardSection.addItem(card);
  }}, '.elements'
  , api);


// код для работы валидации
const addPopupValidator = new FormValidator(validationConfig, popupAddForm);
const editPopupValidator = new FormValidator(validationConfig, popupEditForm);
addPopupValidator.enableValidation();
editPopupValidator.enableValidation();


// UserInfo - код для управления информации о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar', api)


// PopupEdit - код для работы Popup редактирования пользователя
const popupEditClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  userInfo.updateUserInfo(inputValue);

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


// отправляем данные на создание карточки и отрисовываем ее
  const newCard = api.createNewCard(inputValue)
  newCard
    .then((data) => {
      const card = createCard(data);
      cardSection.addItem(card);

      popupAddClass.close();
    })

}}, '.popup_type_add')

popupAddClass.setEventListeners();

profileAddButtonElement.addEventListener('click', () => {
  addPopupValidator.resetValidation();

  popupAddClass.open();
})

// получаем данные о пользователе с сервера и вставляем их
const userData = api.getUserValues()
userData
  .then((data) => {
    userInfo.setUserOwner(data._id)
    userInfo.setUserInfo(data)
    userInfo.setUserAvatar(data)
  })
  .catch(err => console.log(err))

// получаем карточки с сервера и отрисовываем их
const initialCards = api.getInitialCards()
initialCards
  .then((cards) => {
    cardSection.renderer(cards);
  })
  .catch(err => console.log(err))


