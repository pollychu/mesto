export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_incorrect",
  errorClass: "popup__input-error_active",
};


export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '0de4c39e-5b90-4384-ab42-a9e741a5f163',
    'Content-Type': 'application/json'
  }
};


export const pictureShowPopup = document.querySelector('.popup_purpose_show-picture');
export const profileEditPopupOpenButton = document.querySelector('.profile__edit-button');
export const cardAddOpenButton = document.querySelector('.profile__add-button');
const cardAddPopup = document.querySelector('.popup_purpose_add-card');
export const cardAddForm = cardAddPopup.querySelector('.popup__form');
const profileEditPopup = document.querySelector('.popup_purpose_edit-profile');
export const profileEditForm = profileEditPopup.querySelector('.popup__form');
export const credentialsInput = profileEditForm.querySelector('.popup__input_type_credentials');
export const descriptionInput = profileEditForm.querySelector('.popup__input_type_description');
export const avatarChangeButton = document.querySelector('.profile__avatar-button');
const avatarChangePopup = document.querySelector('.popup_purpose_change-avatar');
export const avatarChangeForm = avatarChangePopup.querySelector('.popup__form');
