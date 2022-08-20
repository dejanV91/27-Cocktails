import fetchDrink from "./fetchDrinks.js"
import displayDrinks from "./displayDrink.js";
import setCocktail from "./setDrink.js";

const shownDrinks = async (URL) => {
    const data = await fetchDrink(URL);
    const section = await displayDrinks(data);
    if (section) {
        setCocktail(section);
    }
}

export default shownDrinks;