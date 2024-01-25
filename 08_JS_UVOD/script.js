document.getElementById("d1").innerHTML = "Ja se zovem Andjela Andreski";

console.log("It's alright");

//Literali
console.log(5);
console.log(-5.189);
console.log(3+4);
console.log("3" + "4"); //konkatenacija - spajanje stringova
console.log("3+4"); //3+4
console.log("3 + 4 =", 3 + 4);
console.log("3 + 4 = "+ (3 + 4));
console.log("3 + 4 =" + 3 + 4);
console.log(true);
console.log(false);

//Promenljijve
let x; // 1) deklaracija promenljive - uvodjenje promenljive u program

x = 5;
console.log(x);

x = "Laza";
console.log(x);

let y = true; //2) definicija promenljive (deklaracija i dodela vrednosti)

console.log(y);

const z = -7.6;

// z = 6; ne moze!

console.log(z);

let age;
console.log(age, age + 3); // undefined, NaN - Not a Number

age = null;
console.log(age, age + 3);

let broj = 3 + 4* 2; //11
console.log(broj);

broj = (3 + 4)* 2; //14
console.log(broj);

//broj += 6; //20
//console.log(broj);

broj = broj + 6;
console.log(broj);

broj *= 5;
console.log(broj); //100

x = 6;
x++;
console.log(x); //7

++x;
console.log(x); //8

x = 6;
console.log(x++); //post-increment (prvo se iskoristi stara vrednost promenljive x pa s eonda uveca)
console.log(x); //tek ovde vidimo 7 jer se u prethodnoj liniji uvecala posle promenljive

console.log(++x); //ovde se odmah uvecava za 1 jer je pre-increment, tj pre vrednosti promenljive se uvecava

// Beba ima 28 meseci
// 28 delimo sa 12 i trazimo kolicnik i ostatak
// kolicnik nam kaze koliko je to godina, a ostatak koliko je to jos ostalo meseci
console.log(28/12);
//Kolicnik kako dobijemo:
console.log(Math.floor(28/12));
//Ostatak kako dobijemo:
console.log(28%12); //4
// 28 = 2* 12 + 4
//    (klcnk.) (ostatak)
console.log(7 % 3); //1
console.log(24 % 18); //6


x = 5;
y = 3;
console.log(x ** y); // 5^3 = 5 * 5* 5 = 20 * 5 = 125

