import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems
  .map((image) => {
    const { preview, original, description } = image;
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryList);

const onSelectedImage = (event) => {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1200">
`);
  instance.show();
};


gallery.addEventListener("click", onSelectedImage);
