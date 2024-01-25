//Zadatak 1
let telesnaMasa = (t, b) => {
    let v = b / 100;
    let bmi = t / (v * v);
    if (bmi <= 18.5){
        console.log(`Pothranjenost`);
    } else if (bmi > 18.5 && bmi < 24.9){
        console.log(`Normalna tezina`);
    } else if(bmi >= 24.9 && bmi <= 30){
        console.log(`Povisena tezina`);
    } else if(bmi > 30){
        console.log(`Gojaznost`);
    }
}

telesnaMasa(100, 182);

//Zadatak 2
let nutricionisti = (a, b) => {
    let brojNedelja = 0;
    let tezina = a;
    if (a < b){
        while (tezina <= b){
            tezina += tezina * 0.01;
            brojNedelja++;
        }
    } else if(a > b){
        while (tezina >= b){
            tezina -= tezina * 0.02;
            brojNedelja++;
        }
    }
    return brojNedelja;
}
console.log(nutricionisti(70, 63));

//Zadatak 3
let nizTezina = [120, 118, 115, 116, 110, 112, 110, 113];

let prosecnaTezina = niz => {
    let min = niz[0];
    let max = niz[0];
    for(let i = 1; i < niz.length; i++){
        if(min > niz[i]){
            min = niz[i];
        }
        if(max < niz[i]){
            max = niz[i];
        }
    }
    let suma = 0;
    let izbaci = max + min;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    let ukupno = 0;
    let rezultat = 0;
    ukupno = suma - izbaci;
    rezultat = ukupno / (niz.length - 2);

    return rezultat;
}
console.log(prosecnaTezina(nizTezina));

//Zadatak 4
let nizTezinaSvih = [50, 50, 50, 49, 50, 51];

let tezinaSvih = niz => {
    let suma = 0;
    let s1 = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    s1 = suma / niz.length;

    let novaSuma = 0;
    let s2 = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if (i % 2 == 0){
            novaSuma += niz[i];
            br++;
        }
    }
    s2 = novaSuma / br;

    return ((s2 + s2 * 0.1) > s1) ? false : true;
}
console.log(tezinaSvih(nizTezinaSvih));

//Zadatak 5
let brojOsob = niz => {
    let suma = 0;
    let prosecnaTezinaSvih = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i];
    }
    prosecnaTezinaSvih = suma / niz.length;
    
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        if(niz[i] == prosecnaTezinaSvih){
            br++;
        }
    }

    if(br > niz.length/3){
        let p = `<p style="color: green">Svi klijenti su priblizno iste tezine</p>`;
        document.body.innerHTML += p;
    } else {
        p = `<p style="color: red">Nisu svi klijenti priblizno iste tezine</p>`;
        document.body.innerHTML += p;
    }
}
brojOsob(nizTezinaSvih);