import {
  supportTouchEvents,
  supportPassiveListener,
} from '../utils/supports.js';


const [EVENT_START, EVENT_MOVE, EVENT_END, EVENT_CANCEL] = supportTouchEvents
  ? ['touchstart', 'touchmove', 'touchend', 'touchcancel']
  : ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
const listenerParams = supportTouchEvents && supportPassiveListener
  ? { passive: false, capture: false }
  : false;


function normalizeEvent(event) {
  return event.changedTouches ? event.changedTouches[0] : event;
}

function getCoordX(event) {
  const { clientX, pageX } = normalizeEvent(event);
  return { clientX, pageX };
}


function getCoordY(event) {
  const { clientY, pageY } = normalizeEvent(event);
  return { clientY, pageY };
}


export class Touch {
  constructor(element) {
    if (!(element instanceof HTMLElement)) {
      throw new TypeError('Element must be an HTMLElement');
    }

    this.element = element;
    this.props = {};

    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);

    this.element.addEventListener(EVENT_START, this.onStart, listenerParams);
    this.element.addEventListener('dragstart', Touch.onDragStart);
  }

  desctructor() {
    this.element.removeEventListener(EVENT_START, this.onStart, listenerParams);
    this.element.removeEventListener('dragstart', Touch.onDragStart);
    this.addEventListeners(false);
  }

  onStart(event) {
    if (event.type === 'mousedown' && event.which !== 1) return;

    this.props = {
      startX: getCoordX(event).clientX,
      startY: getCoordY(event).clientY,
      startTime: +new Date(),
      isPressed: true,
    };

    if (this.start) {
      this.start(event);
    }

    this.addEventListeners(true);
  }

  onMove(event) {
    const {
      startX,
      startY,
      isPressed,
      moveX,
      moveY,
    } = this.props;

    if (!isPressed) return;

    if (!!event.touches && event.touches.length > 1) {
      this.props = {};
      this.addEventListeners(false);
    }

    const { clientX, pageX } = getCoordX(event);
    const { clientY, pageY } = getCoordY(event);
    const shiftX = clientX - startX;
    const shiftY = clientY - startY;
    const absShiftX = Math.abs(shiftX);
    const absShiftY = Math.abs(shiftY);

    if (!moveX && !moveY) {
      this.props.moveX = absShiftX >= 3 && absShiftX > absShiftY;
      this.props.moveY = absShiftY >= 3 && absShiftY > absShiftX;
    }

    if (!this.props.moveX && !this.props.moveY) return;

    this.props.clientX = clientX;
    this.props.clientY = clientY;
    this.props.pageX = pageX;
    this.props.pageY = pageY;
    this.props.shiftX = shiftX;
    this.props.shiftY = shiftY;
    this.props.absShiftX = absShiftX;
    this.props.absShiftY = absShiftY;

    event.preventDefault();

    if (this.move) {
      this.move(event);
    }
  }

  onEnd(event) {
    if (this.props.isPressed && this.end) {
      this.end(event);
    }

    this.props = {};
    this.addEventListeners(false);
  }

  static onDragStart(event) {
    const { target } = event.target;

    if (target.tagName === 'A' || target.tagName === 'IMG') {
      event.preventDefault();
    }
  }

  addEventListeners(add) {
    if (add) {
      document.addEventListener(EVENT_MOVE, this.onMove, listenerParams);
      document.addEventListener(EVENT_END, this.onEnd, listenerParams);
      document.addEventListener(EVENT_CANCEL, this.onEnd, listenerParams);
    } else {
      document.removeEventListener(EVENT_MOVE, this.onMove, listenerParams);
      document.removeEventListener(EVENT_END, this.onEnd, listenerParams);
      document.removeEventListener(EVENT_CANCEL, this.onEnd, listenerParams);
    }
  }
}
