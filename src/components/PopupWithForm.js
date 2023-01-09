import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ submitFunc }, popupSelector) {
    super(popupSelector);
    this._submitFunc = submitFunc;
    this._submitForm = this._container.querySelector('.popup__form')
    this._inputFields = this._container.querySelectorAll('.popup__field');
  }

  _getInputValues() {
    const valueInputs = {};

    this._inputFields.forEach((input) => {
      valueInputs[input.name] = input.value
    })

    return valueInputs;
  }

  close() {
    super.close();

    this._submitForm.reset();
  }

  setInputValues(data) {
    this._inputFields.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();

    this._submitForm.addEventListener('submit', (evt) => {
      const inputValue = this._getInputValues();
      this._submitFunc(evt, inputValue)
    })
  }
}