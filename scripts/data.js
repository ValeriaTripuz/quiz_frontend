import addProductsToPage from "./addProductsToPage.js";

async function getProducts() {
  await fetch("./files/products.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addProductsToPage(data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export default getProducts;
