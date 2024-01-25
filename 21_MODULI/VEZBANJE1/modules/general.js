/*function generateImage(src) {
    let image = document.createElement("img");
    image.src = src;
    FALILO TI JE RETURN
}

export { generateImage };*/
let generateImage = src => {
    let img = document.createElement("img");
    img.src = src;
    img.alt = "Alternativni tekst";
    img.style.width = "400px";
    return img;
}

export default generateImage;