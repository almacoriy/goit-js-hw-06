const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createListImage = (images) => {
  const { url, alt } = images;

  return `
    <li>
      <img class="gallery__image" src="${url}" alt="${alt}">
    </li>
  `;
};

const listImage = images.map(createListImage).join("");
const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
galleryEl.style.display = "flex";
galleryEl.style.listStyle = "none";

galleryEl.insertAdjacentHTML("afterbegin", listImage);

const elements = document.querySelectorAll(".gallery__image");

const addListStyle = () => {
  return document.querySelectorAll(".gallery__image").forEach((element) => {
    element.style.maxWidth = "400px";
    element.style.height = "100%";
  });
};

addListStyle();
