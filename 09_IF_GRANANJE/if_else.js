let a = 3;
let b = 5;

if(a > b) {
    console.log("a je vece od b");
}
else {
    console.log("a nije vece od b");
}

//Zadatak 1
let zapremina = 70;
if(zapremina <= 100){
    document.write("<p style='color: green'>Pack up</p>");
}
else {
    document.write("<p style='color: red'>Throw away</p>")
}

//Zadatak 3

/*let godina = 2023;
let godRodjenja = 2007;

if(godina - godRodjenja >= 18) {
    document.write("<img src='114.png'>");
}
else {
    document.write(godina - godRodjenja)
}*/

//Zadatak 3 rad profesorke
let datum = new Date();
let godina = datum.getFullYear();
let godRodj = 2008;
let imaGodina = godina - godRodj;
if(imaGodina == 18) {
    console.log("osoba postaje punoletna");
    document.write("<img src='114.png'>");
}
if (imaGodina < 18) {
    console.log("osoba ne postaje punoletna");
    let ostalo_do_punoletstva = 18 - imaGodina;
    document.write(`<p>Do punoletstva ostalo je ${ostalo_do_punoletstva} godina</p>`);
}

//Zadatak 2
let t = 15;
if(t >= 0) {
    let paragraf = document.getElementById('temperatura'); //Preuzmem paragraf iz html-a po njegovom id-u
    paragraf.innerHTML = `Temperatura je u plusu`; //upisem u paragraf preko .innerHTML
    paragraf.style.color = `red`;
} else {
    let paragraf = document.getElementById(`temperatura`);
    paragraf.innerHTML = `temperatura je u minusu`;
    paragraf.style.color = `blue`;
}

//Zadatak 4
let trenutnoVreme = datum.getHours();

if(trenutnoVreme >= 12){
    console.log("Popodne je");
}
else {
    console.log("Jutro je");
}

