// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryParentEl = document.querySelector('.gallery');

const murkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div>
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
      </div>`
  )
  .join('');

galleryParentEl.insertAdjacentHTML('beforeend', murkup);

galleryParentEl.addEventListener('click', onClickGalleryElements);

function onClickGalleryElements(event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
