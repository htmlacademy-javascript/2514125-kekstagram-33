import { isEscKey } from './util';
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

const onDocumentKeydown = (evt, errorMesageElement) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeErrorMessage(errorMesageElement);
  }
};

function closeErrorMessage (errorMesageElement) {
  body.removeChild(errorMesageElement);
  document.removeEventListener('keydown', (evt) => onDocumentKeydown(evt, errorMesageElement));
  errorMesageElement.removeEventListener('click', (event) => {
    if (event.target === errorMesageElement) {
      closeErrorMessage(errorMesageElement);
    }
  });
}

const createErrorMessage = () => {
  const errorMesageElement = errorTemplate.cloneNode(true);
  const errorButton = errorMesageElement.querySelector('.error__button');


  body.appendChild(errorMesageElement);
  errorButton.addEventListener('click', () => closeErrorMessage(errorMesageElement));
  document.addEventListener('keydown', (evt) => onDocumentKeydown(evt, errorMesageElement));
  errorMesageElement.addEventListener('click', (event) => {
    if (event.target === errorMesageElement) {
      closeErrorMessage(errorMesageElement);
    }
  });
};

function closeSuccessMesage (successMesageElement) {
  body.removeChild(successMesageElement);
  document.removeEventListener('keydown', (evt) => onDocumentKeydown(evt, successMesageElement));
  successMesageElement.removeEventListener('click', (event) => {
    if (event.target === successMesageElement) {
      closeSuccessMesage(successMesageElement);
    }
  });
}

const createSuccessMessage = () => {
  const successMesageElement = successTemplate.cloneNode(true);
  const successButton = successMesageElement.querySelector('.success__button');

  body.appendChild(successMesageElement);
  successButton.addEventListener('click', () => closeSuccessMesage(successMesageElement));
  document.addEventListener('keydown', (evt) => onDocumentKeydown(evt, successMesageElement));
  successMesageElement.addEventListener('click', (event) => {
    if (event.target === successMesageElement) {
      closeSuccessMesage(successMesageElement);
    }
  });
};

export {createErrorMessage, closeErrorMessage, createSuccessMessage, closeSuccessMesage};
