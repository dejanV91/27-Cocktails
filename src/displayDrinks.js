import getElement from "./src/getElement.js";
import presentDrinks from "./src/presentDrinks.js";
const products = getElement(".products");

const displayDrinks = async () => {
    products.innerHTML = await presentDrinks();
};

export default displayDrinks();