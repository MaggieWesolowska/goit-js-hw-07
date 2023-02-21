import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<div class="gallery_item">
            <a class="gallery_link" href="javascript:void(0) ${galleryItem.original}">
                <img class="gallery_image" 
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"/>
            </a>
        </div>`)
    .join(" ");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

// "javascript:void(0);" prevents redirecting to another page

gallery.addEventListener('click', selectImage);

function selectImage(event){
    if (event.target.nodeName !== "Image") {
        return;
    } else {
        return "${galleryItem.original}"; // dataset.source ?
    }
}







