// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`

import getElement from "./src/getElement.js";
import presentSingleProduct from "./src/presentSingleProduct.js";

const allCocktails = getElement("#add-to-cart");
allCocktails.addEventListener("click", () => {
    window.location.replace("index.html");
});
presentSingleProduct();

