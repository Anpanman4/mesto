import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitFunc }, popupSelector) {
    super(popupSelector);
    this._submitFunc = submitFunc;
    this._submitForm = this._container.querySelector('.popup__form')
  }

  _getInputValues() {
    const inputFields = this._container.querySelectorAll('.popup__field');
    const valueInputs = {};

    inputFields.forEach((input) => {
      valueInputs[input.name] = input.value
    })

    return valueInputs;
  }

  open() {
    super.open();
  }

  close() {
    super.close();

    this._submitForm.reset();
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitForm.addEventListener('submit', (evt) => {
      const inputValue = this._getInputValues();
      this._submitFunc(evt, inputValue)
    })
  }
}