export default function () {
  const $WRAPPER = document.querySelector('#burst');

  const BURST = new mojs.Burst({
    parent: $WRAPPER,
    left: 0,
    top: 0,
    radius: { 8: 64 },
    angle: { 0: 180 },
    count: 14,
    children: {
      radius: 5,
      fill: '#FD7932',
      scale: { 1: 0 },
      pathScale: [.8, null],
      degreeShift: [13, null],
      duration: [500, 700],
      easing: 'quint.out'
    }
  });

  $WRAPPER.addEventListener('click', event => {
    console.log(event, event.offsetX, event.offsetY);

    BURST
      .tune({
        x: event.layerX,
        y: event.layerY
      })
      .replay();
  })
}
