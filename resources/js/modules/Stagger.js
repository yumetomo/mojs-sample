export default function () {
  const STAGGER = mojs.stagger(mojs.Shape);
  const SHAPES = new STAGGER({
    parent: '#stag-sample',
    quantifier: 3,
    shape: ['circle', 'rect', 'polygon'],
    radius: 30,
    scale: { 0: 1 },
    fill: 'none',
    stroke: ['deeppink', 'cyan', 'yellow'],
    strokeWidth: { 30: 0 },
    x: 'rand(-50, 50)',
    y: 'rand(-50, 50)',
    duration: 300,
    delay: 'stagger(150)',
    onComplete() {
      this.generate();
    }
  });

  const TIMELINE = new mojs.Timeline({
    onComplete() {
      setTimeout(() => {
        this.replay();
      }, 500)
    }
  });
  TIMELINE.add(SHAPES);
  TIMELINE.play();
}
