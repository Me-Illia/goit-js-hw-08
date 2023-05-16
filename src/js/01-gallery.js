// Add imports above this line
import { galleryItems } from './gallery-items';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class = "gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
    }).join('');
};

galleryContainerRef.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});



console.log(galleryItems);
