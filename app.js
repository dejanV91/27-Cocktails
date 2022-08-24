const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

import displayDrinks from "./src/displayDrinks.js";
import getElement from "./src/getElement.js";
// import presentDrinks from "./src/presentDrinks.js";
const products = getElement(".products");
const search = getElement(".search");
// display all cocktails
const display = async (url) => {
    try {
        const data = await displayDrinks(url);
        products.innerHTML = data;
    } catch (error) {
        products.innerHTML = "Empty";
    }
    products.addEventListener("click", (e)=>{
        const imgDiv = e.target.parentNode;
        if (imgDiv.classList.contains("imageDiv")) {
            const id = imgDiv.dataset.id;
            localStorage.setItem("drink",id);
        }
        
    });
};

display(URL);

// search 
search.addEventListener("keyup", () => {
    const value = search.value;
    if (value) {
        display(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`);
    }
    else display(URL);
    
});

