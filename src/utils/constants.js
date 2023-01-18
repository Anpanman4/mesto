export const profileElement = document.querySelector('.profile');
export const profileEditButtonElement = profileElement.querySelector('.profile__edit-button');
export const profileAddButtonElement = profileElement.querySelector('.profile__add-button');
export const profileAvatarButton = profileElement.querySelector('.profile__avatar-cover');

export const popupEditElement = document.querySelector('.popup_type_edit');
export const popupEditForm = popupEditElement.querySelector('.popup__form');
export const popupEditButton = popupEditElement.querySelector('.popup__save-button');

export const popupAddElement = document.querySelector('.popup_type_add');
export const popupAddForm = popupAddElement.querySelector('.popup__form');
export const popupAddButton = popupAddElement.querySelector('.popup__save-button');

export const popupDeleteElement = document.querySelector('.popup_type_delete')
export const popupDeleteButton = popupDeleteElement.querySelector('.popup__save-button');

export const popupAvatarElement = document.querySelector('.popup_type_avatar')
export const popupAvatarForm = popupAvatarElement.querySelector('.popup__form');
export const popupAvatarButton = popupAvatarElement.querySelector('.popup__save-button');


export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save-button',
  sectionSelector: '.popup__section',
  errorInputSelector: '.popup__field-error',
  errorInputActiveClass: 'popup__input-error_active',
  inactiveButtonClass: 'popup__save-button_inactive'
}