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
  profileEditButtonElement,
  profileAddButtonElement,
  profileAvatarButton,
  popupEditForm,
  popupAddForm,
  popupAvatarForm,
  popupEditButton,
  popupAddButton,
  popupAvatarButton,
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
const popupImageClass = new PopupWithImage('.popup_type_image');

popupImageClass.setEventListeners();


// Popup: popup delete
const popupDeleteClass = new Popup('.popup_type_delete');
popupDeleteClass.setEventListeners();


// ф-я удаляющая карточку с сервера
const deleteCardServer = (id) => {
  api.deleteCard(id)
}


// ф-я создания карточки
const createCard = (item) => {
  const cardElement = new Card(item, '#element-template', popupImageClass, popupDeleteClass, userInfo.getUserOwner(), deleteCardServer, api).render();
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
const avatarPopupValidator = new FormValidator(validationConfig, popupAvatarForm);
addPopupValidator.enableValidation();
editPopupValidator.enableValidation();
avatarPopupValidator.enableValidation();


// UserInfo - код для управления информации о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar', api)


// PopupEdit - код для работы Popup редактирования пользователя
const popupEditClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  popupEditButton.textContent = "Сохранение...";

  userInfo.updateUserInfo(inputValue);

  popupEditClass.close();
}}, '.popup_type_edit')

popupEditClass.setEventListeners();

profileEditButtonElement.addEventListener('click', () => {
  popupEditClass.setInputValues(userInfo.getUserInfo());

  editPopupValidator.resetValidation();

  popupEditButton.textContent = "Сохранить";

  popupEditClass.open();
});


// PopupAdd - код для работы Popup добавления карточки
const popupAddClass = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  popupAddButton.textContent = "Сохранение...";
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

  popupAddButton.textContent = "Создать";

  popupAddClass.open();
})


// код создания Popup avatar
const popupAvatarClass = new PopupWithForm({ submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  userInfo.updateUserAvatar(inputValue);

  popupAvatarButton.textContent = "Сохранение...";

  popupAvatarClass.close();
}}, '.popup_type_avatar')
popupAvatarClass.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
  avatarPopupValidator.resetValidation();

  popupAvatarButton.textContent = "Сохранить";

  popupAvatarClass.open();
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


