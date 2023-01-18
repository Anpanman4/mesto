export default class UserInfo {
  constructor(name, about, avatar, api) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._api = api;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo(inputValue) {
    if (inputValue.name) {
      this._name.textContent = inputValue.name;
      this._avatar.alt = inputValue.name;
    }
    if (inputValue.about) {
      this._about.textContent = inputValue.about;
    }
  }

  updateUserInfo(body) {
    const response = this._api.updateUserValues(body)
    response
      .then(res => this.setUserInfo(res))
      .catch((err) => console.log(err));
  }

  getUserOwner() {
    return this._owner;
  }

  setUserOwner(owner) {
    this._owner = owner;
  }

  setUserAvatar(data) {
    if (data.avatar) {
      this._avatar.src = data.avatar;
    }
  }

  updateUserAvatar(body) {
    const response = this._api.updateUserAvatar(body)
    response
      .then(res => this.setUserAvatar(res))
      .catch((err) => console.log(err));
  }
}