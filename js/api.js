import { makePicturesOnPage } from './thumbnails';
import { createDataErrorMessage } from './result-message-data';
import { createErrorMessage, createSuccessMessage } from './result-message-form.js';


const BASE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = () => fetch(
  `${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    createDataErrorMessage();
  })
  .then((photos) => {
    makePicturesOnPage (photos);
  })
  .catch(() => {
    createDataErrorMessage();
  });

const sendData = (body) => fetch(
  `${BASE_URL}${Route.GET_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      createErrorMessage();
    }
  })
  .catch(() => {
    createErrorMessage();
  });

export {getData, sendData};
