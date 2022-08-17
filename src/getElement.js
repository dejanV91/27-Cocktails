const getElement = (selected) => {
    const elem = document.querySelector(selected);
    if (elem) return elem;
    throw new Error("no element selected");
};

export default getElement;