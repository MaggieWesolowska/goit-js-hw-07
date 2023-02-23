import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<a class="gallery__item" href="javascript:void(0);" ${galleryItem.original}">
             <img class="gallery__image" 
                src="${galleryItem.preview}"
                alt="${galleryItem.description}"/>
        </a>`)
    .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', (selectImage) => {
    selectImage.preventDefault();
});

function selectImage(event) {
    if (event.target.tagName !== 'image') {
        return;
    } else {
        var lightbox = new SimpleLightbox('.gallery a', {
            
            
            
            /* options */ });
    }
}