import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import {
  validationConfig,
  initialPictures,
  profileEditPopupOpenButton,
  credentialsInput,
  descriptionInput,
  profileEditForm,
  cardAddForm,
  cardAddOpenButton
} from '../utils/constants.js';
import './index.css';

// отрисовка дефолтных карточек
const handleCardClick = (data) => {
  const popupWithImage = new PopupWithImage('.popup_purpose_show-picture', data);
  popupWithImage.open();
  popupWithImage.setEventListeners();
}
const initialCardsList = new Section({
  items: initialPictures,
  renderer: (item) => {
    const card = new Card({ cardData: item }, handleCardClick, '#cards-template');
    const cardElement = card.generateCard();
    initialCardsList.addItem(cardElement);
    }
  }, '.gallery');
  initialCardsList.renderItems();

// блок для редактирования инфо о пользователе
const createFormValidator = (form) => {
  const newFormValidator = new FormValidator(validationConfig, form);
  return newFormValidator;
}
const profileEditFormfValidator = createFormValidator(profileEditForm);
profileEditFormfValidator.enableValidation();
const cardAddPopupFormValidator = createFormValidator(cardAddForm);
cardAddPopupFormValidator.enableValidation();

const userInfo = new UserInfo({
  userCredentialsSelector: '.profile__credentials',
  userDescriptionSelector: '.profile__description'
});

const editPopup = new PopupWithForm(
  '.popup_purpose_edit-profile', {
  handleFormSubmit: (inputsData) => {
    userInfo.setUserInfo(inputsData);
    editPopup.close();
    }
  }
);
// этот метод помимо прочего при сабмите формы активирует
// handleFormSubmit с this._getInputValues в аргументе
editPopup.setEventListeners();

const hadleOpenEditPopup = () => {
  editPopup.open();
  profileEditFormfValidator.resetFormCondition();
  const currentData = userInfo.getUserInfo();
  credentialsInput.value = currentData.credentials;
  descriptionInput.value = currentData.description;
}
profileEditPopupOpenButton.addEventListener('click', () => {
  hadleOpenEditPopup();
});

// блок для добавления карточек от юзера
const addPopup = new PopupWithForm(
  '.popup_purpose_add-card', {

  handleFormSubmit: (inputsData) => {
    const userItems = [];
    userItems.push(inputsData);

    const userCard = new Section({
      items: userItems,
      renderer: (inputsData) => {
        const card = new Card({ cardData: inputsData }, handleCardClick, '#cards-template');
        const cardElement = card.generateCard();
        userCard.addItem(cardElement);
        }
      }, '.gallery');

    userCard.renderItems();
    addPopup.close();
    }
  }
);
addPopup.setEventListeners();

const hadleOpenCardAddPopup = () => {
  addPopup.open();
  cardAddPopupFormValidator.resetFormCondition();
}
cardAddOpenButton.addEventListener('click', () => {
  hadleOpenCardAddPopup();
});
