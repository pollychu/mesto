export const initialPictures = [
  {
    title: 'Америка',
    link: 'https://images.unsplash.com/photo-1643132711926-45276ac9d3e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
  {
    title: 'Лондон',
    link: 'https://images.unsplash.com/photo-1646151449686-b855e12acae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80'
  },
  {
    title: 'Иран',
    link: 'https://images.unsplash.com/photo-1667089243167-1fc8678e0a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
  {
    title: 'Канада',
    link: 'https://images.unsplash.com/photo-1664202293071-d77ba3d55ca2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80'
  },
  {
    title: 'Букингемский дворец',
    link: 'https://images.unsplash.com/photo-1662729429569-ad4b1300512e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  },
  {
    title: 'Индия',
    link: 'https://images.unsplash.com/photo-1658834117178-c2088dbbac7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80'
  }
];

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__input_incorrect",
  errorClass: "popup__input-error_active",
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
