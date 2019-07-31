export default function () {
  const SHAPE = new mojs.Shape({
    parent: '#bouncy-circle',
    shape: 'circle',
    fill: { '#F64040': '#FC46AD' },
    radius: { 20: 80 },
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: 'elastic.inout',
    repeat: 1,
    onRepeatComplete(isForward, isYoyo) {
      if (isYoyo) this.replay();
    }
  });

  SHAPE.play();
}
