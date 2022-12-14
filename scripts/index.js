// переменные для всех трех форм
const profileEditPopup = document.querySelector('.popup_purpose_edit-profile');
const profileEditPopupOpenButton = document.querySelector('.profile__edit-button');
const profileEditPopupCloseButton = document.querySelector('.popup__close-button');
const profileEditForm = profileEditPopup.querySelector('.popup__form');
const credentialsInput = profileEditForm.querySelector('.popup__input_type_credentials');
const descriptionInput = profileEditForm.querySelector('.popup__input_type_description');
const credentialsOutput = document.querySelector('.profile__credentials');
const descriptionOutput = document.querySelector('.profile__description');

const cardAddPopup = document.querySelector('.popup_purpose_add-card');
const cardAddOpenButton = document.querySelector('.profile__add-button');
const cardAddCloseButton = cardAddPopup.querySelector('.popup__close-button');
const cardAddForm = cardAddPopup.querySelector('.popup__form');
const cardsContainer = document.querySelector('.gallery');
const cardsTemplate = document.querySelector('#cards-template').content;
const titleInput = cardAddPopup.querySelector('.popup__input_type_title');
const linkInput = cardAddPopup.querySelector('.popup__input_type_link');

const pictureShowPopup = document.querySelector('.popup_purpose_show-picture');
const pictureShowPopupCloseButton = document.querySelector('.popup__close-button_place_picture');
const pictureShowPopupCaption = document.querySelector('.popup__picture-caption');
const picture = document.querySelector('.popup__picture');

const popupCloseButtons = document.querySelectorAll('.popup__close-button');

// блок с общим функционалом
const openPopup = popup => {
  popup.classList.add('popup_opened');
};
const closePopup = popup => {
  popup.classList.remove('popup_opened');
}

// блок с присваиванием значений в попах-полях
const setDefoltEditProfilePopupValues = () => {
  credentialsInput.value = credentialsOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
  openPopup(profileEditPopup);
}
const resetCardAddPopupValues = () => {
  cardAddForm.reset();
  openPopup(cardAddPopup);
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

// обработчики событий для трех форм
profileEditPopupOpenButton.addEventListener('click', setDefoltEditProfilePopupValues);
cardAddOpenButton.addEventListener('click', resetCardAddPopupValues);
profileEditForm.addEventListener('submit', handleSubmitProfileEditForm);
popupCloseButtons.forEach((button) => {
  button.addEventListener('click', () => closePopup(button.closest('.popup')));
});

// функционал создания, удаления, лайка карточки
const createCard = (cardData) => {
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardPicture = cardElement.querySelector('.card__picture');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardLikeButton.addEventListener('click', () => cardLikeButton.classList.toggle('card__like-button_active'));
  cardDeleteButton.addEventListener('click', () => cardElement.remove());
  cardPicture.addEventListener('click', () => setPictureShowPopupValues(cardData));
  cardPicture.src = cardData.link;
  cardPicture.alt = cardData.title;
  cardTitle.textContent = cardData.title;
  return(cardElement);
}

// карточки при рендеренге страницы
initialCards.forEach((el) => {
  cardsContainer.prepend(createCard(el));
});

// карточки от пользователя
const handleSubmitCardAddForm = (evt) => {
  const cardData = {
    title: titleInput.value,
    link: linkInput.value
  };
  evt.preventDefault();
  cardsContainer.prepend(createCard(cardData));
  closePopup(cardAddPopup);
}
cardAddForm.addEventListener('submit', handleSubmitCardAddForm);
