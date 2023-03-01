import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import {
  validationConfig,
  profileEditPopupOpenButton,
  credentialsInput,
  descriptionInput,
  profileEditForm,
  cardAddForm,
  avatarChangeForm,
  cardAddOpenButton,
  apiConfig,
  avatarChangeButton
} from '../utils/constants.js';
import './index.css';


// cоздаю инстанс класса апи для работы с сервером
const api = new Api(apiConfig);
// позже сюда запишется userId
let userId;

// запуск валидации форм
const createFormValidator = (form) => {
  const newFormValidator = new FormValidator(validationConfig, form);
  return newFormValidator;
}
const profileEditFormfValidator = createFormValidator(profileEditForm);
profileEditFormfValidator.enableValidation();
const cardAddPopupFormValidator = createFormValidator(cardAddForm);
cardAddPopupFormValidator.enableValidation();
const avatarChangePopupValidator = createFormValidator(avatarChangeForm);
avatarChangePopupValidator.enableValidation();


// инстанс юзеринфо для работы с данными юзера
const userInfo = new UserInfo({
  userCredentialsSelector: '.profile__credentials',
  userDescriptionSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
});

// инстанс класса, ответственного за рендеринг карточек
// - рендерер для отрисовки всех карточек с сервера при загрузке стр
const cardList = new Section({
  renderer: (item) => {
    const cardElement = createNewCard({ cardData: item });
    cardList.addItems(cardElement);
  }
}, '.gallery');

// создаю инстансы нужных попапов и колбэки с ними
const popupWithImage = new PopupWithImage('.popup_purpose_show-picture');
popupWithImage.setEventListeners();
const handleCardClick = (data) => {
  popupWithImage.open(data);
}
const popupWithConfirmation = new PopupWithConfirmation('.popup_purpose_confirm-delete');
popupWithConfirmation.setEventListeners();

const popupAddCard = new PopupWithForm(
  '.popup_purpose_add-card', {
  handleFormSubmit: (inputsData) => {
    api.createCard(inputsData)
      .then((card) => {
        const newCard = createNewCard({ cardData: card });
        cardList.addItem(newCard);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        cardAddPopupFormValidator.changeButtonOnSaveChanges();
      })
  }
}, {
  setSubmitButtonValue: () => {
    cardAddPopupFormValidator.setDefaultSubmitButtonValue();
    }
  }
);
popupAddCard.setEventListeners();
const hadleOpenCardAddPopup = () => {
  popupAddCard.open();
  cardAddPopupFormValidator.resetFormCondition();
}
cardAddOpenButton.addEventListener('click', () => {
  hadleOpenCardAddPopup();
});

// загружаю данные с сервера и завожу в профиль + завожу в юзерайди нужный айди
api.getUserInfo()
  .then((user) => {
    userInfo.setUserInfo({ credentials: user.name, description: user.about });
    userInfo.setUserAvatar({ link: user.avatar });
    userId = user._id;
    api.getCardList()
      .then((cards) => {
        cardList.renderItems(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

// прописываю универсальную функцию создания карточки
const createNewCard = ({ cardData }) => {
  const card = new Card({ cardData }, handleCardClick, '#cards-template', userId,
  {
    // при нажатии на корзину из класса карт возьмутся данные - data = this.cardData, card = this
    handleDeleteCard: (data, card) => {
      popupWithConfirmation.open();
      // через метод класса записываю в колбэк, что произойдет при сабмите
      popupWithConfirmation.handleDeleteConfirm({
        handleFormSubmit: () => {
          api.deleteCard(data._id)
          .then(() => {
            card.deleteCardOnPage();
          })
          .then(() => {
            popupWithConfirmation.close();
          })
          .catch((err) => {
            console.log(err);
          });
        }
      });
    }
  },
  {
    handleLikeCard: (data) => {
      if (card.isLiked) {
        api.deleteLike(data._id)
          .then((data) => {
            card.isLiked = false;
            card.setLikesNumber(data.likes.length);
            card.likeCard();
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        api.addLike(data)
          .then((data) => {
            card.isLiked = true;
            card.setLikesNumber(data.likes.length);
            card.likeCard();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
);
  const newCard = card.generateCard();
  return newCard;
}

// функционал изменения данных профиля
const popupEditProfile = new PopupWithForm(
  '.popup_purpose_edit-profile', {
  handleFormSubmit: (inputsData) => {
    api.editUserInfo({ name: inputsData.credentials, about: inputsData.description })
      .then(({ name, about }) => {
        userInfo.setUserInfo({ credentials: name, description: about });
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        profileEditFormfValidator.changeButtonOnSaveChanges();
      });
    }
  }, {
  setSubmitButtonValue: () => {
    profileEditFormfValidator.setDefaultSubmitButtonValue();
    }
  }
);
popupEditProfile.setEventListeners();
const hadleOpenEditPopup = () => {
  popupEditProfile.open();
  profileEditFormfValidator.resetFormCondition();
  const currentData = userInfo.getUserInfo();
  credentialsInput.value = currentData.credentials;
  descriptionInput.value = currentData.description;
}
profileEditPopupOpenButton.addEventListener('click', () => {
  hadleOpenEditPopup();
});

// блок редактирования аватарки
const avatarChangePopup = new PopupWithForm('.popup_purpose_change-avatar', {
  handleFormSubmit: (inputData) => {
    api.changeAvatar({ avatar: inputData.link })
      .then(({ avatar }) => {
        userInfo.setUserAvatar({ link: avatar });
        avatarChangePopup.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        avatarChangePopupValidator.changeButtonOnSaveChanges();
      })
  }
}, {
  setSubmitButtonValue: () => {
    avatarChangePopupValidator.setDefaultSubmitButtonValue();
    }
  }
);
avatarChangePopup.setEventListeners();
const hadleOpenAvatarChangePopup = () => {
  avatarChangePopup.open();
  avatarChangePopupValidator.resetFormCondition();
}
avatarChangeButton.addEventListener('click', () => {
  hadleOpenAvatarChangePopup();
})
