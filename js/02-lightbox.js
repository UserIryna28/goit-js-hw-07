import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainer = document.querySelector(".gallery")
const imgMarcup = createGalleryItems(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', imgMarcup)
// Реалізація делегування на ul.gallery
galleryContainer.addEventListener("click", onGalleryContainerClick)
    

 

function createGalleryItems(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");   
}


function onGalleryContainerClick(evt) {
    // забороняємо перехід на іншу сторінку
    evt.preventDefault(); 
    console.log(evt.target) 
    if (!evt.target.classList.contains("gallery__image")) {
    return;
    }
    console.log(evt.target)
    const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

}






 

