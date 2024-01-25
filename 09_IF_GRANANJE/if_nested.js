//Zadatak 12
let br1 = 10;
let br2 = 16;

if(br1 > br2) {
    console.log(`Veci broj je ${br1}, a manji broj je ${br2}`);

    //Ispitujemo da li je veci broj deljiv sa dva, tj. da li je paran
    if(br1%2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log(`Veci broj nije paran`);
    }

    // Ispitujemo da li je manji broj deljiv sa tri
    if(br2%3 == 0) {
        console.log(`Manji broj je deljiv sa tri`);
    } else {
        console.log(`Manji broj nije deljiv sa tri`);
    }
} else {
    console.log(`Veci broj je ${br2}, a manji broj je ${br1}`);

    //Ispitujemo da li je veci broj deljiv sa dva, tj. da li je paran
    if(br2%2 == 0) {
        console.log(`Veci broj je paran`);
    } else {
        console.log(`Veci broj nije paran`);
    }

    // Ispitujemo da li je manji broj deljiv sa tri
    if(br1%3 == 0) {
        console.log(`Manji broj je deljiv sa tri`);
    } else {
        console.log(`Manji broj nije deljiv sa tri`);
    }
}

/*DRUGI NACIN
let br1 = 12;
let br2 = 14;
let veci = Math.max(br1,br2)
let manji = Math.min(br1,br2);
if (veci % 2 === 0 ) {
    console.log(`Veci broj je deljiv sa 2`);
} else console.log(`Veci broj nije deljiv sa 2`);
if(manji % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
} else {
    console.log(`Manji broj nije deljiv sa 3`);
 }

*/

//TRECI NACIN
/*br1 = 15;
br2 = 19;
let veci = br1;

if(br2 > veci) {
    veci = br2
}
let manji = br1 + br2 - veci;

if(veci % 2 == 0) {
    console.log(`Veci broj je deljiv sa dva`);
} else {
    console.log(`Veci broj nije deljiv sa dva`);
}

if(manji % 3 == 0) {
     console.log(`Manji broj je deljiv sa 3`);
} else {
     console.log(`Manji broj nije deljiv sa tri`);
}*/

 //Zadatak 13
let dan1 = 10;
let mesec1 = 10;
let godina1 = 2017;

let dan2 = 10;
let mesec2 = 10;
let godina2 = 2017;

if(godina1 < godina2){
    console.log("Raniji datum je " + dan1 + "." + mesec1 + "." + godina1 + ".");
    } else if (godina2 < godina1){
        console.log("Raniji datum je " + dan2 + "." + mesec2 + "." + godina2 + ".");
    }else if(godina1 == godina2){
        if(mesec1 < mesec2){
            console.log("Raniji datum je " + dan1 + "." + mesec1 + "." + godina1 + ".");
        } else if (mesec2 < mesec1){
            console.log("Raniji datum je " + dan2 + "." + mesec2 + "." + godina2 + ".");
        } else if(mesec1 == mesec2){
            if(dan1 < dan2){
                console.log("Raniji datum je " + dan1 + "." + mesec1 + "." + godina1 + ".");
            } else if(dan2 < dan1){
                console.log("Raniji datum je " + dan2 + "." + mesec2 + "." + godina2 + ".");
            } else {
                console.log(`Datumi su isti`);
            }
            
        }
    } else {
        console.log("Raniji datum je " + dan2 + "." + mesec2 + "." + godina2 + ".");
}

//Zadatak 14
let pol = "m";
let godine = 18;

if(pol == "z"){
    if(godine >= 18){
        console.log(`Korisnik je zenskog pola i punoletan je`);
    } else {
        console.log(`Korisnik je zenskog pola i maloletan je`);
    }
} else if(pol == "m"){
    if(godine >= 18){
        console.log(`Korisnik je muskog pola i punoletan je`);
    } else {
        console.log(`Korisnik je muskog pola i maloletan je`);
    }
}
