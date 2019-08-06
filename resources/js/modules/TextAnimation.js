export default function () {
  const DURATION = 300;

  const COMMON_OPTIONS = {
    parent: '#text-animation',
    left: '50%',
    top: '50%',
    fill: 'none',
    radius: 23,
    isShowEnd: true,
    isForce3d: true
  }

  /**
   * M
   */
  const CHAR_1 = new mojs.Shape({
    ...COMMON_OPTIONS,
    x: { '-300': '-200' },
    scaleX: { 1: 3 },
    duration: DURATION,
    easing: 'quad.in',
  })
    .then({
      x: -100,
      scaleX: 1,
      duration: DURATION / 2,
      easing: 'quad.out',
    });
  const CHAR_EL_1 = document.createElement('div');
  CHAR_EL_1.classList.add('character');
  CHAR_1.el.appendChild(CHAR_EL_1);
  CHAR_EL_1.innerHTML = 'M';

  /**
   * O
   */
  const CHAR_2 = new mojs.Shape({
    ...COMMON_OPTIONS,
    x: -20,
    y: { '300': '150' },
    scaleY: { 1: 3 },
    duration: DURATION,
    easing: 'quad.in',
    delay: 100
  })
    .then({
      y: 0,
      scaleY: 1,
      duration: DURATION / 2,
      easing: 'quad.out',
    });
  const CHAR_EL_2 = document.createElement('div');
  CHAR_EL_2.classList.add('character');
  CHAR_2.el.appendChild(CHAR_EL_2);
  CHAR_EL_2.innerHTML = 'O';

  /**
   * J
   */
  const CHAR_3 = new mojs.Shape({
    ...COMMON_OPTIONS,
    x: 40,
    y: { '-300': '-150' },
    scaleY: { 1: 3 },
    duration: DURATION,
    easing: 'quad.in',
    delay: 200
  })
    .then({
      y: 0,
      scaleY: 1,
      duration: DURATION / 2,
      easing: 'quad.out',
    });
  const CHAR_EL_3 = document.createElement('div');
  CHAR_EL_3.classList.add('character');
  CHAR_3.el.appendChild(CHAR_EL_3);
  CHAR_EL_3.innerHTML = 'J';

  /**
   * S
   */
  const CHAR_4 = new mojs.Shape({
    ...COMMON_OPTIONS,
    x: { '300': '200' },
    scaleX: { 1: 3 },
    duration: DURATION,
    easing: 'quad.in',
    delay: 300
  })
    .then({
      x: 100,
      scaleX: 1,
      duration: DURATION / 2,
      easing: 'quad.out',
    });
  const CHAR_EL_4 = document.createElement('div');
  CHAR_EL_4.classList.add('character');
  CHAR_4.el.appendChild(CHAR_EL_4);
  CHAR_EL_4.innerHTML = 'S';

  const TIMELINE = new mojs.Timeline({
    onComplete() {
      setTimeout(() => {
        this.replay();
      }, 500)
    }
  });
  TIMELINE.add(CHAR_1, CHAR_2, CHAR_3, CHAR_4);
  TIMELINE.play();
}
