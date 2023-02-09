import {
  pictureShowPopupCaption,
  picture
 } from '../utils/constants.js';
import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageData) {
    super(popupSelector);
    this._title = imageData.title;
    this._image = imageData.link;
  }

  open () {
    super.open();
    pictureShowPopupCaption.textContent = this._title;
    picture.alt = this._title;
    picture.src = this._image;
  }
}
