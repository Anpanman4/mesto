import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupText = this._container.querySelector('.popup__text');
    this._imagePopupPhoto = this._container.querySelector('.popup__image');
  }


  open(cardDetails) {
    this._imagePopupText.textContent = cardDetails.name;
    this._imagePopupPhoto.src = cardDetails.link;
    this._imagePopupPhoto.alt = cardDetails.name;

    super.open()
  }
}