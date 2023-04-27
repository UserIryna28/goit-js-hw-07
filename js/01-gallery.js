import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainer = document.querySelector(".gallery")
const imgMarcup = createGalleryItems(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend',imgMarcup)

function createGalleryItems(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
    
}

galleryContainer.addEventListener("click")

function onGalleryContainer
