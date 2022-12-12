const initialCards = [
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
const titleInput = cardAddPopup.querySelector('.popup__input_type_title');
const linkInput = cardAddPopup.querySelector('.popup__input_type_link');

const pictureShowPopup = document.querySelector('.popup_purpose_show-picture');
const pictureShowPopupCloseButton = document.querySelector('.popup__close-button_place_picture');
const pictureShowPopupCaption = document.querySelector('.popup__picture-caption');
const picture = document.querySelector('.popup__picture');

// блок с общим функционалом
const openPopup = popup => {
  popup.classList.add('popup_opened');
};
const closePopup = popup => {
  popup.classList.remove('popup_opened');
}

// блок с присваиванием значений в попах-полях
const defoltEditProfilePopupValues = () => {
  credentialsInput.value = credentialsOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
}
const defoltCardAddPopupValues = () => {
  titleInput.value = '';
  linkInput.value = '';
}

// изменение описания профиля
function profileEditFormSubmitHandler (evt) {
  evt.preventDefault();
  credentialsOutput.textContent = credentialsInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup(profileEditPopup);
}

// обработчики событий для трех форм
profileEditPopupOpenButton.addEventListener('click', () => openPopup(profileEditPopup));
profileEditPopupCloseButton.addEventListener('click', () => closePopup(profileEditPopup));
profileEditForm.addEventListener('submit', profileEditFormSubmitHandler);
profileEditPopupOpenButton.addEventListener('click', defoltEditProfilePopupValues);

cardAddOpenButton.addEventListener('click', () => openPopup(cardAddPopup));
cardAddCloseButton.addEventListener('click', () => closePopup(cardAddPopup));
cardAddOpenButton.addEventListener('click', defoltCardAddPopupValues);

pictureShowPopupCloseButton.addEventListener('click',() => closePopup(pictureShowPopup));

// функционал создания, удаления, лайка карточки и открытия картинки
function addCard(title, link) {
  const cardsTemplate = document.querySelector('#cards-template').content;
  const cardsContainer = document.querySelector('.gallery');
  const cardElement = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardPicture = cardElement.querySelector('.card__picture');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardTitle = cardElement.querySelector('.card__title');

  cardLikeButton.addEventListener('click', function () {
    cardLikeButton.classList.toggle('card__like-button_active');
  });
  cardDeleteButton.addEventListener('click', function() {
    cardElement.remove();
  });

  cardPicture.src = link;
  cardPicture.alt = title;
  cardTitle.textContent = title;
  cardsContainer.prepend(cardElement);
  cardPicture.addEventListener('click', () => openPopup(pictureShowPopup));
  cardPicture.addEventListener('click', function() {
    pictureShowPopupCaption.textContent = cardTitle.textContent;
    picture.src = cardPicture.src;
    picture.alt = cardTitle.textContent;
  });
}

// карточки при рендеренге страницы
initialCards.forEach((el) => {
  addCard(el.title, el.link);
});

// карточки от пользователя
function cardAddFormSubmitHandler (evt) {
  evt.preventDefault();
  if (titleInput.value !== '' && linkInput.value !== '') {
    addCard(titleInput.value, linkInput.value);
  }
  closePopup(cardAddPopup);
}
cardAddForm.addEventListener('submit', cardAddFormSubmitHandler);
