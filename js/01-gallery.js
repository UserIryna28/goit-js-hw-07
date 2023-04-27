import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems)
// 1.Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryContainer = document.querySelector(".gallery")
const imgMarcup = createGalleryItems(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', imgMarcup)
// Реалізація делегування на ul.gallery
galleryContainer.addEventListener("click", function (onGalleryContainerClick) {
    // заборонити перехід на іншу сторінку
onGalleryContainerClick.preventDefault();  
}
 
    
    

)
function createGalleryItems(galleryItems) {
    return galleryItems
    .map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
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

function onGalleryContainerClick(evt) {
    console.log(evt.target) 
    if (!evt.target.classList.contains("gallery__link")) {
    return;
    }
    console.log(evt.target)

}

const instance = basicLightbox.create (`
    <img width="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg" width="1280" height="auto">`

)
instance.show()




 

