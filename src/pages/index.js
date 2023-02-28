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

// создание нужных инстансов и колбэков для работы с карточками и профилем
const userInfo = new UserInfo({
  userCredentialsSelector: '.profile__credentials',
  userDescriptionSelector: '.profile__description',
  avatarSelector: '.profile__avatar'
});

const popupWithImage = new PopupWithImage('.popup_purpose_show-picture');
popupWithImage.setEventListeners();
const handleCardClick = (data) => {
  popupWithImage.open(data);
}

const popupWithConfirmation = new PopupWithConfirmation(
  '.popup_purpose_confirm-delete', {
    handleFormSubmit: (data, card) => {
      api.deleteCard(data._id)
        .then(() => {
          card.deleteCardOnPage();
      });
      popupWithConfirmation.close();
    }
  }
);

// прописываю универсальную функцию создания карточки
const createNewCard = ({ cardData, userInfo }) => {
  const card = new Card({ cardData }, handleCardClick, '#cards-template', userInfo,
  {
    handleDeleteCard: (data, card) => {
      popupWithConfirmation.setEventListeners(data, card);
      popupWithConfirmation.open();
    }
  },
  {
    handleLikeCard: (data) => {
      card.likeCard();
      if (card.isLiked) {
        api.deleteLike(data._id)
          .then((data) => {
            card.isLiked = false;
            card.setLikesNumber(data.likes.length);
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
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
);
  return card;
}

// загружаю данные с сервера и завожу в профиль
// загружаю инфу - создаю секции тут, чтобы передать юзера в кард
api.getUserInfo()
  .then((user) => {
    userInfo.setUserInfo({ credentials: user.name, description: user.about });
    userInfo.setUserAvatar({ link: user.avatar });

      // отрисовка карточек с сервера
    const cardList = new Section({
      renderer: (item) => {
        const initialCard = createNewCard({ cardData: item, userInfo: user });
        const cardElement = initialCard.generateCard();
        cardList.addItem(cardElement);
      }
    }, '.gallery');
    api.getCardList()
      .then((cards) => {
        cardList.renderItems(cards);
      });

      // отрисовка карточек от юзера
    const userCard = new Section({
      renderer: (item) => {
        const newCard = createNewCard({ cardData: item, userInfo: user });
        const cardElement = newCard.generateCard();
        userCard.addItem(cardElement);
        }
      }, '.gallery');
      //userCard создан выше - поэтому попап создаю тут
      const popupAddCard = new PopupWithForm(
        '.popup_purpose_add-card', {
        handleFormSubmit: (inputsData) => {
          cardAddPopupFormValidator.changeButtonOnSaveChanges();
          const userItems = [];
          api.createCard(inputsData)
            .then((card) => {
              userItems.push(card);
              userCard.renderItems(userItems);
              popupAddCard.close();
            })
            .catch((err) => {
              console.log(err);
            });
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
  })
  .catch((err) => {
    console.log(err);
  });


// изменение данных профиля
const popupEditProfile = new PopupWithForm(
  '.popup_purpose_edit-profile', {
  handleFormSubmit: (inputsData) => {
    profileEditFormfValidator.changeButtonOnSaveChanges();
    api.editUserInfo({ name: inputsData.credentials, about: inputsData.description })
      .then(({ name, about }) => {
        userInfo.setUserInfo({ credentials: name, description: about });
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
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
    avatarChangePopupValidator.changeButtonOnSaveChanges();
    api.changeAvatar({ avatar: inputData.link })
      .then(({ avatar }) => {
        userInfo.setUserAvatar({ link: avatar });
        avatarChangePopup.close();
      })
      .catch((err) => {
        console.log(err);
      });
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
