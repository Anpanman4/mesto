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

  getUserValues() {
    return fetch(this._url + "users/me/", {
      headers: this._headers
    })
    .then(res => this._check(res))
    .catch(err => console.log('GET user', err))
  }

  getInitialCards() {
    return fetch(this._url + "cards/", {
      headers: this._headers
    })
    .then(res => this._check(res))
    .catch(err => console.log('GET cards', err))
  }

  updateUserValues(body) {
    return fetch(this._url + "users/me/", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(res => this._check(res))
    .catch(err => console.log('PATCH user', err))
  }
}