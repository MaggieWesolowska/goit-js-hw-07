import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
    .map(galleryItem => 
        `<a class="gallery__item" href= ${galleryItem.original}">
             <img class="gallery__image" 
                src="${galleryItem.preview}"
                alt="${galleryItem.description}"/>
        </a>`)
    .join("");

console.log(markup);

gallery.insertAdjacentHTML("afterbegin", markup);

gallery.addEventListener('click', (event) => {
    event.target.preventDefault();
    selectImage()
});

let lightbox = new SimpleLightbox('.gallery__item img', {
    overlay: true,
    overlayOpacity: 0.7,
    spinner: true,
    nav: true,
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'original',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionClass: 'gallery__caption',
    close: true,
    closeText: 'x',
    swipeClose: true,
    showCounter: false,
    animationSpeed: 250,
    animationSlide: true,
    preloading: true,
    enableKeyboard: true,
    loop: true,
    rel: false,
    docClose: true,
    className: 'simple-lightbox',
    widthRatio: 0.8,
    heightRatio: 0.9,
    throttleInterval: 1,
    doubleTapZoom: 2,
    fadeSpeed: 300,
    focus: true,
});


function selectImage(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    } else {
        return lightbox;
}
}
