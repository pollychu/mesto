export default class UserInfo {
  constructor({ userCredentialsSelector, userDescriptionSelector, avatarSelector }) {
    this._userCredentials = document.querySelector(userCredentialsSelector);
    this._userDescription = document.querySelector(userDescriptionSelector);
    this._userAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['credentials'] = this._userCredentials.textContent;
    this._userInfo['description'] = this._userDescription.textContent;

    return this._userInfo;
  }

  setUserInfo({ credentials, description }) {
    this._userCredentials.textContent = credentials;
    this._userDescription.textContent = description;
  }

  setUserAvatar({ link }) {
    this._userAvatar.src = link;
  }
}
