import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const cardsGalleryMarkup = createMarkupGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', cardsGalleryMarkup);

function createMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
      </a>
      </div>`;
    })
    .join('');
}

galleryEl.addEventListener('click', modalGallery);
const instance = basicLightbox.create(`<img class="modal-img" src="">`, {
  onShow: instance => {
    window.addEventListener('keydown', onEscPress);
  },

  onClose: instance => {
    window.removeEventListener('keydown', onEscPress);
  },
});
function modalGallery(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  instance.element().querySelector('img').src = evt.target.dataset.source;
  instance.show();
}
function onEscPress(evt) {
  if (evt.code === 'Escape') {
    instance.close();
    return;
  }
}
