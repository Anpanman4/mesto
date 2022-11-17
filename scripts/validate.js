const showInputError = (errorElement, errorMessage, selectors) => {
	errorElement.textContent = errorMessage;
	errorElement.classList.add(selectors.errorInputActiveSelector);
}

const hideInputError = (errorElement, selectors) => {
	errorElement.textContent = "";
	errorElement.classList.remove(selectors.errorInputActiveSelector);
}

const toggleButtonState = (inputList, buttonElement, selectors) => {
	const hasInvalidInput = inputList.some(inputElement => !inputElement.validity.valid);

	if (hasInvalidInput) {
		buttonElement.setAttribute("disabled", true)
		buttonElement.classList.add(selectors.inactiveButtonSelector)
	} else {
		buttonElement.removeAttribute("disabled")
		buttonElement.classList.remove(selectors.inactiveButtonSelector)
	}
}

const checkInputValidity = (inputElement, selectors) => {
	const isValid = inputElement.validity.valid;

	const formSection = inputElement.closest(selectors.sectionSelector);
	const errorElement = formSection.querySelector(selectors.errorInputSelector)

	if (isValid) {
		hideInputError(errorElement, selectors);
	} else {
		showInputError(errorElement, inputElement.validationMessage, selectors);
	}
}

const setEventListeners = (formElement, selectors) => {
	formElement.addEventListener('submit', (evt) => evt.preventDefault())

	const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
	const submitButton = formElement.querySelector(selectors.submitButtonSelector);
	
	inputList.forEach(inputElement => {
		inputElement.addEventListener('input', () => {
			checkInputValidity(inputElement, selectors);
			toggleButtonState(inputList, submitButton, selectors)
		})
	})
}

const enableValidation = (selectors) => {
	const formList = document.querySelectorAll(selectors.formSelector);

	formList.forEach(form => setEventListeners(form, selectors))
}

const selectors = {
	formSelector: '.popup__form',
	inputSelector: '.popup__field',
	submitButtonSelector: '.popup__save-button',
	sectionSelector: '.popup__section',
	errorInputSelector: '.popup__field-error',
	errorInputActiveSelector: 'popup__input-error_active',
	inactiveButtonSelector: 'popup__save-button_inactive'
}
