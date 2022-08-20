import getElement from "./getElement.js";
import shownDrinks from "./presentDrinks.js";
const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const search = getElement(".search");
const input = search;

search.addEventListener("keyup", (e) => {
    e.preventDefault();
    const value = input.value;
    if (!value) return;
    shownDrinks(`${baseURL}${value}`);
});
