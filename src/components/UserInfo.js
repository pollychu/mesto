export default class UserInfo {
  constructor({ userCredentialsSelector, userDescriptionSelector }) {
    this._userCredentials = document.querySelector(userCredentialsSelector);
    this._userDescription = document.querySelector(userDescriptionSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['credentials'] = this._userCredentials.textContent;
    this._userInfo['description'] = this._userDescription.textContent;
    return this._userInfo;
  }

  setUserInfo(formData) {
    this._userCredentials.textContent = formData.credentials;
    this._userDescription.textContent = formData.description;
  }
}
