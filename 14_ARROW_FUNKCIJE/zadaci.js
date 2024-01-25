// Zadatak 3
// Varijanta 1

/*if(true){
    let x = 6;
}

function neparan(n){
    let x;
    if (n % 2 == 1){
        x = true;    //let vazi u bloku u kom je deklarisana
    }else {
        x = false;
    }
    // let x; // netacno
    return x;
}

function neparan2(n){
    if(n % 2 == 1){
        var x = true; //var - dostupna unutar funkcije u kojoj je deklarisana
    } else {
        var x = false;
    }
    //var x; //tacno ali besmisleno
    return x;
}

let p = 5;
console.log(neparan(p));*/

let neparan3 = (n) => {
    let x = false;
    if (n % 2 == 1){
        x == true;
    }
    return x;
}

let neparan4 = (n) => {
    return (n % 2  == 1) ? true : false; //?: ternarni operator
}

console.log(neparan4(6));

let  radniDan = () => {
    let dan = new Date();
    let day = dan.getDay();
    if (day == 0 || day == 6){
        return `Vikend je`;
    } else {
        return`Radni dan`;
    }
}
//console.log(radniDan());
document.body.innerHTML += radniDan();
//lert(radniDan());

let neparan5 = (n) => {
    return (n % 2 == 1);
}
console.log(neparan5());

let neparan6 = (n) => (n % 2 == 1);
console.log(neparan6());

let uvecajZaDva = (n) => (n += 2);
console.log(uvecajZaDva(5));

//ZADATAK 4
//Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja. U oba slučaja, brojevi su međusobno različiti.
/*MOJE RESENJE:
let maks2 = (a, b) => {
    return (a > b) ? a : b;
    
}
console.log(maks2(12, 10));*/
//PROFESOROVO RESENJE
let maks2 = (a, b) => a > b ? a : b;
/////////////////ako je a vece od b ? daj mi a : u suprotnom b
console.log(maks2(9, 10));

/*MOJE RESENJE:
let maks4 = (a, b, c, d) => {
    if (a > b && a > c && a > d){
        return a;
    } else if (b > c && b > d){
        return b;
    } else if(c > d){
        return c;
    } else{
        return d;
    }
}
console.log(maks4(34, 36, 40, 50));*/
//PROFESOROVO RESENJE
let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));
console.log(maks4(8, 4, 9, 2));

//VEZBA 2
//Napisati funkciju koja vraća sliku za prosledjenu adresu slike. Rezultat poziva iskoristiti da sliku prikažete u browseru.
let slika = (n) =>{
    return `<img src=${n}>`;
}
document.body.innerHTML += slika(("1.jpg"));

let prikaziSliku = putanja => `<img src="${putanja}" alt="ruza">;`

let d1 = document.getElementById("d1");
d1.innerHTML += prikaziSliku("1.jpg");
//DODATAK DRUGOM ZADATKU: Funkcija se ne menja. Samo u html fajlu, unutar body taga, dodajte div sa pozadinskom plavom bojom, i neka sadrži neki tekst. Onda u javascriptu pozovite ovu funkciju, i njen rezultat dodatje u div tag (znači da u div tagu ostane tekst, samo da se doda sličica posle teksta).
