const pictureSection = document.querySelector('.pictures');
const pictureItemTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictures = (({url, description, likes, comments}) => {
  const pictureElement = pictureItemTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
});

const makePicturesOnPage = (pictures) => {
  const picturesListFragment = document.createDocumentFragment();

  pictures.forEach((pictureElement) => {
    const createElement = createPictures(pictureElement);
    picturesListFragment.appendChild(createElement);
  });

  pictureSection.appendChild(picturesListFragment);
};

export { makePicturesOnPage };
