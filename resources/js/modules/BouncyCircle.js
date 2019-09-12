export default function () {
  new mojs.Shape({
    parent: '#bouncy-circle',
    shape: 'circle',
    fill: { '#F64040': '#FC46AD' },
    radius: { 20: 80 },
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: 'elastic.inout',
    repeat: 1,
    onComplete() {
      this.replay();
    }
  }).play();
}
