const showInputError = (errorElement, errorMessage, validationConfig) => {
	errorElement.textContent = errorMessage;
	errorElement.classList.add(validationConfig.errorInputActiveClass);
}

const hideInputError = (errorElement, validationConfig) => {
	errorElement.textContent = "";
	errorElement.classList.remove(validationConfig.errorInputActiveClass);
}

const toggleButtonState = (inputList, buttonElement, validationConfig) => {
	const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

	if (hasInvalidInput) {
		turnOffButtom(buttonElement, validationConfig);
	} else {
		turnOnButtom(buttonElement, validationConfig);
	}
}

const turnOffButtom = (buttonElement, validationConfig) => {
	buttonElement.setAttribute("disabled", true);
	buttonElement.classList.add(validationConfig.inactiveButtonClass);
}

const turnOnButtom = (buttonElement, validationConfig) => {
	buttonElement.removeAttribute("disabled");
	buttonElement.classList.remove(validationConfig.inactiveButtonClass);
}

const toggleInputErrorState = (inputElement, validationConfig) => {
	const isValid = inputElement.validity.valid;

	const formInputSection = inputElement.closest(validationConfig.sectionSelector);
	const errorElement = formInputSection.querySelector(validationConfig.errorInputSelector)

	if (isValid) {
		hideInputError(errorElement, validationConfig);
	} else {
		showInputError(errorElement, inputElement.validationMessage, validationConfig);
	}
}

const setEventListeners = (formElement, validationConfig) => {
	const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
	const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
	
	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			toggleInputErrorState(inputElement, validationConfig);
			toggleButtonState(inputList, submitButton, validationConfig)
		})
	})
}

const enableValidation = (validationConfig) => {
	const formList = document.querySelectorAll(validationConfig.formSelector);

	formList.forEach(form => setEventListeners(form, validationConfig))
}

const validationConfig = {
	formSelector: '.popup__form',
	inputSelector: '.popup__field',
	submitButtonSelector: '.popup__save-button',
	sectionSelector: '.popup__section',
	errorInputSelector: '.popup__field-error',
	errorInputActiveClass: 'popup__input-error_active',
	inactiveButtonClass: 'popup__save-button_inactive'
}
