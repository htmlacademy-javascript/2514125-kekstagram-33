import { isEscKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentsCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const closeModalButton = document.querySelector('.big-picture__cancel');
const bigPictureClass = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPicturesCaption = bigPicture.querySelector('.social__caption');

const onDocumentKeydown = (evt) => {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const closeUserModal = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

const createBigPicutersComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = message;

  comment.appendChild(img);
  comment.appendChild(p);

  return comment;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = createBigPicutersComment(comment);
    fragment.appendChild(commentElement);
  });

  commentsList.appendChild(fragment);
};

const renderBigPictureDetails = ({url, description, likes}) => {
  bigPictureClass.src = url;
  bigPictureClass.alt = description;
  bigPictureLikes.textContent = likes;
  bigPicturesCaption.textContent = description;

};

const openUserModal = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-opem');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  renderBigPictureDetails(data);
  renderComments(data.comments);

  document.addEventListener('keydown', onDocumentKeydown);
};

closeModalButton.addEventListener('click', () => {
  closeUserModal();
});

export { openUserModal };
