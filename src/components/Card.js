export default class Card {
  constructor({ cardData }, handleCardClick, templateSelector, user, { handleDeleteCard }, { handleLikeCard }) {
    this.cardData = cardData;
    this._cardOwner = cardData.owner._id;
    this._userId = user._id;
    this._title = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._picture = this._element.querySelector('.card__picture');
    this._likeButton = this._element.querySelector('.card__like-button');
    this._likeNumber = this._element.querySelector('.card__likes-number');
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._cardTitle = this._element.querySelector('.card__title');
    this._likes = this.cardData.likes;
    this.isLiked = false;

    this._picture.src = this._link;
    this._picture.alt = this._title;
    this._cardTitle.textContent = this._title;
    this._likeNumber.innerHTML = this._likes.length;

    this._setCardLike();
    this._setDeleteButton();
    this._setEventListeners();
    this.setLikesNumber(this._likes.length);
    return this._element;
  }

  deleteCardOnPage() {
    this._element.remove();
  }
  _deleteCardEverywhere = () => {
    this._handleDeleteCard(this.cardData, this);

  }

  _setCardLike = () => {
    if (this._likes.some(liker => liker._id === this._userId)) {
      this._likeButton.classList.add('card__like-button_active');
      this.isLiked = true;
    }
    else {
      this._likeButton.classList.remove('card__like-button_active');
    }
  }

  setLikesNumber = (likesNumber) => {
    this._likeNumber.innerHTML = likesNumber;
  }

  likeCard = () => {
    this._likeButton.classList.toggle('card__like-button_active');
  }

  _setDeleteButton = () => {
    if (this._cardOwner === this._userId) {
      this._deleteButton.classList.remove('card__delete-button_hidden');
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard(this.cardData);
    });
    this._deleteButton.addEventListener('click', () => {
      this._deleteCardEverywhere();
    });
    this._picture.addEventListener('click', () => {
      this._handleCardClick(this.cardData);
    });
  }
}
