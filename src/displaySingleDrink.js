
import getElement from "./getElement.js";
const displayDrink = (data) => {
    const drink = data.drinks[0];
    const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
    const list = [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
    ];

    const img = getElement("#img-single");
    const drinkName = getElement(".single-title");
    const description = getElement(".single-p");
    const ingredients = getElement(".single-text");
    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list
        .map((item) => {
            if (!item) return;
            return `<div class="single-check">
                        <span class="material-symbols-outlined">check_box</span>
                        <p class="text">${item}</p>
                    </div>`;
        }).join(" "); 
};

export default displayDrink;