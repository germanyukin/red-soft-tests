const CLASS_SELECTED_LIST = 'SelectedList';
const CLASS_ITEM = 'SelectedList__item';
const CLASS_ITEM_SELECTED = 'SelectedList__item--selected';
const SELECTOR_SELECTED_LIST = `.${CLASS_SELECTED_LIST}`;
const SELECTOR_ITEM = `.${CLASS_ITEM}`;
const ATTR_DATA_SELECTED = 'data-selected';
const ID_PREFIX = 'selected-list-';

let idCount = 0;


export class SelectedList {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError('Element must be an HTMLElement');
    }

    this.element = element;
    this.currentItem = null;
    this.onClick = this.onClick.bind(this);

    this.initItemIds();

    this.element.addEventListener('click', this.onClick);
  }

  desctructor() {
    this.element.removeEventListener('click', this.onClick);
  }

  onClick({ target, shiftKey, ctrlKey }) {
    const item = target.closest(SELECTOR_ITEM);

    if (!item) {
      this.removeAllSelections();
      return;
    }

    if (shiftKey) {
      this.selectItemsWithShift(item);
    } else if (ctrlKey) {
      this.selectItemsWithCtrl(item);
    } else {
      this.selectItem(item);
    }

    this.sendSelectedIds();
  }

  initItemIds() {
    for (const item of this.getItems()) {
      if (!item.id) {
        item.id = `${ID_PREFIX}${idCount++}`;
      }
    }
  }

  getItems() {
    return [...this.element.querySelectorAll(SELECTOR_ITEM)];
  }

  static isSelected(item) {
    return item.hasAttribute(ATTR_DATA_SELECTED);
  }

  static setSelected(item, value) {
    if (SelectedList.isSelected(item) === value) return;

    if (value) {
      item.setAttribute(ATTR_DATA_SELECTED, true);
      item.classList.add(CLASS_ITEM_SELECTED);
    } else {
      item.removeAttribute(ATTR_DATA_SELECTED);
      item.classList.remove(CLASS_ITEM_SELECTED);
    }
  }

  removeAllSelections() {
    for (const item of this.getItems()) {
      SelectedList.setSelected(item, false);
    }
  }

  selectItemsWithShift(item) {
    if (!this.currentItem) {
      this.selectItem(item);
      return;
    }

    const items = this.getItems();
    const targetIndex = items.indexOf(item);
    const currentIndex = items.indexOf(this.currentItem);
    const from = Math.min(targetIndex, currentIndex);
    const to = Math.max(targetIndex, currentIndex);

    items.forEach((elem, i) => {
      SelectedList.setSelected(elem, i >= from && i <= to);
    });
  }

  selectItemsWithCtrl(item) {
    SelectedList.setSelected(item, !SelectedList.isSelected(item));
    this.currentItem = item;
  }

  selectItem(item) {
    for (const elem of this.getItems()) {
      SelectedList.setSelected(elem, elem === item);
    }

    this.currentItem = item;
  }

  sendSelectedIds() {
    // eslint-disable-next-line no-console
    console.log(
      this.getItems()
        .filter((item) => SelectedList.isSelected(item))
        .map(({ id }) => id),
    );
  }
}


const instancesMap = new WeakMap();


export function init() {
  const elements = document.querySelectorAll(SELECTOR_SELECTED_LIST);

  for (const element of elements) {
    instancesMap.set(element, new SelectedList(element));
  }
}


export function getInstance(element) {
  return instancesMap.get(element);
}
