export default function () {
  const $WRAPPER = document.querySelector('#burst');

  const BURST = new mojs.Burst({
    parent: $WRAPPER,
    left: 0,
    top: 0,
    radius: { 8: 64 },
    angle: { 0: 180 },
    count: 7,
    children: {
      radius: 5,
      fill: ['deeppink', 'cyan', 'yellow'],
      scale: { 1: 0 },
      duration: 1000,
      delay: 'stagger(100)',
      easing: 'quint.out'
    }
  });

  $WRAPPER.addEventListener('click', event => {
    BURST
      .tune({
        x: event.layerX,
        y: event.layerY
      })
      .replay();
  });
}
