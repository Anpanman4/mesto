export default class Popup {
  constructor(popupSelector) {
    this._container = document.querySelector(popupSelector);
    this._closeButton = this._container.querySelector('.popup__close-button')
  }
  
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _closeByClickOnOverlay(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  open() {
    this._container.classList.add('popup_opened');

    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt)
    });
  }

  close() {
    this._container.classList.remove('popup_opened');

    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    this._container.addEventListener('mousedown', (evt) => {
      this._closeByClickOnOverlay(evt);
    });
  }
}