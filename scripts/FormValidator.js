export default class FormValidator {
	constructor(validationConfig, form) {
		this._validationConfig = validationConfig;
		this._form = form;
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

	_turnOffButtom = (buttonElement) => {
		buttonElement.setAttribute("disabled", true);
		buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
	}

	_turnOnButtom = (buttonElement) => {
		buttonElement.removeAttribute("disabled");
		buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
	}

	_toggleButtonState = (inputList, buttonElement) => {
		const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

		if (hasInvalidInput) {
			this._turnOffButtom(buttonElement);
		} else {
			this._turnOnButtom(buttonElement);
		}
	}

	_setEventListeners = () => {
		const inputList = Array.from(this._form.querySelectorAll(this._validationConfig.inputSelector));
		const submitButton = this._form.querySelector(this._validationConfig.submitButtonSelector);

		inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				this._toggleInputErrorState(inputElement);
				this._toggleButtonState(inputList, submitButton)
			})
		})
	}

	enableValidation = () => {
		this._setEventListeners();
	}
}