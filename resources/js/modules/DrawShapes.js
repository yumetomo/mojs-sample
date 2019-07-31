export default function () {
  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'circle',
    radius: 10,
    top: '25%',
    left: '25%',
    fill: 'deeppink',
    isShowStart: true,
  });

  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'rect',
    radius: 15,
    top: '25%',
    left: '50%',
    fill: 'cyan',
    isShowStart: true,
  });

  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'polygon',
    radiusX: 10,
    radiusY: 20,
    top: '25%',
    left: '75%',
    fill: 'yellow',
    isShowStart: true,
  });

  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'zigzag',
    points: 11,
    radius: 25,
    radiusY: 50,
    top: '75%',
    left: '25%',
    fill: 'none',
    stroke: 'deeppink',
    isShowStart: true,
  });

  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'curve',
    points: 11,
    radius: 25,
    radiusY: 50,
    scaleY: 1,
    top: '75%',
    left: '50%',
    fill: 'none',
    stroke: 'cyan',
    isShowStart: true,
  });

  new mojs.Shape({
    parent: '#draw-shapes',
    shape: 'cross',
    points: 11,
    radius: 25,
    radiusX: 50,
    top: '75%',
    left: '75%',
    fill: 'none',
    stroke: 'yellow',
    isShowStart: true,
    y: -25,
  });
}
