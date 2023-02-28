import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._picture = this._popup.querySelector('.popup__picture');
    this._caption = this._popup.querySelector('.popup__picture-caption');
  }

  open (imageData) {
    super.open();
    this._caption.textContent = imageData.name;
    this._picture.alt = imageData.name;
    this._picture.src = imageData.link;
  }
}
