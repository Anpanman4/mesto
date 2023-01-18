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

import { renderLoading } from "../utils/utils";


// код для работы с API
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-57/",
  headers: {
    authorization: "8a834428-9740-47ce-9a26-1ae204198268",
    "Content-Type": "application/json"
  }
})


// код для работы Popup с Image
const popupImage = new PopupWithImage('.popup_type_image');

popupImage.setEventListeners();


// Popup: popup delete
const popupDeleteClass = new Popup('.popup_type_delete');
popupDeleteClass.setEventListeners();


// ф-я удаляющая карточку с сервера
const deleteCardServer = (id) => {
  api.deleteCard(id)
    .catch(err => console.log(err))
}


// ф-я создания карточки
const createCard = (item) => {
  const cardElement = new Card(item, '#element-template', popupImage, popupDeleteClass, userInfo.getUserOwner(), deleteCardServer, api).render();
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
const popupEditProfile = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  renderLoading(popupEditButton, 'Сохранение...');

  userInfo.updateUserInfo(inputValue)

  popupEditProfile.close();
}}, '.popup_type_edit')

popupEditProfile.setEventListeners();

profileEditButtonElement.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());

  editPopupValidator.resetValidation();

  renderLoading(popupEditButton, 'Сохранить');

  popupEditProfile.open();
});


// PopupAdd - код для работы Popup добавления карточки
const popupAddCard = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  renderLoading(popupAddButton, 'Сохранение...');
// отправляем данные на создание карточки и отрисовываем ее
  const newCard = api.createNewCard(inputValue)
  newCard
    .then((data) => {
      const card = createCard(data);
      cardSection.addItem(card);

      popupAddCard.close();
    })

}}, '.popup_type_add')

popupAddCard.setEventListeners();

profileAddButtonElement.addEventListener('click', () => {
  addPopupValidator.resetValidation();

  renderLoading(popupAddButton, 'Создать');

  popupAddCard.open();
})


// код создания Popup avatar
const popupAvatar = new PopupWithForm({ submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  userInfo.updateUserAvatar(inputValue);

  renderLoading(popupAvatarButton, 'Сохранение...');

  popupAvatar.close();
}}, '.popup_type_avatar')
popupAvatar.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
  avatarPopupValidator.resetValidation();

  renderLoading(popupAvatarButton, 'Сохранить');

  popupAvatar.open();
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
    cardSection.renderItems(cards);
  })
  .catch(err => console.log(err))


