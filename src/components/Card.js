import {popupDeleteButton} from '../utils/constants.js'

export default class Card {

  constructor(card, template, popupImage, popupDelete, owner, deleteCardServer, api) {
    this._cardDetails = card;
    this._templateId = template;
    this._popupImage = popupImage;
    this._popupDelete = popupDelete;
    this._userOwner = owner;
    this._cardOwner = card.owner._id
    this._deleteCardServer = deleteCardServer;
    this._deleteCard = this._deleteCard.bind(this);
    this._api = api;
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
    if (this._elementLike.classList.contains('element__like_active')) {
      this._elementLike.classList.remove('element__like_active');
      this._api.deleteLike(this._cardDetails._id)
        .then(res => {
          this._elementNumberLikes.textContent = res.likes.length;
        })
        .catch(err => console.log(err))
    } else {
      this._elementLike.classList.add('element__like_active');
      this._api.doLike(this._cardDetails._id)
        .then(res => {
          this._elementNumberLikes.textContent = res.likes.length;
        })
        .catch(err => console.log(err))
    }
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

  _checkLike() {
    const isLiked = this._cardDetails.likes.some((item) => {
      return item._id === this._userOwner
    })
    if (isLiked) {
      this._elementLike.classList.add('element__like_active');
    }
  }

  _deleteCard() {
    popupDeleteButton.removeEventListener('click', this._deleteCard)

    this._deleteCardServer(this._cardDetails._id)
    
    this._removeCardHandler();

    this._popupDelete.close();

  }

  _showCountLikes () {
    this._elementNumberLikes.textContent = this._cardDetails.likes.length;
  }

  render() {
    this._element = this._getTemplate();
    this._elementLike = this._element.querySelector('.element__like');
    this._elementTrash = this._element.querySelector('.element__trash');
    this._elementImage = this._element.querySelector('.element__image');
    this._elementNumberLikes = this._element.querySelector('.element__likes-number');

    this._checkTrash();
    this._checkLike()
    this._showCountLikes();

    this._setEventListeners();
    this._addCardDetails();

    return this._element;
  }
}