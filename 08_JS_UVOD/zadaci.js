// Zadatak 1
let sati = 20;
let minuti = 15;

let odPonoci = sati * 60 + minuti;
console.log("Minuta od ponoci: " + odPonoci);
//console.log("Minuta od ponooci: " + (sati * 60 +minuti));

//Zadatak 1.1 - koliko je minuta ostalo do ponoci
let doPonoci = 24 * 60 - odPonoci;
console.log("Minuta do ponoci: " + doPonoci);

//Zadatak 2
odPonoci = 30;  
let sat1 = Math.floor(odPonoci / 60);
let min1 = odPonoci % 60;
console.log(sat1, min1);

//Zadatak 3
let cena = 4000;
let novcanica = 1000;
console.log("Kusur: " + (cena - novcanica));

//Zadatak 6
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDinara = ukupnoEur * kursEur;
console.log(ukupnoDinara);

//Druga konverzija (din -> eur)
//prva konverzija (eur -> dolare uz pomoc din)
let novacDin = 5000;
let novacEur = novacDin / kursEur;
console.log(novacEur);

// Zadatak 7
let brojEur = 100;
let kursDol = 106.79;

let brojDin = brojEur * kursEur;
let brojDol = brojDin / kursDol;
console.log(brojDol);

//Druga konverzija (iz dolara u eure uz pomoc dinara)
/*let ukupnoDolara = 10;
let dolariDin = ukupnoDolara * kursDol;

let konacanBrEur = dolariDin * kursEur;
console.log("Iz dolara u eure uz pomoc dinara: " + konacanBrEur);*/

let noviDol = 120;
let noviDin = noviDol *kursDol;
let noviEur = noviDin / noviDol;

//Zadatak 8
let temperatura = 20;
let farenhajt = temperatura * 1.8 + 32;

console.log("Farenhajt: " + farenhajt);


//obrnuto
//let celzijus = farenhajt / ;
let cel = (temperatura - 32) / 1.8;
console.log("Celzijus: " + cel);


//Zadatak 9
let kelvin = temperatura + 273.15;
console.log("Kelvin: " + kelvin);

//obrnuto zadatak 9

//Zadatak 4
/*let datum = new Date(); //datum je promenljiva koja sadrzzi informacije o trenutnom datumu i vremenu
let god = datum.getFullYear();
let mes = datum.getMonth() + 1;
let dan = datum.getDay();
let dat = datum.getDate();
console.log(god, mes, dat);*/


