/*
let i = 1;
while (i <= 5){
    console.log(i);
    i++;
    // ILI console.log(i++);
    // ILI i = i + 1;
}

console.log("Kraj petlje");
console.log(i);
/*
PRE PETLJE i = 1;
1. ITERACIJA: log(1), i = 2;
2. ITERACIJA: log(2), i = 3;
3. ITERACIJA: log(3), i = 4;
4. ITERACIJA: log(4), i = 5;
5. ITERACIJA: log(5), i = 6;
KRAJ PETLJE
6. ITERACIJA: log(6)
*/
/*
i = 0;
while(i < 5){
    i++;
    console.log(i);
}

/*let a = 1;
let s = '';
while (a <= 20){
    s += a + ' '
    a++;
}

console.log(s);

//Zadatak 1
let a = 1;
let s = " ";
while(a <= 20){
    s = s + a + " ";
    a++;
}
console.log(s);
/*
# |   i   |   s
........................
0 |   1   |  " "
1 |   2   |  "1 "
2 |   3   | "1 2 "
3 |   4   | "1 2 3 "
..|.....  | ......
20|   21  | "1 2 .... 20 "




//Zadatak 2
let b = 20;
while(b > 0){
    console.log(b); 
    b--;
}

//Zadatak 3
let c = 2;
while (c <= 20) {
    console.log(c);
    c = c + 2;
    //i += 2
}

/*let d = 1;
while (d <= 20){
    if (i % 2 == 0){
        console.log(i);
        
    }
    i++;
}
*/

//Zadatak 4
/*let n = 15;
let i = 1;
while (i <= n){
    if (i % 3 == 1){
        document.body.innerHTML += `<p class='plava'>Paragraf broj ${i}</p>`;    
    } else if (i % 3 == 2){
        document.body.innerHTML += `<p class='crvena'>Paragraf broj ${i}</p>`;
    } else {
        document.body.innerHTML += `<p class='zelena'>Paragraf broj ${i}</p>`;
    }
    i++;
}
//DRUGI NACIN:
let n = 15;
let i = 1;

while (i <= n){
    let klasa; //Uvek vazi u bloku u kom je definisana GLOBALNA (vazi svuda gde se taj js ukljuc - html,itd..)let klasa; Stavlja se tamo gde je logicnije -  ako se samo u ovoj petlji koristi smao se tu pise, moze i van petlje da se pise, vazilo bi ovde - zavisi gde se koristi
    if (i % 3 == 1){
        klasa = 'plava';   
    } else if (i % 3 == 2){
        klasa = 'crvena';
    } else {
        klasa = 'zelena';
    }
    document.body.innerHTML += `<p class='${klasa}'>Paragraf broj ${i}</p>`;
    i++;
}


//Zadatak 6 - suma brojeva od 1 do 100
i = 1;
let suma = 0;

while (i <= 100){
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);*/

//Zadatak 7
let i = 1;
let n = 15; 
let suma = 0;

while (i <= n){
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Zadatak 8
n = 5;
let m = 10; 
i = n;
suma = 0;

while (i <= m){
    suma += i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${suma}`);

//Zadatak 9
n = 3;
m = 6; 
i = n;
let proizvod = 1;

while (i <= m){
    proizvod *= i;
    i++;
}
console.log(`Suma brojeva od 1 do ${n} je ${proizvod}`);

//Zadatak 10
n = 5;
m = 10;
i = n;
let sumaKvadrata = 0;
let sumaKubova = 0;

while(i <= m){
    if (i % 2 == 0) {
        sumaKvadrata += i * i;
    }
    if (i % 2 == 1) {
        sumaKubova += i * i * i;
    }
    i++;
}
console.log(`Suma kvadrata je ${sumaKvadrata}, a suma kubova je ${sumaKubova}`);

//Profesorov nacin zadatak 10
n = 2;
m = 5;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while (i <= m) {
    if (i % 2 == 0) {
        sumaKvadrataParnih += i ** 2;
    }
    else {
        sumaKubovaNeparnih += (i ** 3);
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`);



//Zadatak 11
let k = 10;
i = 1;
let brojDeljivih = 0;

while (i <= k) {
    if (k % i == 0){
        brojDeljivih++;
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${brojDeljivih} broja`);

//Profesorov nacin zadatka 11
k = 9;
i = 1;
let brojDelioca = 0;
while (i <= k) {
    if (k % i == 0) {
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je: ${brojDelioca}`);



//Zadatak 12
n = 7;
i = 1;
brojDelioca = 0;
while (i <= n) {
    if (n % i == 0) {
        brojDelioca++;
    }
    i++;
}
if(brojDelioca == 2){
    console.log(`Broj ${n} je prost`);
} else {
    console.log(`Broj ${n} je slozen`);
}
