import { galleryItems } from './gallery-items.js';
// Change code below this line

// ======= 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

console.log(galleryItems);                            
const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);
const galleryMarkUp = galleryItems.map(({ preview, original, description }) => {
    
   return ` <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        src="${preview}"
        class="gallery__image"
        alt="${description}"
        data-source="${original}"
        />
    </a>
    </div> `

}).join(" ");
// console.log(galleryMarkUp);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkUp);

// ======= 2.Реализация делегирования на div.gallery и получение url большого изображения.
// ======= 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис 
// jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.

// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"></link>
// <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>
// ======= 4. Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// ======= 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


const onClickImage = e => {

    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}"/>`);
    instance.show();

    const closeByEsc = e => {
        if (e.keyCode == 27) {
            console.log('working');
            instance.close();
        }

    }

    document.addEventListener('keydown', closeByEsc, {once: true});
}

galleryRef.addEventListener('click', onClickImage);
