import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<a class="gallery__item" href="${galleryItem.original}">
             <img class="gallery__image" 
                src="${galleryItem.preview}"
                alt="${galleryItem.description}"/>
        </a>`)
    .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captions: true,
    captionPosition: 'bottom',
    captionDelay: 250,
});
