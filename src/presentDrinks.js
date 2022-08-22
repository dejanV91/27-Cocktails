const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

import fetchDrinks from "./fetchDrinks.js";

const presentDrinks = async () => {
    const data = await fetchDrinks(URL);    
    const drinks = data.drinks;
    
    const listDrinks = drinks
        .map((item) => {
            const {strDrinkThumb: image, strDrink: name, idDrink: id} = item;
            if (!item) return;
            return `
                    <article class="item">
                        <a class="linkCocktails" >
                            <div class="imageDiv" data-id=${id}>
                                <img class="image" src="${image}" alt="${name}">
                            </div>
                        </a>
                        <p class="title">${name}</p>
                    </article> 
                    `;
        }).join("");
    return listDrinks;
};

export default presentDrinks;

