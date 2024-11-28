import {setUserFormSubmit, hideOverlay}from './form-upload.js';
import './scale-effect.js';
import './fillter-effect.js';
import { getData } from './api.js';

getData();
setUserFormSubmit(hideOverlay);
