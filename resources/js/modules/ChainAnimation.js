export default function () {
  const CHAIN = new mojs.Shape({
    parent: '#chain-animation',
    shape: 'rect',
    fill: 'none',
    stroke: '#FC46AD',
    radius: 10,
    strokeWidth: 20,
    angle: { '-180': 0 },
    duration: 900,
    easing: 'bounce.out',
  })
  .then({
    strokeWidth: 0,
    scale: 2,
    duration: 800,
    easing: 'sin.in',
    onComplete() {
      this.replay();
    }
  })
  .play();

}
