import getElement from "./getElement.js";
import { hiddenLoading } from "./toggleLoading.js";
const displayDrinks = async ({drinks}) => {
    const section = getElement(".products");
    if(!drinks){
        hiddenLoading();
        section.innerHTML = "Sorry, no drinks matched your search"
        return;
    }

    const newDrinks = drinks
        .map((drink) => {
            const  { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
            return `<a class="linkCocktails" href="products.html">
                        <article class="item" data-id="${id}">
                            <div class="imageDiv">
                                <img class="image" src="${image}" alt="${name}">
                            </div>
                        <p class="title">${name}</p>
                        </article> 
                    </a>    
                   `
        }).join("");
        hiddenLoading();
        section.innerHTML = newDrinks;
        return section;
};
export default displayDrinks;
