import {makePicturesOnPage} from './thumbnails.js';
import {setUserFormSubmit, hideOverlay} from './form-upload.js';
import './scale-effect.js';
import './fillter-effect.js';
import { getData } from './api.js';
import { createDataErrorMessage } from './result-message-data.js';
import { debounce } from './util.js';
import { filterPictures, applyFilter } from './display-filter.js';
const TIMEOUT = 500;

const bootstrap = async () => {
  try {
    const photos = await getData();
    const debouncedMakePicturesOnPage = debounce(makePicturesOnPage, TIMEOUT);
    applyFilter(photos, debouncedMakePicturesOnPage);
    makePicturesOnPage(filterPictures());
  } catch (error) {
    createDataErrorMessage(error.message);
  }
};

bootstrap();
setUserFormSubmit(hideOverlay);
