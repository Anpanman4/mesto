export default class Card {

  constructor(card, template, popupImage) {
    this._cardDetails = card;
    this._templateId = template;
    this._popupImage = popupImage;
  }

  _getTemplate = () => {
    const cardElement = document
      .querySelector(this._templateId)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners = () => {
    this._elementLike.addEventListener('click', this._toggleLikeHandler)
    this._elementTrash.addEventListener('click', this._removeCardHandler);
    this._elementImage.addEventListener('click', this._openModalImageHandler);
  }

  _toggleLikeHandler = () => {
    this._elementLike.classList.toggle('element__like_active');
  }

  _removeCardHandler = () => {
    this._element.remove();
  }

  _openModalImageHandler = () => {
    this._popupImage.open(this._cardDetails);
  }

  _addCardDetails = () => {
    const elementName = this._element.querySelector('.element__place');
    const elementLink = this._element.querySelector('.element__image');
    elementName.textContent = this._cardDetails.name;
    elementLink.src = this._cardDetails.link;
    elementLink.alt = this._cardDetails.name;
  }

  render() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.element__like');
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');

    this._setEventListeners();
    this._addCardDetails();

    return this._element;
  }
}