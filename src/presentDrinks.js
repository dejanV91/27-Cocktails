
import fetchDrinks from "./fetchDrinks.js";

const presentDrinks = async (url) => {
    const data = await fetchDrinks(url);    
    const drinks = data.drinks;
    const listDrinks = drinks
        .map((item) => {
            const {strDrinkThumb: image, strDrink: name, idDrink: id} = item;
            if (!item) return;
            return `
                    <article class="item">
                        <a class="linkCocktails" href="products.html">
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

