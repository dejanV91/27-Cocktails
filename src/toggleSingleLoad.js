import getElement from "./getElement.js";

const loadingDiv = getElement(".loading2");

export const showLoading = () => {
    loadingDiv.classList.remove("hide-loading");
};
export const hideLoading = () => {
    loadingDiv.classList.add("hide-loading");
};