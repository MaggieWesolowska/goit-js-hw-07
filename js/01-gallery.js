import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<div class="gallery__item">
            <a class="gallery__link" href="javascript:void(0);" ${galleryItem.original}">
                <img class="gallery__image" 
                    src="${galleryItem.preview}"
                    data-source="${galleryItem.original}"
                    alt="${galleryItem.description}"/>
            </a>
        </div>`)
    .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

// "javascript:void(0);" prevents redirecting to another page

gallery.addEventListener('click', () => {
    selectImage()
    const instance = basicLightbox.create
        (`<img src="${galleryItem.original}">`)
    
instance.show()
});

gallery.addEventListener('click', closeImage);

function selectImage(event){
    if (event.target.nodeName !== "IMAGE") {
        return;
    }
}

function closeImage() {
    gallery.addEventListener("keydown", event => {
        event.code = "Escape"
        if ("keydown" === event.code) {
            return;
        }
    });
};







