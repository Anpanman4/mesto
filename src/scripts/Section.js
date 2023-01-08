export default class Section {
  constructor({items, renderer}, itemSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(itemSelector);
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderer() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    })
  }
}