import { Touch } from './Touch.js';


const CLASS_GROUP = 'TreeView__group';
const CLASS_ITEM = 'TreeView__item';
const CLASS_ITEM_FOLDER = 'TreeView__item--folder';
const CLASS_ITEM_FILE = 'TreeView__item--file';
const CLASS_ITEM_DRAG = 'TreeView__item--drag';
const CLASS_ITEM_DROP = 'TreeView__item--drop';
const CLASS_NAME = 'TreeView__name';
const CLASS_AVATAR = 'Avatar';
const SELECTOR_GROUP = `.${CLASS_GROUP}`;
const SELECTOR_ITEM = `.${CLASS_ITEM}`;
const SELECTOR_ITEM_FOLDER = `.${CLASS_ITEM_FOLDER}`;
const ATTR_DATA_NAME = 'data-name';


export class TreeView extends Touch {
  constructor(element, data) {
    super(element);
    this.data = data;
    this.create();

    this.start = this.start.bind(this);
    this.move = this.move.bind(this);
    this.end = this.end.bind(this);
  }

  create() {
    const group = TreeView.createGroup(this.data);
    this.element.append(group);
  }

  static createGroup(data) {
    const groupElement = document.createElement('ul');
    groupElement.className = CLASS_GROUP;

    for (const itemElement of TreeView.createItems(data)) {
      groupElement.append(itemElement);
    }

    return groupElement;
  }

  static createItem(name, isFolder, children) {
    const itemElement = document.createElement('li');
    const nameElement = document.createElement('span');
    itemElement.className = `${CLASS_ITEM} ${isFolder ? CLASS_ITEM_FOLDER : CLASS_ITEM_FILE}`;
    nameElement.className = CLASS_NAME;
    itemElement.setAttribute(ATTR_DATA_NAME, name);
    nameElement.textContent = name;
    itemElement.append(nameElement);

    if (isFolder) {
      const groupElement = TreeView.createGroup(children);
      itemElement.append(groupElement);
    }

    return itemElement;
  }

  static createItems(data) {
    const children = [];

    if (!data) {
      return children;
    }

    if (typeof data === 'string') {
      children.push(TreeView.createItem(data));
      return children;
    }

    if (Array.isArray(data)) {
      for (const item of data) {
        if (typeof data === 'string') {
          children.push(TreeView.createItem(item));
        } else {
          children.push(...TreeView.createFolders(item));
        }
      }

      return children;
    }

    children.push(...TreeView.createFolders(data));
    return children;
  }

  static createFolders(data) {
    const folders = [];

    for (const [name, children] of Object.entries(data)) {
      folders.push(TreeView.createItem(name, true, children));
    }

    return folders;
  }

  getData() {
    [this.data] = TreeView.getItemsData(this.element);
    return this.data;
  }

  static getItemsData(element) {
    const group = element.querySelector(SELECTOR_GROUP);
    const childrens = [...group.children];
    let folders = null;
    const files = [];

    for (const item of childrens) {
      if (item.classList.contains(CLASS_ITEM_FOLDER)) {
        if (!folders) folders = {};
        const itemsFromFolder = TreeView.getItemsData(item);
        folders[item.getAttribute(ATTR_DATA_NAME)] = itemsFromFolder;
      } else {
        files.push(item.getAttribute(ATTR_DATA_NAME));
      }
    }

    const items = folders ? [folders, ...files] : files;
    return items.length ? items : '';
  }

  start({ target }) {
    const dragItem = target.closest(SELECTOR_ITEM);

    if (!dragItem) return;

    const dragParent = dragItem.parentElement.closest(SELECTOR_ITEM_FOLDER);

    if (!dragParent) return;

    this.props.dragItem = dragItem;
    this.props.dragParent = dragParent;
  }

  move() {
    const {
      dragItem,
      dragParent,
      dropItem,
      clientX,
      clientY,
      avatar,
    } = this.props;

    if (!dragItem) return;

    if (!avatar) {
      this.createAvatar();
    }

    this.transformAvatar();
    this.setDragItemState(true);

    const elementFromPoint = document.elementFromPoint(clientX, clientY);

    if (!elementFromPoint) return;

    const newDropItem = elementFromPoint.closest(SELECTOR_ITEM_FOLDER);

    if (dropItem && newDropItem !== dropItem) {
      this.setDropItemState(false);
      this.props.dropItem = null;
    }

    if (
      !newDropItem ||
      newDropItem === dragItem ||
      dragItem.contains(newDropItem) ||
      newDropItem === dragParent ||
      this.findSameItem(newDropItem)
    ) return;

    this.props.dropItem = newDropItem;
    this.setDropItemState(true);
  }

  end() {
    const { dragItem, dropItem } = this.props;

    if (!dragItem) return;

    this.setDragItemState(false);
    this.removeAvatar();

    if (!dropItem) return;

    this.setDropItemState(false);

    const group = dropItem.querySelector(SELECTOR_GROUP);
    group.append(dragItem);
  }

  findSameItem(dropItem) {
    const { dragItem } = this.props;
    const name = dragItem.getAttribute(ATTR_DATA_NAME);
    const nameSelector = `:scope > ${SELECTOR_GROUP} > [${ATTR_DATA_NAME}="${name}"]`;
    const sameItem = dropItem.querySelector(nameSelector);
    return !!sameItem;
  }

  createAvatar() {
    const { dragItem, pageX, pageY } = this.props;
    const avatar = document.createElement('span');

    document.body.appendChild(avatar);
    avatar.className = CLASS_AVATAR;
    avatar.style.top = `${pageY + 5}px`;
    avatar.style.left = `${pageX + 5}px`;
    avatar.textContent = dragItem.getAttribute(ATTR_DATA_NAME);

    this.props.avatar = avatar;
  }

  removeAvatar() {
    this.props.avatar.remove();
    this.props.avatar = null;
  }

  transformAvatar() {
    const { avatar, shiftX, shiftY } = this.props;
    avatar.style.transform = `translate3d(${shiftX}px,${shiftY}px,0)`;
  }

  setDragItemState(value) {
    const { dragItem } = this.props;
    // TODO: Проверить поддержку
    // dragItem.classList.toggle(CLASS_ITEM_DRAG, value);
    if (value) {
      dragItem.classList.add(CLASS_ITEM_DRAG);
    } else {
      dragItem.classList.remove(CLASS_ITEM_DRAG);
    }
  }

  setDropItemState(value) {
    const { dropItem } = this.props;
    // TODO: Проверить поддержку
    // dropItem.classList.toggle(CLASS_ITEM_DROP, value);
    if (value) {
      dropItem.classList.add(CLASS_ITEM_DROP);
    } else {
      dropItem.classList.remove(CLASS_ITEM_DROP);
    }
  }
}
