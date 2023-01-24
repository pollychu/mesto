export { Card };

// class Card
class Card {
  constructor(cardData, templateSelector, openImagePopup) {
    this._cardData = cardData;
    this._title = cardData.title;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
    this._openImagePopup = openImagePopup;
    this._cardData = cardData;
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
    this._deleteButton = this._element.querySelector('.card__delete-button');
    this._cardTitle = this._element.querySelector('.card__title');

    this._picture.src = this._link;
    this._picture.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._setEventListeners();
    return this._element;
  }

   _handleLikeCard () {
    this._likeButton.classList.toggle('card__like-button_active');
  }
  _handleDeleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard();
    });
    this._picture.addEventListener('click', () => {
      this._openImagePopup(this._cardData);
    });
  }
}
