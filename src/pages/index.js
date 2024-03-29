import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation ";
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
const popupConfirmation = new PopupWithConfirmation('.popup_type_delete');
popupConfirmation.setEventListeners();


// ф-я удаляющая карточку с сервера
const deleteCardServer = (id, removeCardHandler) => {
  api.deleteCard(id)
    .then(res => {
      popupConfirmation.close();

      removeCardHandler();

      return res;
    })
    .catch(err => console.log('DELETE card', err))
}


// ф-я постановки лайка
const addLike = (likeContainer, cardId) => {
  api.doLike(cardId)
  .then(res => {
    likeContainer.textContent = res.likes.length;
  })
  .catch(err => console.log('POST delete like', err))
}


// ф-я удаления лайка
const deleteLike = (likeContainer, cardId) => {
  api.deleteLike(cardId)
  .then(res => {
    likeContainer.textContent = res.likes.length;
  })
  .catch(err => console.log('POST delete like', err))
}


// ф-я создания карточки
const createCard = (item) => {
  const cardElement = new Card(item, '#element-template', popupImage, popupConfirmation, userInfo.getUserOwner(), deleteCardServer, addLike, deleteLike).render();
  return cardElement;
}


// Section: добавление изначальных карточек
const cardSection = new Section({
  renderer: (item) => {
    const card = createCard(item);
    cardSection.prependItem(card);
  }}, '.elements');


// код для работы валидации
const addPopupValidator = new FormValidator(validationConfig, popupAddForm);
const editPopupValidator = new FormValidator(validationConfig, popupEditForm);
const avatarPopupValidator = new FormValidator(validationConfig, popupAvatarForm);
addPopupValidator.enableValidation();
editPopupValidator.enableValidation();
avatarPopupValidator.enableValidation();


// UserInfo - код для управления информации о пользователе
const userInfo = new UserInfo('.profile__name', '.profile__job', '.profile__avatar')


const updateUserInfo = (body) => {
  const response = api.updateUserValues(body)
  response
    .then(res => {
      userInfo.setUserInfo(res)

      popupEditProfile.close();
    })
    .catch((err) => console.log('PATCH User values', err));
}

const updateUserAvatar = (body) => {
  const response = api.updateUserAvatar(body)
  response
    .then(res => {
      userInfo.setUserAvatar(res)
    
      popupAvatar.close();
    })
    .catch((err) => console.log('PATCH Avatar', err));
}


// PopupEdit - код для работы Popup редактирования пользователя
const popupEditProfile = new PopupWithForm({submitFunc: (evt, inputValue) => {
  evt.preventDefault();

  renderLoading(popupEditButton, 'Сохранение...');

  updateUserInfo(inputValue)
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

  const newCard = api.createNewCard(inputValue)
  newCard
    .then((data) => {
      const card = createCard(data);
      cardSection.appendItem(card);

      popupAddCard.close();
    })
    .catch(err => console.log('POST card', err))

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

  renderLoading(popupAvatarButton, 'Сохранение...');

  updateUserAvatar(inputValue);
}}, '.popup_type_avatar')
popupAvatar.setEventListeners();

profileAvatarButton.addEventListener('click', () => {
  avatarPopupValidator.resetValidation();

  renderLoading(popupAvatarButton, 'Сохранить');

  popupAvatar.open();
})


// получаем все данные с API и передаем их
const startPage = () => {
  api.getAllPromise()
  .then(argument => {
    const [ userData, initialCards ] = argument

    userInfo.setUserOwner(userData._id);
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);

    cardSection.renderItems(initialCards);
  })
  .catch(err => console.log('loading err', err))
}

startPage()
