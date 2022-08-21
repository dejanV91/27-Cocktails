import fetchDrink from "./src/fetchDrinks2.js";
import displayDrink from "./src/displaySingleDrink.js";
const backButton = document.getElementById("add-to-cart");
const presentDrink = async () => {
    const id = localStorage.getItem("drink");
    if (!id) {
        window.location.replace("index.html");
    } else {
        const drink = await fetchDrink(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            displayDrink(drink);
    };
};
backButton.addEventListener("click", () => {
    window.location.replace("index.html");
});
window.addEventListener("DOMContentLoaded", presentDrink);