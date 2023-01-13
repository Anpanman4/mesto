export default class Section {
  constructor({renderer}, itemSelector, api) {
    this._renderer = renderer;
    this._container = document.querySelector(itemSelector);
    this._api = api;
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderer(cards) {
    cards.forEach((item) => {
      this._renderer(item);
    })
  }
}