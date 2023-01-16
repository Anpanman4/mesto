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

  updateUserValues(body) {
    return fetch(this._url + "users/me/", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(res => this._check(res))
    .catch(err => console.log('PATCH user', err))
  }

  getInitialCards() {
    return fetch(this._url + "cards/", {
      headers: this._headers
    })
    .then(res => this._check(res))
    .catch(err => console.log('GET cards', err))
  }

  createNewCard(body) {
    return fetch(this._url + "cards/", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body)
    })
    .then(res => this._check(res))
    .then(res => {
      console.log(res)
      return res
    })
    .catch(err => console.log('POST cards', err))
  }

  deleteCard(id) {
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(res => this._check(res))
    .catch(err => console.log('POST cards', err))
  }

  doLike(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
    .then(res => this._check(res))
    .catch(err => console.log('POST cards', err))
  }

  deleteLike(id) {
    return fetch(`${this._url}cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(res => this._check(res))
    .catch(err => console.log('POST cards', err))
  }
}