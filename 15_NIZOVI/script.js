let cars =["Toyota", "BMW", "Volvo"];
console.log(cars);

let razno = [15, -3.5, "hello", false, [1, 2, 3]];
console.log(razno);
console.log(razno[2]);

let niz = [];
niz[1] = "Pera";
niz[4] = "Ivana";
console.log(niz[3]);
console.log(niz[4]);
//niz[] = "Lena" - ne mora redom da se dodeljuju indeksi, ali indeks mora biti dodeljen
niz[1] = "Zika";
console.log(niz);

//Umesto linija 9 - 17, moze i ovako:
//let niz = [undefined, "Zika", undefined, "Ivana"]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for(let i = 0; i < razno.length; i++){
    console.log(razno[i]);
}

let unutrasnjiNiz = razno[4];
for (let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

for (let i = 0; i < razno[4].length; i++){
    console.log(razno[4][i]);
}

let brojevi = [4, 3.5, 8, 10];
//Uvecati vrednosti svih elemenata niza za 10%
for (let i = 0; i < brojevi.length; i++){
    brojevi[i] *= 1.1;
}
for (let i = 0; i < brojevi.length; i++){
    console.log(brojevi[i]);
}