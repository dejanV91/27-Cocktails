import fetchDrinkSingle from "./fetchDrinkSingle.js";
import getElement from "./getElement.js";


const presentSingleProduct = async () => {
    const id = localStorage.getItem("drink");
    const singleDrink = await fetchDrinkSingle(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = singleDrink.drinks[0];
    const {strDrinkThumb : image, strDrink : name, strInstructions : desc} = data;
    const list = [
        data.strIngredient1,
        data.strIngredient2,
        data.strIngredient3,
        data.strIngredient4,
        data.strIngredient5
    ];
    const imgSingle = getElement("#img-single");
    const titleSingle = getElement(".single-title");
    const decription = getElement(".single-p");
    const listDiv = getElement(".single-text");

    imgSingle.src = image;
    titleSingle.textContent = name;
    decription.textContent = desc;
    listDiv.innerHTML = list
        .map((item) => {
            if (item) {
               return `<div class="single-check">
                            <span class="material-symbols-outlined">check_box</span>
                            <p class="text">${item}</p>
                        </div>`
            }
        }).join("");

};

export default presentSingleProduct;