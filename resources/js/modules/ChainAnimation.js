export default function () {
  new mojs.Shape({
    parent: '#chain-animation',
    shape: 'rect',
    fill: 'none',
    stroke: '#FC46AD',
    radius: 10,
    strokeWidth: 20,
    angle: { [-180]: 0 },
    duration: 900,
    easing: mojs.easing.bounce.out,
  })
    .then({
      strokeWidth: 0,
      scale: 2,
      duration: 800,
      easing: mojs.easing.sin.in,
      onComplete() {
        setTimeout(() => {
          this.replay();
        }, 500)
      }
    })
    .play();
}
