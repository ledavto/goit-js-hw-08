// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

const imgEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-caption="${description}" alt="${description}" />
   </a>
</li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", imgEl);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});