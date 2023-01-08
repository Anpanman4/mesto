export default class Section {
  constructor({items, renderer}, itemSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(itemSelector);
    console.log('working sec')
  }

  addItem(element) {
    this._container.append(element)
  }

  renderer() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    })
  }
}