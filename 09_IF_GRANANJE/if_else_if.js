//Zadatak 8
let datum = new Date();
let sati = datum.getHours();
if(sati < 9) {
    console.log("Firma ne trenutno radi");
} else if (sati >= 17) {
    console.log("Firma trenutno ne radi");
} else {
    console.log("Firma radi");
}

//Zadatak 6
let dan = datum.getDay();
if(dan == 0) {
    console.log("Danas je vikend")
} else if(dan == 5) {
    console.log("Danas je vikend");
} else {
    console.log("Danas je radni dan");
}

//Zadatak 7
if(sati < 12){
    console.log("Dobro jutro");
} else if(sati < 18) {
    console.log("Dobar dan");
} else {
    console.log("Dobro vece");
}

//Zadatak 9 
let p1 = 10;
let k1 = 18;

let p2 = 19;
let k2 = 22;

/*if(lekarKraj2 >= lekarPoc1) {
    console.log("DA");
}
else if(lekarKraj1 >= lekarPoc2){
    console.log("DA");
}
else{
    console.log("NE")
}

ILI: OVO JE JEDNOSTAVNIJE:*/
if(k1 <= p2) {
    console.log("NE");
} else if(k2 <= p1){
    console.log("NE");
}
else{
    console.log("DA");
}

//Zadatak 10
let a = 10;
let b = 11;

if(a > b){
    console.log(++a);
    console.log(--b);
} else if(a < b) {
    console.log(--a);
    console.log(++b);
} else {
    console.log("Brojevi su jednaki");
}

// Zadatak 11
let broj = 12.8;

if(broj % 1 == 0){
    console.log("Ceo broj");
} else {
    console.log("Nije ceo broj");
}
