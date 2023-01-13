export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _check(res) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(this._url + "users/me/", {
      headers: this._headers
    })
    .then(res => this._check(res))
    .catch(err => console.log(err))
  }

  getInitialCards() {
    return fetch(this._url + "cards/", {
      headers: this._headers
    })
    .then(res => this._check(res))
    .catch(err => console.log(err))
  }
}