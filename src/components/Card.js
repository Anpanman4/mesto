import {popupDeleteButton} from '../utils/constants.js'

export default class Card {

  constructor(card, template, popupImage, popupDelete, owner, deleteCardServer) {
    this._cardDetails = card;
    this._templateId = template;
    this._popupImage = popupImage;
    this._popupDelete = popupDelete;
    this._userOwner = owner;
    this._cardOwner = card.owner._id
    this._deleteCardServer = deleteCardServer;
    this._deleteCard = this._deleteCard.bind(this);
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
    this._elementImage.addEventListener('click', this._openModalImageHandler);
    this._elementTrash.addEventListener('click', () => {
      this._popupDelete.open();
      popupDeleteButton.addEventListener('click', this._deleteCard)
    });
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

  _checkTrash() {
    if (this._cardOwner !== this._userOwner) {
      this._elementTrash.remove();
    }
  }

  _deleteCard() {
    popupDeleteButton.removeEventListener('click', this._deleteCard)
    
    this._deleteCardServer(this._cardDetails._id)

    this._removeCardHandler();

    this._popupDelete.close();
  }

  render() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.element__like');
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementNumberLikes = this._element.querySelector('.element__likes-number');

    this._checkTrash();

    this._elementNumberLikes.textContent = this._cardDetails.likes.length;

    this._setEventListeners();
    this._addCardDetails();

    return this._element;
  }
}