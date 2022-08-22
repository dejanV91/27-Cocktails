const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

import getElement from "./src/getElement.js";
import presentDrinks from "./src/presentDrinks.js";
const products = getElement(".products");

const displayDrinks = async () => {
    products.innerHTML = await presentDrinks();
    products.addEventListener("click", (e)=>{
        const imgDiv = e.target.parentNode;
        if (imgDiv.classList.contains("imageDiv")) {
            const id = imgDiv.dataset.id;
            localStorage.setItem("drink",id);
        }
        
    });
};

displayDrinks();