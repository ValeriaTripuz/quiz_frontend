import { productsBlock, discountPrice } from "./variables.js";

function addProductsToPage(data) {
  data.forEach((item) => {
    productsBlock.innerHTML += `
        <div class="result__item">
        <div class="result__item__img">
        <img class='result__item__img_heart' src="./images/Vector.svg" alt="heart" />
        <img src="${item.image}" alt="product" />
        </div>
        <h3 class="result__item__name">${item.title}</h3>
        <div class="result__item__prices">
          <span class="discount-price">${
            item.oldPrice == null ? "" : item.oldPrice
          }</span>
          <span class="price">${item.price} <span>руб.</span></span>
        </div>
      </div>`;

    const hearts = document.querySelectorAll(".result__item__img_heart");

    hearts.forEach((heart) => {
      heart.addEventListener("click", () => {
        heart.style.filter = "invert(90%)";
      });
    });
  });
}

export default addProductsToPage;
