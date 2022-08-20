import shownDrinks from "./src/presentDrinks.js";
import "./src/searchFrom.js";
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
    shownDrinks(URL);
});
