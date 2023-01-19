// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(".gallery");
const markup = galleryItems.reduce(
  (acc, { original, preview, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}"/></a>`,
  ""
);
gallery.insertAdjacentHTML("afterbegin", markup);

let instance = new SimpleLightbox(".gallery.gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});
instance.on(`show.instance`);
