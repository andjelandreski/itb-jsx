let paragrafi = document.querySelectorAll("p");

//Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
let br = 0;
paragrafi.forEach(p => {
    if(br % 2 == 0){
        p.classList.add("error");
    } else {
        p.classList.add("success");
    }
    br++;
});

//Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
br = 0;
paragrafi.forEach(p => {
    if(br % 3 == 0){
        p.style.fontSize = "15px";
    } else if (br % 3 == 1){
        p.style.fontSize = "20px";
    } else{
        p.style.fontSize = "25px";
    }
    br++;
});

//Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.
//if(p.textContent.includes(’success’))
paragrafi.forEach(p => {
    if(p.textContent.includes("sunccess")){
        p.classList.add("success");
    }
    if(p.textContent.includes("error")){
        p.classList.add("error");
    }
});


/*Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.
paragrafi.forEach(p => {
    p.classList.toggle('error');
});*/

//DRUGO RESENJE
let paragraf = document.querySelectorAll('p');
paragraf.forEach((p, broj )=> {
    if (broj % 2 == 0){
        p.classList.add('error');
    } else {
        p.classList.add('sucess')
    }
    if (broj % 3 == 0){
        p.style.fontSize = '15px';
    } else if (broj % 3 == 1){
        p.style.fontSize = '25px';
    } else {
        p.style.fontSize = '35px';
    }
    p.style.maxWidth = '50%';
    if (p.textContent.includes('sucess')){
        p.classList.add('sucess');
    } else if (p.textContent.includes('error')){
        p.classList.add('error');
    }
    p.classList.toggle('error'); //poslednji zadatak 
    //ako imaju klasu error skloniti je, ako nemaju klasu error staviti klasu error
});

//Dodati novi div tag u dokumentu
let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u JS-u";
noviDiv.style.backgroundColor = "green";
document.body.append(noviDiv);

let noviNasov = document.createElement("h3");
noviNasov.innerHTML = "Novi naslov";
noviDiv.appendChild(noviNasov);

//Formirati ul listu sa stavkama ciji je sadrzaj prozvoljan tekst, i dodati je div elementu
let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "Treca stavka liste";

lista.append(li1, li2, li3);

//Iz ul liste izbaciti prvu stavku
//lista.removeChild(li1);
//lista.removeChild(lista.firstChild);
lista.removeChild(lista.childNodes[0]);

let li4 = document.createElement("li");
li4.innerHTML = "Cetvrta stavka liste";

lista.replaceChild(li4, li3);

//Dodati jos jednu stavku ul listi, pri cemu je sadrzaj stavke slika
let li5 = document.createElement("li");
lista.appendChild(li5);

let slika = document.createElement("img");
slika.src = "slike/knjiga2.jpg";
slika.alt = "neka slika";
li5.appendChild(slika);