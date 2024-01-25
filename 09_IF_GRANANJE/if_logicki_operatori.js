//Zadatak 15
//prvi nacin
let t = -25;

if(t<-15 || t>40) {
    console.log(`Ekstremna temperatura`);
} else { 
    console.log(`Nije ekstremna temperatura`);
}
//drugi nain
if(t>=-15 && t<=40) {
    console.log(`Nije ekstremna temperatura`);
} else {
    console.log(`Ekstremna temperatura`);
}

//Zadatak 16
let datum = new Date();
let godina = datum.getFullYear;

if(godina%4==0 && godina%100!==0 || godina%400==0){
    console.log(`Godina je prestupna`);
} else {
    console.log(`Godina nije prestupna`);
}


//Zadatak 17
let dan = datum.getDay;
let vreme = datum.getTime;

let radniPoc = 9;
let radniKraj = 20;
let vikendPoc = 10;
let vikendKraj = 18;

if(dan==0 || dan==6){
    
    if (vreme>=10 && vreme<18) {
        console.log(`Otvoreno je`);
        document.write("<img src='download.jpg'>");
    } else {
        console.log(`Zatvoreno je`);
        document.write("<img src='zatvorena-vrata.jpg'>")
    }
} else if(vreme>=9 && vreme<20) {
    console.log(`Otvoreno je`);
    document.write("<img src='download.jpg'>");
} else {
    console.log(`Zatvoreno je`);
    document.write("<img src='zatvorena-vrata.jpg'>")
}

//Zadatak 18
// a)
let b1 = 60;
let b2 = 100;
let b3 = 200;

let maks = b1;
if(b2 > maks){
    maks = b2;
} 
if(b3 > maks){
    maks = b3;
}
console.log(`Najveci od brojeva je ${maks}`);

// b)
let maksimum = null;
if(b1 > b2) {
    maksimum = b1;
}
else {
    maksimum = b2;
}
if(maksimum < b3) {
    maksimum = b3;
}

// c) 
if(b1 > b2) {
    if(b1 > b3) {
        console.log(`Najevi je ${b1}`);
    } else {
        console.log(`Najveci je ${b3}`);
    }
} else if (b2 > b3) {
    console.log(`Najveci je ${b2}`);
} else {
    console.log(`Najveci je ${b3}`);
}

// d)
if(b1>b2 && b1>b3){
    console.log(`Najveci operator je ${b1}`);
} else if (b2>b1 && b2>b3){
    console.log(`Najveci operator je ${b2}`);
} else {
    console.log(`Najveci operator je ${b3}`);
}