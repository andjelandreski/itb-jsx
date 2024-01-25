//klasicne (imenovane) funkcije
function sum(a, b){
    return a + b;
}
let rez = sum(1, 2); // poziv funkcije (po imenu, iza koga se navode argumenti)
console.log(rez);

//anonimne funkcije (funkcije bez imena)
let suma = function(a, b){
    console.log(this);
    return a + b;
}
console.log(suma(1, 2)); // poziv anonimne funkcije

//Arrow funkcije (= anonimne funkcije koje imaju 2 specificna svojstva koje ih razdvaja od anonimnih funkcija):
//1) imaju skracen zapis ''=>''
//2) znacenje kljucne reci this

let suma2 = (a, b) => {
    console.log(this);
    return a + b;
}
console.log(suma2(1, 2)); //poziv arrow funkcije = poziv anonimne funkcije

let hello = () => {
    console.log("Hello world!");
}
hello();

let echo = (s1, s2) => {
    let result = s1 + ", " + s2;
    console.log(result);
}
echo("Andjela", "Andreski");
echo("Ivan", "Radovic");