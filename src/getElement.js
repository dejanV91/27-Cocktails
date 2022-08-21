const getElement = (selected) => {
    const elem = document.querySelector(selected);
    if (elem) {
        return elem;
    }
    throw new Error("element didn't find");
};

export default getElement;