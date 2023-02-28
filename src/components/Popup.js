export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (e) => {
    if (e.key=='Escape'||e.key=='Esc') {
      e.preventDefault();
      this.close();
    }
  }

  setEventListeners () {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });
    this._popup.addEventListener('mouseup', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      }
    });
  }
}
