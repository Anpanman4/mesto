export default class Section {
  constructor({renderer}, itemSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(itemSelector);
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderItems(cards) {
    cards.forEach((item) => {
      this._renderer(item);
    })
  }
}