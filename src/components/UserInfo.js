export default class UserInfo {
  constructor(name, about, avatar, api) {
    this._name = document.querySelector(name);
    this._about = document.querySelector(about);
    this._avatar = document.querySelector(avatar);
    this._api = api;
  }

  updateUserInfo(body) {
    const response = this._api.updateUserValues(body)
    response
      .then(res => this.setUserInfo(res))
      .catch((err) => console.log(err));
  }

  setUserOwner(owner) {
    this._owner = owner;
  }

  getUserOwner() {
    return this._owner;
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