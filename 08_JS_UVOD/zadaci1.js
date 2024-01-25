//Zadatak 1
let sati = 1;
let minuti = 10;

let odPonoci = sati * 60 + minuti;
console.log(odPonoci);

//Zadatak 2
let sat1 = Math.floor(odPonoci / 60);
let min1 = odPonoci % 60;
console.log(sat1, min1);

//Zadatak 3
let roba = 3000;
let novcanica = 5000;

let kusur = novcanica - roba;
console.log("Kusur: " + kusur);

//Zadatak 4
 let datum = new Date();
 let sati4 = datum.getHours();
 let minuti4 = datum.getMinutes();

 let minutaOdPonoci = sati4 * 60 + minuti4;
 console.log(minutaOdPonoci);

 //Zadatak 5
 let dan = datum.getDate();
 let mesec = datum.getMonth() + 1;
 let godina = datum.getFullYear();

 console.log(dan + "." + mesec + "." + godina + ".");
 console.log(godina + "/" + mesec + "/" + dan + ".");

 //Zadatak 6
 let sumaEuro = 100;
 let kursEuro = 117.3;

 let ukupnoDinara = sumaEuro * kursEuro;
 console.log(ukupnoDinara);

 let sumaDinari = 5000;
 let ukupnoEur = sumaDinari / kursEuro;
 console.log(ukupnoEur);

 //Zadatak 7
 let kursDol = 106.79;

 let ukupnoDolara = sumaEuro * kursEuro / kursDol;
 console.log(ukupnoDolara);

 let noviDol = 100;
 let noviDin = noviDol * kursDol;
 let noviEur = noviDin / kursEuro;

 console.log(noviEur);

 //Zadatak 8
 let celzijus = 20;
 let farenhajt = celzijus * 1.8 + 32;

 console.log(farenhajt);

 let noviFarenhajt = 68;
 let noviCelzijus = (noviFarenhajt - 32) / 1.8;
 console.log(noviCelzijus);

 //Zadatak 9 
 let celzijus9 = 20;
 let kelvin = celzijus9 + 273.15;
 console.log(kelvin);

 let noviKelvin = 293.15;
 let noviCelzijus9 = noviKelvin - 273.15;

 console.log(noviCelzijus9);