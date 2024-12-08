const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;
const TO_DECIMAL_NUMBER = 100;
let currentScale = 100;

const updateScale = (newScaleValue) => {
  currentScale = newScaleValue;
  scaleValue.value = `${currentScale}%`;
  imagePreview.style.transform = `scale(${currentScale / TO_DECIMAL_NUMBER})`;
};

const onSmallerButtonClick = () => {
  if (currentScale > MIN_SCALE) {
    updateScale(currentScale - STEP_SCALE);
  }
};

const onBiggerButtonClick = () => {
  if (currentScale < MAX_SCALE) {
    updateScale(currentScale + STEP_SCALE);
  }
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

