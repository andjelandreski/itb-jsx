/*function generateList(parent) {
    let lista = document.createElement("ul");
    parent.appendChild(lista);
    FALILO TI JE RETURN
}

function generateListItem(parent, src) {
    let li = document.createElement("li");
    li.textContent = `${src}`;
    parent.appendChild(li);
}

export { generateList, generateListItem };*/

import generateImage from "./general.js";

let generateList = parent => {
    let ul = document.createElement("ul");
    ul.style.listStyle = "none";
    parent.append(ul);
    return ul;
}

let generateItem = (parent, src) => {
    let li = document.createElement("li");
    parent.append(li);
    let img = generateImage(src);
    li.append(img);
    return li;
}

export { generateList, generateItem };