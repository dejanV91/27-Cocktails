import getElement from "./getElement.js";

const loading = getElement(".load");

export const showLoading = () => {
    loading.classList.remove("hide-loading");
};

export const hiddenLoading = () => {
    loading.classList.add("hide-loading");
};