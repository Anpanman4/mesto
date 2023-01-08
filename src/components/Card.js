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
    this._element.querySelector('.element__like').addEventListener('click', this._toggleLikeHandler)
    this._element.querySelector('.element__trash').addEventListener('click', this._removeCardHandler);
    this._element.querySelector('.element__image').addEventListener('click', this._openModalImageHandler);
  }

  _toggleLikeHandler = () => {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
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
    this._setEventListeners();
    this._addCardDetails();

    return this._element;
  }
}