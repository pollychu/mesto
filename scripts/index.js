const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let credentialsInput = formElement.querySelector('.popup__input_type_credentials');
let descriptionInput = formElement.querySelector('.popup__input_type_description');
let credentialsOutput = document.querySelector('.profile__credentials');
let descriptionOutput = document.querySelector('.profile__description');

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

function openPopup () {
  popup.classList.add('popup__opened');
  credentialsInput.value = credentialsOutput.textContent;
  descriptionInput.value = descriptionOutput.textContent;
}

function closePopup () {
  popup.classList.remove('popup__opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  credentialsOutput.textContent = credentialsInput.value;
  descriptionOutput.textContent = descriptionInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);