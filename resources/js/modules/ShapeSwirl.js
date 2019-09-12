export default function () {
  const $WRAPPER = document.querySelector('#shape-swirl');
  const $CONTROLLER = $WRAPPER.querySelector('.controller');

  const $INPUT_SWIRL_SIZE = $CONTROLLER.querySelector('.swirl-size');
  const $INPUT_SWIRL_FREQUENCY = $CONTROLLER.querySelector('.swirl-frequency');
  const $INPUT_DIRECTION = $CONTROLLER.querySelector('.direction');
  const $INPUT_PATH_SCALE = $CONTROLLER.querySelector('.path-scale');
  const $INPUT_DEGREE_SHIFT = $CONTROLLER.querySelector('.degree-shift');
  const $INPUTS = [$INPUT_SWIRL_SIZE, $INPUT_SWIRL_FREQUENCY, $INPUT_DIRECTION, $INPUT_PATH_SCALE, $INPUT_DEGREE_SHIFT];

  const $TEXT_SWIRL_SIZE = $CONTROLLER.querySelector('.js-swirl-size');
  const $TEXT_SWIRL_FREQUENCY = $CONTROLLER.querySelector('.js-swirl-frequency');
  const $TEXT_DIRECTION = $CONTROLLER.querySelector('.js-direction');
  const $TEXT_PATH_SCALE = $CONTROLLER.querySelector('.js-path-scale');
  const $TEXT_DEGREE_SHIFT = $CONTROLLER.querySelector('.js-degree-shift');

  const SHAPE_SWIRL = new mojs.ShapeSwirl({
    parent: $WRAPPER,
    fill: '#F64040',
    radius: 30,
    x: 0,
    y: { 0: -150 },
    top: '50%',
    left: '60%',
    duration: 1000
  });

  function update() {
    $TEXT_SWIRL_SIZE.innerHTML = $INPUT_SWIRL_SIZE.value;
    $TEXT_SWIRL_FREQUENCY.innerHTML = $INPUT_SWIRL_FREQUENCY.value;
    $TEXT_DIRECTION.innerHTML = $INPUT_DIRECTION.value;
    $TEXT_PATH_SCALE.innerHTML = $INPUT_PATH_SCALE.value;
    $TEXT_DEGREE_SHIFT.innerHTML = $INPUT_DEGREE_SHIFT.value;
  };

  $INPUTS.forEach($input => {
    $input.addEventListener('input', update);
    $input.addEventListener('change', update);
  });

  $CONTROLLER.addEventListener('click', event => event.stopPropagation());
  $WRAPPER.addEventListener('click', () => {
    SHAPE_SWIRL
      .tune({
        swirlSize: Number($INPUT_SWIRL_SIZE.value),
        swirlFrequency: Number($INPUT_SWIRL_FREQUENCY.value),
        direction: Number($INPUT_DIRECTION.value),
        pathScale: Number($INPUT_PATH_SCALE.value),
        degreeShift: Number($INPUT_DEGREE_SHIFT.value)
      })
      .generate()
      .replay();
  })

  update();
}
