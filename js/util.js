// Получение случайного, положительного числа

const getRandomInteger = function (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

// Проверка на повторяющиеся числа

const createRandomIdFromRangeGenerator = function (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max }`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

// Получение случайного элемента из массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Генерация случайного, уникального ID
const createIdGenerator = () => {
  let currentId = 0;

  return () => ++currentId;
};

// Проверка на соответствие ESC

const isEscKey = (evt) => evt.key === 'Escape';

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement, createIdGenerator, isEscKey};
