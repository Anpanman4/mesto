export const profileElement = document.querySelector('.profile');
export const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
export const profileAddButtonElement = profileElement.querySelector('.profile__add-button');

export const popupEditElement = document.querySelector('.popup_type_edit');
export const popupEditForm = popupEditElement.querySelector('.popup__form');

export const popupAddElement = document.querySelector('.popup_type_add');
export const popupAddForm = popupAddElement.querySelector('.popup__form');
export const popupAddSaveButton = popupAddElement.querySelector('.popup__save-button');

export const initialCards = [
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

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  sectionSelector: '.popup__section',
  errorInputSelector: '.popup__field-error',
  errorInputActiveClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__save-button_inactive'
}