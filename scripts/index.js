// переменные для всех трех форм
const profileEditPopup = document.querySelector('.popup_purpose_edit-profile');
const profileEditPopupOpenButton = document.querySelector('.profile__edit-button');
const profileEditPopupSaveButton = profileEditPopup.querySelector('.popup__save-button');
const profileEditForm = profileEditPopup.querySelector('.popup__form');
const credentialsInput = profileEditForm.querySelector('.popup__input_type_credentials');
const descriptionInput = profileEditForm.querySelector('.popup__input_type_description');
const credentialsOutput = document.querySelector('.profile__credentials');
const descriptionOutput = document.querySelector('.profile__description');
const inputsFromEditForm = Array.from(profileEditForm.querySelectorAll('.popup__input'));

const cardAddPopup = document.querySelector('.popup_purpose_add-card');
const cardAddOpenButton = document.querySelector('.profile__add-button');
const cardAddSaveButton = cardAddPopup.querySelector('.popup__save-button');
const cardAddForm = cardAddPopup.querySelector('.popup__form');
const cardsContainer = document.querySelector('.gallery');
const cardsTemplate = document.querySelector('#cards-template').content;
const titleInput = cardAddPopup.querySelector('.popup__input_type_title');
const linkInput = cardAddPopup.querySelector('.popup__input_type_link');
const inputsFromAddForm =  Array.from(cardAddForm.querySelectorAll('.popup__input'));

const pictureShowPopup = document.querySelector('.popup_purpose_show-picture');
const pictureShowPopupCloseButton = document.querySelector('.popup__close-button_place_picture');

const pictureShowPopupCaption = document.querySelector('.popup__picture-caption');
const picture = document.querySelector('.popup__picture');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');
const inputsFromPopups =  Array.from(document.querySelectorAll('.popup__input'));
const popups = Array.from(document.querySelectorAll('.popup'));

// блок с общим функционалом
const openPopup = popup => {
  popup.classList.add('popup_opened');
  inputsFromPopups.forEach((input) => {
    hideInputError(input.closest('.popup'), input);
  document.addEventListener('keydown', closePopupWithEsc);
  });
}
const closePopup = popup => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc);
}
const closePopupWithEsc = (e) => {
  const popupOpened = document.querySelector('.popup_opened');
  if(e.key=='Escape'||e.key=='Esc'){
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

// блок с присваиванием значений в попах-полях
const setDefoltEditProfilePopupValues = () => {
  credentialsInput.value = credentialsOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
  toggleButtonState(inputsFromEditForm, profileEditPopupSaveButton);
  openPopup(profileEditPopup);
}
const resetCardAddPopupValues = () => {
  cardAddForm.reset();
  openPopup(cardAddPopup);
  toggleButtonState(inputsFromAddForm, cardAddSaveButton);
}
const setPictureShowPopupValues = (cardData) => {
  pictureShowPopupCaption.textContent = cardData.title;
  picture.src = cardData.link;
  picture.alt = cardData.title;
  openPopup(pictureShowPopup);
}

// изменение описания профиля
const handleSubmitProfileEditForm  = (evt) => {
  evt.preventDefault();
  credentialsOutput.textContent = credentialsInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup(profileEditPopup);
}

// функции для внутренности карты добавления
const handleLikeCard = (e) => {
  e.target.classList.toggle('card__like-button_active');
};
const handleDeleteCard = (e) => {
  e.remove();
}

// обработчики событий для трех форм
profileEditPopupOpenButton.addEventListener('click', setDefoltEditProfilePopupValues);
cardAddOpenButton.addEventListener('click', resetCardAddPopupValues);
profileEditForm.addEventListener('submit', handleSubmitProfileEditForm);
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});
popups.forEach((popup) => {
  popup.addEventListener("mousedown", closePopupOnBackgroundClick);
});


// функционал создания, удаления, лайка карточки
const createCard = (cardData) => {
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardPicture = cardElement.querySelector('.card__picture');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardLikeButton.addEventListener('click', handleLikeCard);
  cardDeleteButton.addEventListener('click', () => handleDeleteCard(cardElement));
  cardPicture.addEventListener('click', () => setPictureShowPopupValues(cardData));

  cardPicture.src = cardData.link;
  cardPicture.alt = cardData.title;
  cardTitle.textContent = cardData.title;
  return(cardElement);
}

const renderCard = (card) => {
  cardsContainer.prepend(card)
}

// карточки при рендеренге страницы
initialCards.forEach((el) => {
  renderCard(createCard(el));
});

// карточки от пользователя
const handleSubmitCardAddForm = (evt) => {
  const cardData = {
    title: titleInput.value,
    link: linkInput.value
  };
  evt.preventDefault();
  renderCard(createCard(cardData));
  closePopup(cardAddPopup);
}
cardAddForm.addEventListener('submit', handleSubmitCardAddForm);
