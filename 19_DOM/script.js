console.log(document); // document je objekat (koren DOM stabla)
console.log(document.body); // body svojstvo document objekta je objekat

let e1 = document.getElementById("p2");
console.log(e1); // (jedinstven) objekat iz DOM stabla

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML kolekcija objekata iz DOM stabla

// Pristup elementima HTML kolekcije
for (let i = 0; i < el2.length; i++) {
    console.log(el2[i]);
}

// HTML kolekcije ne poseduju forEach petlju
// ovo ne moze:
/*
el2.forEach(el => {
    console.log(el);
});
*/
let niz = Array.from(el2);
niz.forEach(el => {
    console.log(el);
});

let el3 = document.getElementsByTagName("img"); // Vraca HTML kolekciju
console.log(el3); 

let el4 = document.getElementsByName("p"); // Vraca NodeList
console.log(el4);
el4.forEach(el => {
    console.log(el);
});
console.log(el4[0]); 

// Array (forEach), HTMLCollection, NodeList (forEach)

let t1 = document.querySelector("#p2");
console.log(t1);

let t2 = document.querySelector(".par"); // Vraca objekat iz DOM stabla
console.log(t2);

let t3 = document.querySelectorAll(".par"); // Vraca NodeList
console.log(t3); 

t3.forEach(el => {
    console.log(el);
});

let t4 = document.querySelectorAll("div p.par, div a.par");
console.log(t4);

let link = document.querySelector("a");
link.innerHTML = "<span style='font-weight: bold'>Novi tekst</span> prvog linka";
//link.href = "https://www.google.com";
link.setAttribute("href", "https://www.google.com");
//link.target = "_blank";
link.setAttribute("target", "_blank");
link.id = "pera";

let linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {
    link.style.color = "red";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    //link.setAttribute('style', 'color: red; font-size: 18px; text-decoration: none;');
});
let div = e1.parentNode;
console.log(div);
console.log(div.childNodes[1]);
console.log(div.lastChild);

div.childNodes.forEach(elem => {
    let tip = elem.nodeName; //nodeName je bas naziv taga
    if(tip != "#tekst"){ //if(tip == "p" || tip == "A")
        console.log(elem);
    }
})

//console.log(link);
/*
//7.
//Selektovati sve paragrafe i u svakom od njih pridodati tekst VAZNO!
let sviparagrafi = document.querySelectorAll("p");
sviparagrafi.forEach( par => {
    par.innerHTML += `VAZNO!!!`;
});
//8.
/*Svim divovima na stranici sa klasom "error", dodati po jedan naslov najvece velicine
sa tekstom GRESKA 
let divE = document.querySelectorAll("div.error"); //Nodlista i moze preko forEach petlje
divE.forEach(div => {
  div.innerHTML += `<h1>GRESKA!</h1>`;
  div.style.color = "red";
});
// 9.
/* Neka je n broj paragrafa u datm dokumentu. U svakom i-tom paragrafu dodati broj i
na kvadrat, za svako i = 1, 2, ...n. 
let paragrafN = document.querySelectorAll('p');
    paragrafN.forEach((e, index) => {
        let kv = (index + 1 ) * (index + 1)
        e.innerHTML += `${index+1}<sup>2</sup> = ${kv}`
});
//10.
/*Svim slikama dodati alternativni tekst
let sveSlike = document.querySelectorAll("img");
sveSlike.forEach( sl => {
   //sl.setAttribute("alt" , "TEKST")
   sl.alt = "Neki TEKST"
});
//11.
/* Svim paragrafima posaviti atribut style tako da bude obojen ljubicastom bojom
let ljubicasti = document.querySelectorAll("p");
ljubicasti.forEach(p => {
    p.style.color = "purple";
}); 

//Poslednji zadatak sa slajda 8
for (let i = 0; i < sviParagrafi.length; i++) {
  if (i % 2 === 1) {
    sviParagrafi[i].style.backgroundColor = "green";
  } else {
    sviParagrafi[i].style.backgroundColor = "red";
  }
} */


///////////////////////////////////////

//Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
//Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
//let linkovi = document.querySelectorAll("a");
let br = 0;
linkovi.forEach (link => {
    link.style.padding = "5px";
    link.style.fontSize = "18px";
    link.style.textDecoration = "none";
    if(br % 2 == 0){
        link.style.backgroundColor = "green";
        link.style.color = "purple";
    } else {
        link.style.backgroundColor = "blue";
        link.style.color = "white";
    }
    br++;
});

//Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
let fotografije = document.querySelectorAll("img");
fotografije.forEach (img => {
    if(img.src.endsWith(".png")){
        img.style.border = "2px solid red";
    }
});
//drugi nacin
document.querySelectorAll(`img[src$=".png"]`).forEach(img => {
    img.style.border = `2px solid green`;
});

//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
linkovi.forEach(link => {
    if(link.target == "_blank"){
        link.target = "_top";
    }
    else {
        link.target = "_blank";
    }
});


