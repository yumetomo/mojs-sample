export default function () {
  class Heart extends mojs.CustomShape {
    getShape() { return '<path d="M92.6 7.4c-10-9.9-26-9.9-35.9 0l-4.4 4.3a3.4 3.4 0 0 1-4.7 0l-4.3-4.3c-10-9.9-26-9.9-35.9 0a25 25 0 0 0 0 35.5l22.4 22.2 13.5 13.4a9.5 9.5 0 0 0 13.4 0L70.2 65 92.6 43a25 25 0 0 0 0-35.5z"/>'; }
    getLength() { return 292.110107421875; }
  }
  mojs.addShape('heart', Heart);

  const FADE_HEART = new mojs.Shape({
    parent: '#custom-shape',
    shape: 'heart',
    fill: 'none',
    stroke: 'red',
    scale: { 0: 1 },
    strokeWidth: { 50: 0 },
    left: '25%',
    duration: 1000,
    onComplete() {
      this.replay();
    }
  });

  const OUTLINE_HEART = new mojs.Shape({
    parent: '#custom-shape',
    shape: 'heart',
    fill: 'none',
    stroke: 'deeppink',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    left: '75%',
    duration: 2000,
    onComplete() {
      this.replay();
    }
  });

  FADE_HEART.play();
  OUTLINE_HEART.play();
}
