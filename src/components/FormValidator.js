export default class FormValidator {
  constructor(validationConfig, form) {
    this._validationConfig = validationConfig;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
    this._submitButton = this._form.querySelector(this._validationConfig.submitButtonSelector);
  }

  _showInputError = (errorMessage) => {
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._validationConfig.errorInputActiveClass);
  }

  _hideInputError = () => {
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._validationConfig.errorInputActiveClass);
  }

  _toggleInputErrorState = (inputElement) => {
    const isValid = inputElement.validity.valid;

    const formInputSection = inputElement.closest(this._validationConfig.sectionSelector);
    this._errorElement = formInputSection.querySelector(this._validationConfig.errorInputSelector);

    if (isValid) {
      this._hideInputError();
    } else {
      this._showInputError(inputElement.validationMessage);
    }
  }

  _turnOffButtom = () => {
    this._submitButton.setAttribute("disabled", true);
    this._submitButton.classList.add(this._validationConfig.inactiveButtonClass);
  }

  _turnOnButtom = () => {
    this._submitButton.removeAttribute("disabled");
    this._submitButton.classList.remove(this._validationConfig.inactiveButtonClass);
  }

  _toggleButtonState = () => {
    const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);

    if (hasInvalidInput) {
      this._turnOffButtom();
    } else {
      this._turnOnButtom();
    }
  }

  _setEventListeners = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._toggleInputErrorState(inputElement);
        this._toggleButtonState()
      })
    })
  }

  enableValidation = () => {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

  _hideError(inputElement) {
    const formInputSection = inputElement.closest(this._validationConfig.sectionSelector);
    this._errorElement = formInputSection.querySelector(this._validationConfig.errorInputSelector);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._validationConfig.errorInputActiveClass);
  }
}