import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<div class="gallery_item">
            <a class="gallery_link" href="${galleryItem.original}">
                <img class="gallery_image" 
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"/>
            </a>
        </div>`)
    .join(" ");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

