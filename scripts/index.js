const profileElement = document.querySelector('.profile');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');

const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSaveButtonElement = popupElement.querySelector('.popup__save-button');

const addPopupVisibility = function() {
	let profileName = profileElement.querySelector('.profile__name').textContent;
	let profileJob = profileElement.querySelector('.profile__job').textContent;
	popupElement.querySelector('.popup__field-name').value = profileName;
	popupElement.querySelector('.popup__field-job').value = profileJob;
	popupElement.classList.add('popup_opened');
}

const removePopupVisibility = function() {
	popupElement.classList.remove('popup_opened');
}

const savePopupValue = function(event) {
	event.preventDefault()
	let profileNameValue = popupElement.querySelector('.popup__field-name').value;
	let profileJobValue = popupElement.querySelector('.popup__field-job').value;
	profileElement.querySelector('.profile__name').textContent = profileNameValue;
	profileElement.querySelector('.profile__job').textContent = profileJobValue;
	popupElement.classList.remove('popup_opened');
}

const closePopupOnClickOverlay = function(event) {
	if (event.target !== event.currentTarget) {
		return;
	}
	removePopupVisibility();
}

popupEditButtonElement.addEventListener('click', addPopupVisibility);
popupCloseButtonElement.addEventListener('click', removePopupVisibility);
popupElement.addEventListener('click', closePopupOnClickOverlay);
popupSaveButtonElement.addEventListener('click', savePopupValue);
