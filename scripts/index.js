const profileElement = document.querySelector('.profile');
const popupEditButtonElement = profileElement.querySelector('.profile__edit-button');
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupForm = popupElement.querySelector('.popup__form');

// ф-я для открытия popup
const addPopupVisibility = function() {
	popupElement.querySelector('.popup__field_type_name').value = profileElement.querySelector('.profile__name').textContent;
	popupElement.querySelector('.popup__field_type_job').value = profileElement.querySelector('.profile__job').textContent;
	popupElement.classList.add('popup_opened');
}

// ф-я для закрытия popup
const removePopupVisibility = function() {
	popupElement.classList.remove('popup_opened');
}

// ф-я для сохранения новых значений popup
const savePopupValue = function(event) {
	event.preventDefault()
	profileElement.querySelector('.profile__name').textContent = popupElement.querySelector('.popup__field_type_name').value;
	profileElement.querySelector('.profile__job').textContent = popupElement.querySelector('.popup__field_type_job').value;
	removePopupVisibility();
}

// ф-я для закрытия popup по клику вне формы
// const closePopupOnClickOverlay = function(event) {
// 	if (event.target !== event.currentTarget) {
// 		return;
// 	}
// 	removePopupVisibility();
// }

popupEditButtonElement.addEventListener('click', addPopupVisibility);
popupCloseButtonElement.addEventListener('click', removePopupVisibility);
popupForm.addEventListener('submit', savePopupValue);
// popupElement.addEventListener('click', closePopupOnClickOverlay);
