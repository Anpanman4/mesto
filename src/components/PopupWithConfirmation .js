import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitButton = this._container.querySelector('.popup__save-button');
    console.log(this._submitButton)
  }

  open(deleteCard) {
    super.open()

    this._deleteCard = deleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
  
    this._submitButton.addEventListener('click', (evt) => {
      evt.preventDefault();

      this._deleteCard();
    })
  }
}