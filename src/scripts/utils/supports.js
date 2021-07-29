export const supportTouchEvents = 'ontouchstart' in window;

export const supportPassiveListener = (() => {
  let supportsPassive = false;

  try {
    window.addEventListener('testPassiveListener', null,
      Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line getter-return
        get() {
          supportsPassive = true;
        },
      }),
    );
  // eslint-disable-next-line no-empty
  } catch (err) {}

  return supportsPassive;
})();
