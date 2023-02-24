import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<div class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image" 
                    src="${galleryItem.preview}"
                    data-original="${galleryItem.original}"
                    alt="${galleryItem.description}"/>
            </a>
        </div>`)
    .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

// event.preventDefault() or: <href="javascript:void(0);"> --> both used to prevent redirecting to another page;

gallery.addEventListener('click', (event) => {
    event.preventDefault()
    selectImage(event);
});

function selectImage(event){
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        const instance = basicLightbox.create
        (`<img src="${event.target.dataset.original}">`, {onClose: () => document.removeEventListener("keydown", closeImage)});

        instance.show();

        const closeImage = (event) => {
            if (event.code === "Escape") {
                instance.close();
            }
        }
        document.addEventListener("keydown", closeImage);
    }
}
