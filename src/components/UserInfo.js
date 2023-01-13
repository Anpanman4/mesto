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
    this._name.textContent = inputValue.name;
    this._about.textContent = inputValue.about;
    this._avatar.alt = inputValue.name;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}