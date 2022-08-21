const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

import fetchDrinks from "./src/fetchDrinks.js";
import getElement from "./src/getElement.js";

const products = getElement(".products");
console.log(products);

const presentDrinks = async () => {
    const data = await fetchDrinks(URL);    
    const drinks = data.drinks;
    
    const listDrinks = drinks
        .map((item) => {
            const {strDrinkThumb: image, strDrink: name, idDrink: id} = item;
            if (item) return;
            return `<a class="linkCocktails" href="products.html" data-id=${id}>
                        <article class="item">
                            <div class="imageDiv">
                                <img class="image" src="${image}" alt="${name}">
                            </div>
                            <p class="title">${name}</p>
                        </article> 
                    </a>`;
        }).join("");
    products.innerHTML = listDrinks();
};

presentDrinks();

