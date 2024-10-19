//  Функция для проверки длины строки
const lengthString = (string, maxLength) => string.length <= maxLength;

console.log('Проверяем функцию lengthString');
console.log('Тест №1. Ожидаю true, получаю - ', lengthString('проверяемая строка', 20));
console.log('Тест №2. Ожидаю false, получаю - ', lengthString('проверяемая строка', 5));
console.log('Тест №3. Ожидаю true, получаю - ', lengthString('Пять', 5));

// Функция для проверки строки на палиндром
const palindromeString = (string) => {
  const cleanString = string.replaceAll(' ', '').toLowerCase();
  let result = '';

  for (let i = cleanString.length - 1; i >= 0; --i) {
    result += cleanString[i];
  }

  return result === cleanString;
};

console.log('Проверяем функцию palindromeString:');
console.log('Тест №1. Ожидаю true, получаю - ', palindromeString('ДовОд'));
console.log('Тест №2. Ожидаю true, получаю - ', palindromeString('Лёша на полке клопа нашёл '));
console.log('Тест №3. Ожидаю false, получаю - ', palindromeString('Например'));

// Функция  принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
// Это было сложно :(((((
const toNumberString = (string) => {
  const inputString = string.toString();
  let result = '';

  for (let i = 0; i <= inputString.length; ++i) {
    const char = inputString[i];
    if (!isNaN(parseInt(char, 10))) {
      result += char;
    }
  }

  return result ? parseInt(result, 10) : NaN;
};

console.log('Проверяем функцию toNumberString:');
console.log('Тест №1. Ожидаю 2023, получаю - ', toNumberString('2023 год'));
console.log('Тест №2. Ожидаю 2022, получаю - ', toNumberString('ECMAScript 2022'));
console.log('Тест №3. Ожидаю 105, получаю - ', toNumberString('1 кефир, 0.5 батона'));
console.log('Тест №4. Ожидаю 7, получаю - ', toNumberString('агент 007'));
console.log('Тест №6. Ожидаю NaN, получаю - ', toNumberString('а я томат'));
console.log('Тест №7. Ожидаю 2023, получаю - ', toNumberString(2023));
console.log('Тест №8. Ожидаю 1, получаю - ', toNumberString(-1));
console.log('Тест №9. Ожидаю 15, получаю - ', toNumberString(1.5));
