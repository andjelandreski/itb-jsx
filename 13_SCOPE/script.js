//KUCAJ NA NET JAVASCRIPT HOISTING - pojasnjenje za ovo

let a = 10;
var b = 20;
const c = 30;
console.log(a, b, c);

a = 15;
var b = 25;
console.log(a, b);

if(true) {
    let a = 50; // to je a samo za scope u if naredbi
    var b = 70; // globalno
    let d = 60;
    console.log(a, b);
    if(true){
        console.log(a, b, d);
    }
}

//console.log(a, b, d); // d nije definisano
console.log(a, b);