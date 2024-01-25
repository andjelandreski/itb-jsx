//Test primeri
let imena = ["Stefan", "Jelena", "Marko", "Milos", "Bratislav", "Ljiljana"];


//Zadatak 19
let duzinaSvakogElementa = niz => {
    for (let i = 0; i < niz.length; i++){
        let s = niz[i];
        console.log(s.length);
    }
}
duzinaSvakogElementa(imena);

//Zadatak 20
let najvecaDuzina = niz => {
    let maxDuz = niz[0].length;
    for(let i = 1; i < niz.length; i++){
        if(maxDuz < niz[i].length){
            maxDuz = niz[i];
        }
    }
    return maxDuz;
}
console.log(najvecaDuzina(imena));

//Resenje profesora:
let stringMaxDuzina = niz => {
    let maxString = niz[0];
    let maxDuzina = maxString.length;
    let maxIndex = 0;
    for (let i = 1; i < niz.length; i++){
        let s = niz[i];
        if (s.length > maxDuzina){
            maxString = s;
            maxDuzina = s.length;
            maxIndex = i;
        }
    }
    return maxString;
}
console.log(stringMaxDuzina(imena));
//Profesorov drugi nacnin:
let stringMaxDuzinaKrace = niz => {
    let maxString = niz[0];
    for (let i = 1; i < niz.length; i++){
        let s = niz[i];
        if (s.length > maxString.length){
            maxString = s;
        }
    }
    return maxString;
}

//Zadatak 21
let brojElemenata = niz => {
    let suma = 0;
    let prosecnaDuzina = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i].length;
    }
    prosecnaDuzina = suma / niz.length;

    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if (niz[i].length > prosecnaDuzina){
            br++;
        }
    }
    return br;
}
console.log(brojElemenata(imena));

//Profesorov nacin
let prosecnaDuzina = niz => {
    let zbirDuzina = 0;
    for(let i = 0; i < niz.length; i++){
        let s = niz[i];
        zbirDuzina += s.length;
    }
    return zbirDuzina / niz.length;
}

let brojNatprosecnoDugih = niz => {
    let pd = prosecnaDuzina(niz);
    let broj = 0;
    for ( let i = 0; i < niz.length; i++){
        let s = niz[i];
        if (s.length > pd){
            broj++;
        }
    }
    return broj;
}
console.log(prosecnaDuzina(imena));
console.log(brojNatprosecnoDugih(imena));

//Zadatak 22
let brojElemA = niz => {
    let brojElem = 0;
    for (i = 0; i < niz.length; i++){
        if(niz[i].indexOf("a") > -1){
            brojElem++;
        }
    }
    return brojElem;
}
console.log(brojElemA(imena));

//Zadatak 23 
let brojElemStartA = niz => {
    let brojElem = 0;
    for (let i = 0; i < niz.length; i++){
        if(niz[i].startsWith("a") || niz[i].startsWith("A")){
            brojElem++;
        }
    }
    return brojElem;
}
console.log(brojElemStartA(imena));

/*
Resenja sa casa: Zadatak 22
Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
// 1. nacin
let brElKojiSadrzeA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) { // prolazim kroz sve elemente niza
        for (let j = 0; j < niz[i].length; j++) { // prolazim kroz sve karaktere svakog elementa niza
            if (niz[i][j] == 'a') {
                brojac++;
                break;  // ovo govori: kada se prvi put stekne uslov true izadji iz petlje ne zanima me dalje(neke rijeci sadrze vise 'a') pa zato ide break.
            }
        }
    }
    return brojac;
}
console.log(brElKojiSadrzeA(stavke));
// 2. nacin
let brElKojiSadrzeA2 = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes('a')) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brElKojiSadrzeA2(stavke));
*/

//Zadatak 24
let zad24a = (a, b) => {
    let n = a.length; //b.length
    let c = [];
    for (let i = 0; i < n; i++){
        c.push(a[i], n[i]);
    }
    return c;
    //0: c = []
    //1: c = [a[o], b [0]]
    //2: c = [a[o], b [0], a[1], b [1]]
    //3: c = [a[o], b [0], a[1], b [1], a[2], b [2]]
}

let zad24b = (a, b) => {
    let n = a.length;
    let c = [];
    for(let i = 0; i < n; i++){
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}
//c = [a[o], b [0], a[1], b [1], a[2], b [2]]....a[n -1].....b[n -1]
//       0      1    2      3     4      5  ..... 2n -1 ..... 2n -1