export default class UserInfo {
  constructor(name, about, avatar) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
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
}