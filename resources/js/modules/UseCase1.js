export default function () {
  const THUNDER = new mojs.Shape({
    parent: '#use-case-1',
    shape: 'thunder',
    fill: 'none',
    x: '50',
    y: '-100',
    stroke: '#eecd13',
    strokeDasharray: '100%',
    strokeDashoffset: { '300%': '200%' },
    duration: 1000,
    easing: 'quad.out'
  }).then({
    fill: '#eecd13',
    duration: 150
  }).then({
    x: '0',
    y: '0',
    duration: 150,
    easing: 'quad.out',
    // onComplete() {
    //   this.replay();
    // }
  });

  const BURST = new mojs.Burst({
    parent: '#use-case-1',
    radius: { 8: 45 },
    angle: 90,
    count: 6,
    degree: 180,
    y: '50',
    x: '-20',
    children: {
      radius: 10,
      radiusY: 3,
      shape: 'zigzag',
      points: { 3: 10 },
      fill: '#none',
      stroke: '#eecd13',
      scale: { 1: 0 },
      duration: 700,
      easing: 'quint.out',
      delay: 1300,
    }
  });

  // THUNDER.play();
  const TIMELINE = new mojs.Timeline({
    onComplete() {
      setTimeout(() => {
        this.replay();
      }, 500)
    }
  });
  TIMELINE.add(THUNDER, BURST);
  TIMELINE.play();
}
