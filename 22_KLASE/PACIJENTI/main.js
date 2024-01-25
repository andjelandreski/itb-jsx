import Pacijent from "./pacijent.js";

let pacijent1 = new Pacijent("Pera Peric", 1.70, 50);
let pacijent2 = new Pacijent("Zika Zikic", 1.80, 85);
let pacijent3 = new Pacijent("Mika Mikic", 2, 300);
let pacijenti = [pacijent1, pacijent2, pacijent3];

pacijenti.forEach(p => {
    p.Stampaj();
});

pacijenti.forEach(p => {
    console.log(p.Bmi());
});

pacijenti.forEach(p => {
    console.log(p.Kritican());
});

//Ispisati podatkle o pacijentu sa najmanjom tezinom
let pacijentSaNajmanjomTezinom = niz => {
    let minTezinaPacijent = niz[0]; // cuva ceo objekat
    let minTezina = minTezinaPacijent.tezina; // cuva samo tezinu

    niz.forEach(p => {
        if(p.tezina < minTezina){
            minTezina = p.tezina;
            minTezinaPacijent = p;
        }
    });
    return minTezinaPacijent;
}
let rez = pacijentSaNajmanjomTezinom(pacijenti);
rez.Stampaj();
//ili ovako:
pacijentSaNajmanjomTezinom(pacijenti).Stampaj();

console.log(`Najveca BMI vrednost:`);
//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let podatkeSaNajvecomBmi = niz => {
    let najveciBmiPacijent = niz[0];
    let najveciBmi = najveciBmiPacijent.Bmi();

    niz.forEach(p => {
        if(p.Bmi() > najveciBmi){
            najveciBmiPacijent = p;
        }
    });
    return najveciBmiPacijent;
}
podatkeSaNajvecomBmi(pacijenti).Stampaj();

//Ispisati sve pacijente čije ime sadrži slovo A.
let sviPacijentiSaSlovomA = niz => {
    let pacijentiA = [];
    niz.forEach(p => {
        if(p.ime.includes("A") || p.ime.includes("a")){
            pacijentiA.push(p.ime);
        }
    });
    return pacijentiA;
}
console.log(sviPacijentiSaSlovomA(pacijenti));
sviPacijentiSaSlovomA(pacijenti);

//Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
    let suma = 0;
    niz.forEach(p => {
        suma += p.visina;
    });
    let srednjaVisinaPacijenata = suma / niz.length;
    return srednjaVisinaPacijenata;
}
console.log(srednjaVisina(pacijenti));