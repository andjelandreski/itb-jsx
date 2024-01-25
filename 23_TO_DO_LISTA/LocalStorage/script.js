//Pamcenje u lokalnoj memoriji
localStorage.setItem("ime", "Stefan");
localStorage.setItem("grad", "Nis");


//Izmena u lokalnoj memoriji
localStorage.setItem("grad", "Leskovac");
//ukoliko ne postoji neki key u LS onda vrsi novi upis

//Preuzimanje iz lokalne memorije
let unetoIme = localStorage.getItem("ime");
console.log(unetoIme);
console.log(localStorage.getItem("grad"));

localStorage.removeItem("grad"); //brise iz LS po zadatom kljucu


