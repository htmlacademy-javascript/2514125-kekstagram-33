import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';

const NAMES = [
  'Антон',
  'Мария',
  'Анна',
  'Василий',
  'Генадий',
  'Александра',
  'Степан',
  'Злата',
  'Екатерина',
  'Павел'
];

const DESCRIPTIONS = [
  'Вот это класс!',
  'Получилось здорово.',
  'Не могу не поделиться)',
  'КЛАСС!!!',
  'А как у вас дела?',
  'Супер',
  'Кайфую',
  'Круто',
  'Зацените это',
  'Вы должны были это увидеть'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PICTURE_COUNT = 25;
const MIN_VALUE_MESSAGE = 1;
const MAX_VALUE_MESSAGE = 2;
const MIN_VALUE_AVATAR = 1;
const MAX_VALUE_AVATAR = 6;
const MIN_VALUE_LIKES = 15;
const MAX_VALUE_LIKES = 200;
const MIN_VALUE_COMMENTS_LENGTH = 0;
const MAX_VALUE_COMMENTS_LENGTH = 30;

const generateMessage = () => Array.from({length: getRandomInteger(MIN_VALUE_MESSAGE, MAX_VALUE_MESSAGE)}, () => getRandomArrayElement(MESSAGES)).join('');

const createIdComment = createIdGenerator();

const generateComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_VALUE_AVATAR, MAX_VALUE_AVATAR)}.svg`,
  message: generateMessage(),
  name: getRandomArrayElement(NAMES)
});

const createIdPicture = createIdGenerator();
const createIdPhoto = createIdGenerator();

const generatePicture = () => ({
  id: createIdPicture(),
  url: `photos/${createIdPhoto()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_VALUE_LIKES, MAX_VALUE_LIKES),
  comments: Array.from({length: getRandomInteger(MIN_VALUE_COMMENTS_LENGTH, MAX_VALUE_COMMENTS_LENGTH)}, (_, commentIndex) => generateComment(commentIndex)),
});

const getPictures = () => Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => generatePicture(pictureIndex + 1));

export {getPictures};
