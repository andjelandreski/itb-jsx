//Test primeri

let brojevi1 = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];
let brojevi3 = [1, 2, 3, 4, 5, 6];
let brojevi4 = [1, 5, 9, 3];
let brojevi5 = [8, 6, 7, 8, 5];



//Zadatak 2
let sumaElem = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++){
        suma = suma + niz[i]; // suma += niz[i];
    }
    return suma;
}
console.log(sumaElem(brojevi1));
console.log(sumaElem(brojevi2));
console.log(sumaElem(brojevi3));

//Zadatak 3
let proizvodElem = niz => {
    let proizvod = 1;
    for (let i = 0; i < niz.length; i++){
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}
console.log(proizvodElem(brojevi1));
console.log(proizvodElem(brojevi2));
console.log(proizvodElem(brojevi3));

//Zadatak 4
let srednjaVred = niz => {
    let vrednost = 0;
    let suma = 0;
    for (let i = 0; i < niz.length; i++){
        suma += niz[i];
        

    }
    vrednost = suma / niz.length;
    return vrednost;
}
//DRUGI I SKRACENI NACIN
let srednjaVred2 = niz => sumaElem(niz) / niz.length;

console.log(srednjaVred(brojevi3));
//na testu npr: napisati funkciju koja vraca srednju vrednost celobrojnog niza

//Zadatak 4a: odrediti srednju vrednost parnih elemenata celobrojnog niza
let srVrednostParnih = niz => {
    let suma = 0;
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] % 2 == 0){
            suma = suma + niz[i];
            br++;
        }
    }
    return suma / br;

}
console.log(srVrednostParnih(brojevi1));
console.log(srVrednostParnih(brojevi2));
console.log(srVrednostParnih(brojevi3));
console.log(srVrednostParnih(brojevi4));

//Zadatak 5
//1)Proglasiti prvi element niza za maksimalni
//2) Proci kroz ostale elemente niza i utvrditi nema li veceg elementa od do sada najdenog maksimuma
//Ako ima rezultira ovu vrednost
let maxNiza = niz => {
    let max = niz[0]; //korak 1
    for (let i = 1; i < niz.length; i++){
        if (niz[i] > max){
            max = niz[i];
        }
    }
    return max;
}
console.log(maxNiza(brojevi1));
console.log(maxNiza(brojevi2));
console.log(maxNiza(brojevi3));



//Zadatak 7: Odrediti indeks maksimalnog elementa celobrojnog niza
let indMaxNiza = niz => {
    let max = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++){
        if (niz[i] > max){
            max = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMaxNiza(brojevi3));
console.log(indMaxNiza(brojevi5));

//Zadatak 6
let minNiza = niz => {
    let min = niz[0];
    for (let i = 1; i < niz.length; i++){
        if (niz[i] < min){
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(brojevi1));

//Zadatak 8
let indMinNiza = niz => {
    let min = niz[0];
    let index = 0;
    for (let i = 1; i < niz.length; i++){
        if(niz[i] < min){
            min = niz[i];
            index = i;
        }
    }
    return index;
}
console.log(indMinNiza(brojevi1));
console.log(indMinNiza(brojevi2));
console.log(indMinNiza(brojevi3));
console.log(indMinNiza(brojevi4));

//Zadatak 11
let brojParnih = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if(niz[i] % 2 == 0){
            br++;
        }
    }
    return br;
}
console.log(brojParnih(brojevi1));
console.log(brojParnih(brojevi2));
console.log(brojParnih(brojevi3));

//Zadatak 10
let zbirPozitvnih = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] > 0){
            zbir += niz[i];
        }
    }
    return zbir;
}
console.log(zbirPozitvnih(brojevi1));
console.log(zbirPozitvnih(brojevi2));
console.log(zbirPozitvnih(brojevi3));
console.log(zbirPozitvnih(brojevi4));

//Zadatak 9
let veciOdSrednje = niz => {
    let br = 0;
    for (let i = 0; i < niz.length; i++){
        if(niz[i] > srednjaVred(niz)){
            br++;
        } 
        //br += niz[i] > srednjaVred(niz) ? 1 : 0;  //umesto if
    }
    return br;
}
console.log(veciOdSrednje(brojevi1));
console.log(veciOdSrednje(brojevi2));
console.log(veciOdSrednje(brojevi3));

//Zadatak 12
let parElemNepInd = niz => {
    let brojParnih = 0;
    for (let i = 0; i < niz.length; i++){
        if (niz[i] % 2 == 0 && i % 2 == 1){
            brojParnih++;
        }
    }
    return brojParnih;
}
console.log(parElemNepInd(brojevi1));
console.log(parElemNepInd(brojevi2));
console.log(parElemNepInd(brojevi3));

//Zadatak 13
let sumaParInd = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++){
        if(i % 2 == 0){
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaParInd(brojevi1));
console.log(sumaParInd(brojevi2));
console.log(sumaParInd(brojevi3));

//Zadatak 14


//Zadatak 15
let promenitiZnak = niz => {
    for(let i = 0; i < niz.length; i += 2){
        if (niz[i] % 2 != 0){
            niz[i] = niz[i] * (-1);
        }
    }
    return niz;
}
console.log(promenitiZnak(brojevi1));

// Zadatak 14:
brojevi1 = [8, 4, -2, 10, 1, 100];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5];
let menjanjeZnaka = niz => {
    for (let i = 0; i < niz.length; i++){
        niz[i] = niz[i] - (2 * niz[i])
    }
    return niz;
}
console.log(menjanjeZnaka(brojevi1));
console.log(menjanjeZnaka(brojevi2));
console.log(menjanjeZnaka(brojevi3));
console.log(menjanjeZnaka(brojevi4));
console.log(menjanjeZnaka(brojevi5));
// Zadatak 15:
brojevi1 = [8, 4, -2, 10, 1, 100];
brojevi2 = [10, -5, 0, -3];
brojevi3 = [1, 2, 3, 4, 5, 6];
brojevi4 = [1, 5, 9, 3];
brojevi5 = [8, 6, 7, 8, 5];
let menjanjeZnakaNeparnomElementu = niz => {
    for (let i = 0; i < niz.length; i+=2){
        if (niz[i] % 2 != 0){
        niz[i] = niz [i] - (2 * niz[i])
        }
    }
    return niz
}
console.log(menjanjeZnakaNeparnomElementu(brojevi1));
console.log(menjanjeZnakaNeparnomElementu(brojevi2));
console.log(menjanjeZnakaNeparnomElementu(brojevi3));
console.log(menjanjeZnakaNeparnomElementu(brojevi4));
console.log(menjanjeZnakaNeparnomElementu(brojevi5));

let promenitiZnak2 = niz => {
    for(let i=0; i<niz.length; i+=2){
        if (niz[i] % 2 != 0) {
            niz[i] = niz[i]*(-1);
        }
    }
    return niz;
}
console.log(promenitiZnak2(brojevi1));