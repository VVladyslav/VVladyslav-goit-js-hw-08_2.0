// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/></a>`,
  ''
);
gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
