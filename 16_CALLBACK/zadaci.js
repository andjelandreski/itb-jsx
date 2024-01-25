//Test primeri
let a = [6, 8, 9, 3, 1];

//2)Odrediti zbir elemenata celobrojnog niza.
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    });
    return suma;
}

console.log(sumaElem(a));

//Zadatak 5 
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if (el > max) {
            max = el;
        }
    })
    return max;
}
console.log(maxVr(a));

//3)Odrediti proizvod elemenata celobrojnog niza.
let proizvodElem = niz => {
    let proizvod = 1;
    niz.forEach(el => {
        proizvod *= el;
    });
    return proizvod;
}
console.log(proizvodElem(a));
//4)Odrediti srednju vrednost elemenata celobrojnog niza.
let srednjaVredEl = niz => {
    let suma = 0;
    let srednjaVrednost = 0;
    niz.forEach(el => {
        suma += el;
        srednjaVrednost = suma / niz.length;
    });
    return srednjaVrednost;
}
console.log(srednjaVredEl(a));
//6)Odrediti minimalnu vrednost u celobrojnom nizu.
let minVred = niz => {
    let min = niz[0];
    niz.forEach(el => {
        if(el < min){
            min = el;
        }
    });
    return min;
}
console.log(minVred(a));

//7)Odrediti indeks maksimalnog elementa celobrojnog niza.
let indeksMaksimalnog = niz => {
    let max = niz[0];
    let i = 0;
    niz.forEach(el => {
        if(el > max){
            max = el;
            i++;
        }
    });
    return i;
}
console.log(indeksMaksimalnog(a));

//8)Odrediti indeks minimalnog elementa celobrojnog niza.
let indeksMinimalnog = niz => {
    let min = niz[0];
    let i = 0;
    niz.forEach(el => {
        if (el < min){
            min = el;
            i++;
        }
    });
    return i;
}
console.log(indeksMinimalnog(a));
//9)Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti
let brojElemVecihOdSr = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el > srednjaVredEl(niz)){
            br++;
        }
    });
    return br;
}
console.log(brojElemVecihOdSr(a));

let b = [ 9, 5, 6, 9, 8, 9, 9];
let c = [3, 5, 2, 1, 6, 2, 6];

//zadatak 7 profesorovo resenje
let indexMaxVr = niz => {
    let maxVr = niz[0];
    let maxInd = 0;
    niz.forEach ((el, i) => {
        if (el > maxVr) {
            maxVr = el;
            maxInd = i;
        }
    });
    return maxInd;
}
console.log(indexMaxVr(a));

//zadatak 7a: vratiti sve indekse pojavljivanja maksimalne vrednosti
let sviIndexiMaxVr = niz => {
    let maxVr =  niz[0];
    let sviIndexi = [];
    niz.forEach ((elem, i) => {
        if(elem == maxVr){
            maxVr = elem;
            sviIndexi.push(i);
        }
    });
    return sviIndexi;
}
console.log(sviIndexiMaxVr(a));
console.log(sviIndexiMaxVr(b));
console.log(sviIndexiMaxVr(c));
console.log(sviIndexiMaxVr(c)[0]); //indeks prvog pojavljivanja
console.log(sviIndexiMaxVr(c)[sviIndexiMaxVr(c).length - 1]); //indeks poslednjeg pojavljivanja

//Zadatak 19
let duzinaSvihStringova = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

let imena = ["Stefan", "Vladislav", "Nikola", "Milan", "Nevena", "Maja"];
duzinaSvihStringova(imena);

let imena2 = ["Pera", "Marija", "Laza", "Vladislav", "Toni"];

//Zadatak 20
let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => {
        if(el.length > duzina){
            maxVr = el;
            duzina = el.length;
        }
    });
    return maxVr;
}
console.log(stringMaxDuzina(imena));

//Zadatak 24
let zad24 = (a, b) => {
    let c = [];
    a.forEach((el, i) => {
        //c.push(a[i], b[i]);
        c.push(el, b[i])
    });
    return c;
}

let n1 = [1,2,3,4];
let n2 = [5,6,7,8];
console.log(zad24(n1, n2));

//zadatak 25
let zad25For = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[i] = a[i] * b[i]; //c.push(a[i] * b[i]);
    }
    return c;
}
console.log(zad25For(n1, n2));

let zad25ForEach = (a, b) => {
    let c =[];
    a.forEach((elem, i) => {
        c.push(elem * b[i]);
    });
    return c;
}
console.log(zad25ForEach(n1, n2));


//Zadatak 26
//a = [a[0], a[1],........, a[2n - 1]] // niz od a ima 2n elemenata
//n = 3 => a ima 6 elemenata [a[0], a[1], a[3], a[4], a[5]];
//Treba formirati niz b koji ima duplo manje elemenata (n elemenata)
// n = 3 => b ima 3 elemenata [b[0], b[1], b[2]]
//b[i] = (a[i] + a[2n - 1 - i]) / 2
//b[0] = (a[0] + a[5]) / 2
//b[1] = (a[1] + a[4]) / 2
//b[2] = (a[2] + a[3]) / 2

let zad26For = a => {
    let k = a.length;
    let n = k / 2;
    let b = [];
    for (let i = 0; i < n; i++) {
        b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
    }
    return b;
}
console.log(zad26For(n1));
console.log(zad26For(n2));

let n3 = [ 5, 8, 0, 1, 4, 2, 4, 3];
console.log(zad26For(n3));

let zad26ForEach = a => {
    let b = [];
    let k = a.length;
    let n = k / 2 ;
    a.forEach((el, i) => {
        if (i < n){
            b[i] = (a[i] + a[2 * n - 1 - i]) / 2;
        }
    });
    return b;
}

console.log(zad26ForEach(n3));