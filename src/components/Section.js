export default class Section {
  constructor({renderer}, itemSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(itemSelector);
  }

  addItemLoading(element) {
    this._container.append(element)
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