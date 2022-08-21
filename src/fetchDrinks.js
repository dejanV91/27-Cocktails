import {hideLoading} from "./toggleLoading.js";

const fetchDrinks = async (URL) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        hideLoading();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default fetchDrinks;