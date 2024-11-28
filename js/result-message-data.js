const body = document.querySelector('body');
const errorDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');

const createDataErrorMessage = () => {
  const errorDataElement = errorDataTemplate.cloneNode(true);


  body.appendChild(errorDataElement);
  setTimeout(() => {
    closeDataErrorMessage(errorDataElement);
  }, 5000);
};

function closeDataErrorMessage (errorDataElement) {
  body.removeChild(errorDataElement);
}


export {createDataErrorMessage, closeDataErrorMessage};
