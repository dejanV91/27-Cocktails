// import getElement from "./src/getElement.js";
import presentDrinks from "./presentDrinks.js";
// const products = getElement(".products");

const displayDrinks = async (url) => {
   const data = await presentDrinks(url);
    return data;
};

export default displayDrinks;