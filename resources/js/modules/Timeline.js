export default function () {
  const CIRCLE = new mojs.Shape({
    parent: '#timeline',
    shape: 'circle',
    radius: 30,
    scale: { 0: 1 },
    fill: 'none',
    stroke: 'deeppink',
    strokeWidth: { 30: 0 },
    x: 'rand(-50, 50)',
    y: 'rand(-50, 50)',
    duration: 300,
    onComplete() {
      this.generate();
    }
  });

  const RECT = new mojs.Shape({
    parent: '#timeline',
    shape: 'rect',
    radius: 30,
    scale: { 0: 1 },
    fill: 'none',
    stroke: 'cyan',
    strokeWidth: { 30: 0 },
    x: 'rand(-50, 50)',
    y: 'rand(-50, 50)',
    delay: 150,
    duration: 300,
    onComplete() {
      this.generate();
    }
  });

  const POLYGON = new mojs.Shape({
    parent: '#timeline',
    shape: 'polygon',
    radius: 30,
    points: 5,
    scale: { 0: 1 },
    fill: 'none',
    stroke: 'yellow',
    strokeWidth: { 30: 0 },
    x: 'rand(-50, 50)',
    y: 'rand(-50, 50)',
    delay: 300,
    duration: 300,
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
  TIMELINE.add(CIRCLE, RECT, POLYGON);

  TIMELINE.play();
}
