console.log(`funkcije`);

//Funkcija za ispis u konzoli
function zdravo(){
    console.log(`Hello world!`);
}
zdravo(); //Poziv funkcije

///////////////////////////////////////////////////////

//Funkcija za ipsi prosledjenog teksta u konzoli (prosledjuje se 1 parametar)
function ispisiTekst(tekst){
    console.log(tekst);
}
ispisiTekst(`Ovo je neki tekst`);
ispisiTekst(`Ovo je neki drgui tekst`);
let t = `Moj tekst`;
ispisiTekst(t);

/////////////////////////////////////////////////////
//Funkcija kojoj se prosledjuju dva parametra

function imePrezime(ime, prezime, godine){
    console.log(`Ulogovana osoba je ${ime} ${prezime}. Osoba ima ${godine} god.`);
}
imePrezime(`Andjela`, `Andreski`, 25);
let imeOsobe = `Ivan`;
let prezimeOsobe = `Radovic`;
let godineOsobe = 28;
imePrezime(imeOsobe, prezimeOsobe, godineOsobe);

//////////////////////////////////////////////////
//Funckija koja vrsi sabiranje dva broja

function zbir(br1, br2){
    let rezultat = br1 + br2;
    console.log(`${br1} + ${br2} = ${rezultat}`);
}
zbir(16, 21);
let b1 = -10;
let b2 = 20;
zbir(b1, b2);
zbir(5+4, 50);
zbir("Java", "Script");

//////////////////////////////////////////////
//Funkcija koja vraca vrednost

function razlika(umanjenik, umanjilac) {
    let razlikaRezultat = umanjenik - umanjilac;
    return razlikaRezultat;
}
console.log(`Razlika je: ${razlika(60, 45)}`);
let r = razlika(100, 4);
console.log(`Funkcija vraca ${r}`);

let r1 = razlika(6, 3); //r1 = 3
let r2 = razlika(17, 7); //r2 = 10
let r3 = razlika(r1, r2);
console.log(`Promenljiva r2 iznosi ${r3}`);
let r4 =  razlika(razlika(40, 60), razlika(10, 4)); // razlika(-20, 6) = -26
console.log(`Promenljiva r4 iznosi ${r4}`);

////////////////////////////////////////////////
// Funkcija sa vise return-a
function temperaturaVode(temp) {
    if (temp <= 0){
        return `Voda se ledi`;
    } else if(temp >= 100) {
        return `Voda isparava`
    } else {
        return `Voda je u tecnom agregatnom stanju`;
    }
}
console.log(temperaturaVode(-5));
let rezTempVode = temperaturaVode(114);
console.log(rezTempVode);

//DRUGI NACIN
function temperaturaVode1(temp) {
    let tekstZaIspis = "";
    if (temp <= 0){
        tekstZaIspis = `Voda se ledi`;
    } else if(temp >= 100) {
        tekstZaIspis = `Voda isparava`
    } else {
        tekstZaIspis = `Voda je u tecnom agregatnom stanju`;
    }
    return tekstZaIspis;
}
console.log(temperaturaVode1(50));

//TRECI NACIN
function temperaturaVode2(temp) {
    let tekstZaIspis = `Voda je u tecnom agregatnom stanju`;
    if (temp <= 0){
        tekstZaIspis = `Voda se ledi`;
    } else if(temp >= 100) {
        tekstZaIspis = `Voda isparava`
    }
    return tekstZaIspis;
}
console.log(temperaturaVode2(-50));

