//Zadatak 1
//WHILE petlja
let i = 1;
while(i <= 20){
    console.log(`Broj ${i}`);
    i++;
}

//FOR petlja
// j++ moze se koristiti j+=1
for (let j = 1; j <= 20; j++){
    console.log(`Ovo je broj ${j}`);
}

//Zadatak 2
for (let k=20; k >= 1; k--){
    console.log(`Ovo je broj ${k}`);
}

//Zadatak 5
let suma = 0;
let n = 5;
for(let p=1; p <= n; p++){
    suma += p; 
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Zadatak 3
for (i = 2; i <= 20; i += 2){
    console.log(i);
}

//Zadatak 4
let dv = 0;
for (i = 5; i <= 15; i++){
    dv = i * 2;
    console.log(dv);
}

//Zadatak 6
n = 1;
m = 100;
s = 0;
for(i = n; i <= m; i++){
    s += i;
}
console.log(s);

//Zadatak 7
n = 5;
m = 50;
p = 1;
for(i = n; i <= m; i++){
    p += i;
}
console.log(p);

//Zadatak 8
n = 4;
m = 6;
s = 0;
for (i = n; i <= m; i++){
    s += i * i;
}
console.log(s);

//Zadatak 9
for(i = 1; i <= 3; i++){
    document.write(`<img src="slike/${i}.jpg">`);
}

//Zadatak 12
n = 3;
m = 6;
suma = 0;
let br = 0;
//Aritmeticka sredina je kada saberem brojeve i podelim sa brojem brojeva (saberem 3, 4, 5 i 6 i podelim onda sa 4, kao ocenjivanje predmeta u skoli)
for(i = n; i <= m; i++){
    suma += i; // suma = suma + i;
    br++; // br += 1; ILI br = br + 1;
}
let arsr = suma/br; //aritmeticka sredina
console.log(arsr);

//Zadatak 10
p = 1;
for (i = 20; i <= 100; i++){
    if(i % 11 == 0){
        p = p * i;
    } 
}
console.log(p);

//Zadatak 11 
br = 0;
for(i = 5; i <= 150; i++){
    if(i % 13 == 0){
        br++;
    }
}
console.log(br);

//Zadatak 16
suma = 0;
n = 3;
m = 9;
a = 4;
for (i = n; i <= m; i++){
    if(i % a != 0){
        suma += i;
    }
}
console.log(suma);
//i=3, suma=3
//i=4, suma=3 (nije ispunjen if)
//i=5, suma=8(3+5)
//i=6, suma=14
//i=7, suma=21
//i=8, suma=21 (nije ispunjen if)
//i=9, suma=30
//i=10, for petlja se ne izvrsava, uslov nije ispunjen - KRAJ

//Zadatak 13
n = -15;
m = 20;
let brPoz = 0;
let brNeg = 0;

for (i = n; i <= 20; i++){
    if (i < 0) {
        brNeg++;
    }
    if (i > 0) {
        brPoz++;
    }
}
console.log(`Negativnih brojeva ima: ${brNeg}, a pozitivnih brojeva ima: ${brPoz}`);

//Zadatak 14
n = 5;
m = 50;
brojac = 0;
for(let i=n; i<=m; i++) {
  if(i%3 ==0 || i%5 == 0) {
    brojac++;
  }
}
console.log(`Broj brojeva od ${n} do ${m} koji su deljivi sa 3 ili 5 je ${brojac}`);

//Zadatak 15
n = 10;
m = 40;
br = 0;
suma = 0;
for(i = n; i <= m; i++){
    if (i % 10 == 4 ){
        br++;
        suma += i;
    }
}
console.log(`Broj brojeva koji se zavrsavaju sa 4 je: ${br}, a suma je ${suma}` );

//Zadatak 17
n = 2;
m = 20;
a = 3;
p = 1;
for(i = n; i <= m; i++){
    if (i % a == 0){
        p *= i;
    }
}
// 17 DRUGI NACIN
/* Odrediti proizvod brojeva od n do m koji su deljivi brojem a *
console.log("17. zadatak");
n = 3;
m = 9;
a = 4;
prod = 1;
let n1 = n;
while (n1 % a != 0) {
  n1++;
}
for (let i = n1; i <= m; i += a) {
  prod *= i;
}
console.log(
  `Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} je ${prod}`
);*/

//Zadatak 18
//1. NACIN
let k = 15;
let brBrojevaDeljiv = 0;
for(i = 1; i <= k; i++){
    if(k % i == 0){
        brBrojevaDeljiv++;
    }
}
console.log(`Broj ${k} je deljiv sa ${brBrojevaDeljiv} broja`);
//2. NACIN
k = 5;
if(k == 1){
    brBrojevaDeljiv = 1;
} else {
    brBrojevaDeljiv = 2;
    for(i = 2; i <k/2; i++){
        if(k%i == 0){
            brBrojevaDeljiv++;
        }
    }
}
console.log(`Broj ${k} je deljiv sa ${brBrojevaDeljiv} broja`);

// Zadatak 19
/*
Odrediti da li je dati prirodan broj n prost.
*/
console.log("----- Zadatak 19");
n = 1;
br = 0;
for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    br++;
  }
}
console.log(br);
if (br > 2) {
  console.log(`Broj ${n} je složen broj`);
} else {
  console.log(`Broj ${n} je prost broj`);
}
// 1 nije prost broj
// Drugi način
let prost = true;
k = 13;
for (i = 2; i <= Math.sqrt(k); i++) {
  if (k % i == 0) {
    prost = false;
    break;
  }
}
if (prost) {
  console.log(`Broj ${k} je prost.`);
} else {
  console.log(`Broj ${k} je složen.`);
}

//Zadatak 20
let divTabela = document.getElementById('tabela');
let tabela = `<table>`;
for(i = 1; i <= 6; i++){
    let obojen = "belo";
    if(i % 2 == 0){
        obojen = "roze";
    }
    tabela += 
    `<tr class="${obojen}">
        <td>Tekst</td>
        <td>Tekst</td>
    </tr>`;
}
tabela += `</table>`;
divTabela.innerHTML = tabela;