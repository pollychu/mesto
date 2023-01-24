import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCardsList, validationConfig } from './constants.js';

// блок со всеми нужными переменными и объектами
const profileEditPopup = document.querySelector('.popup_purpose_edit-profile');
const profileEditPopupOpenButton = document.querySelector('.profile__edit-button');
const profileEditForm = profileEditPopup.querySelector('.popup__form');
const credentialsInput = profileEditForm.querySelector('.popup__input_type_credentials');
const descriptionInput = profileEditForm.querySelector('.popup__input_type_description');
const credentialsOutput = document.querySelector('.profile__credentials');
const descriptionOutput = document.querySelector('.profile__description');

const cardAddPopup = document.querySelector('.popup_purpose_add-card');
const cardAddOpenButton = document.querySelector('.profile__add-button');
const cardAddForm = cardAddPopup.querySelector('.popup__form');
const cardsContainer = document.querySelector('.gallery');
const titleInput = cardAddPopup.querySelector('.popup__input_type_title');
const linkInput = cardAddPopup.querySelector('.popup__input_type_link');

const pictureShowPopup = document.querySelector('.popup_purpose_show-picture');
const pictureShowPopupCaption = document.querySelector('.popup__picture-caption');
const picture = document.querySelector('.popup__picture');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const popups = Array.from(document.querySelectorAll('.popup'));

// блок с общим функционалом открытия-закрытия попапов
const openPopup = popup => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc);
}
const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}
const closePopupWithEsc = (e) => {
  if(e.key=='Escape'||e.key=='Esc'){
    const popupOpened = document.querySelector('.popup_opened');
    e.preventDefault();
    closePopup(popupOpened);
  }
}
const closePopupOnBackgroundClick = ({ currentTarget, target }) => {
  const popup = currentTarget;
  if (target === popup) {
    closePopup(popup);
  }
}

// блок с присваиванием значений в попах-полях и их открытие
const openImagePopup = (cardInfo) => {
  pictureShowPopupCaption.textContent = cardInfo.title;
  picture.src = cardInfo.link;
  picture.alt = cardInfo.title;
  openPopup(pictureShowPopup);
}
const openEditProfilePopup = () => {
  credentialsInput.value = credentialsOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
  profileEditFormfValidator.resetFormCondition();
  openPopup(profileEditPopup);
}
const openAddCardPopup = () => {
  cardAddForm.reset();
  cardAddPopupFormValidator.resetFormCondition();
  openPopup(cardAddPopup);
}

// изменение описания профиля
const handleSubmitProfileEditForm  = (evt) => {
  evt.preventDefault();
  credentialsOutput.textContent = credentialsInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup(profileEditPopup);
}

// обработчики событий для трех форм
profileEditPopupOpenButton.addEventListener('click', openEditProfilePopup);
cardAddOpenButton.addEventListener('click', openAddCardPopup);
profileEditForm.addEventListener('submit', handleSubmitProfileEditForm);
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});
popups.forEach((popup) => {
  popup.addEventListener("mousedown", closePopupOnBackgroundClick);
});

// для каждой проверяемой формы экземпляр класса FormValidator.
const createFormValidator = (form) => {
  const newFormValidator = new FormValidator(validationConfig, form);
  return newFormValidator;
}
const profileEditFormfValidator = createFormValidator(profileEditForm);
profileEditFormfValidator.enableValidation();
const cardAddPopupFormValidator = createFormValidator(cardAddForm);
cardAddPopupFormValidator.enableValidation();

  // добавление и создание карточки карточки
const createCard = (card) => {
  const newCard = new Card(card, '#cards-template', openImagePopup);
  return newCard;
}
const renderCard = (card) => {
  cardsContainer.prepend(card);
}

// карточки при загрузке страницы
initialCardsList.forEach((initialCard) => {
  const card = createCard(initialCard);
  const defaultCard = card.generateCard();
  renderCard(defaultCard);
});

// карточки от пользователя
const handleSubmitCardAddForm = (evt) => {
  const userCardData = {
    title: titleInput.value,
    link: linkInput.value
  };
  const card = createCard(userCardData);
  const userCard = card.generateCard();
  evt.preventDefault();
  renderCard(userCard);
  closePopup(cardAddPopup);
}
cardAddForm.addEventListener('submit', handleSubmitCardAddForm);
