import {makePicturesOnPage} from './thumbnails.js';
import {setUserFormSubmit, hideOverlay} from './form-upload.js';
import './scale-effect.js';
import './fillter-effect.js';
import { getData } from './api.js';
import { createDataErrorMessage } from './result-message-data.js';

const bootstrap = async () => {
  try {
    const photos = await getData();
    makePicturesOnPage(photos);
  } catch (error) {
    createDataErrorMessage(error.message);
  }
};

bootstrap();
setUserFormSubmit(hideOverlay);
