//KORACI EVENT-A:
//1)Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById("hello");
//2)Postavimo osluskivac na element koji smo dohvatili
/*ugradjena funkcija addeventlistener sadrzi dva parametara:
prvi parametar je tip/vrsta eventa(ugradjene reci)
drugi par je callback funkcija, za sad joj ne prosledjujemo nikakav parametar*/
btnHello.addEventListener('click', () =>{
    console.log("Hello");
});

btnHello.addEventListener("dblclick", () => {
    console.log("Hello hello!!");
});

//////////////////////////
/*1.ZADATAK
Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.*/

let btnBroji = document.getElementById("broji");
let pIspisBroja = document.getElementById("ispisBroja");
let br = 1;
btnBroji.addEventListener('click', () =>{
    console.log(`Broj je ${br}`);
    pIspisBroja.innerHTML = `Broj je ${br}`; //2. ZADATAK  Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli. 
    br++;
});

//3.ZADATAK
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanBrojac = document.getElementById("brojac");

let broj = 0;
spanBrojac.innerHTML = broj;
btnMinus.addEventListener('click', () =>{
    broj--;
    if(broj < 0){ //4. zadatak
        broj = 0;
    }
    spanBrojac.innerHTML = broj;
});

btnPlus.addEventListener('click', () =>{
    broj++;
    spanBrojac.innerHTML = broj;
});

//5. ZADATAK
//Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let btnIspisiTekst = document.getElementById("ispisiTekst");
let pIspisTeksta = document.getElementById("ispisTeksta");
let inputTekst = document.getElementById("tekst");

btnIspisiTekst.addEventListener("click", ()=> {
    let preuzmiTekst = inputTekst.value;
    pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});

//6. ZADATAK
let radioMuski = document.getElementById("muski");
let radioZenski = document.getElementById("zenski");
let radioNeopredeljen = document.getElementById("neopredeljen");
btnIspisiTekst.addEventListener("dblclick", ()=>{
    //1. nacin da vidimo na koje polje je kliknuto
    if(radioMuski.checked){
        console.log(`Osoba muskog pola`);
    } else if(radioZenski.checked){
        console.log(`Osoba zenskog pola`);
    } else {
        console.log("Osoba se nije opredelila");
    }

    //2. nacin bi bio takav da imamo situaciju da nesto sto je cekirano vratimo
    //opis: selektuj mi input polje ciji atribut name ima vrednost "pol" i pri tome je cekiran
    let checkedPol = document.querySelector("input[name='pol']:checked");
    console.log(`Osoba je ${checkedPol.value} pola`);

    //3. nacin
    //selektuj mi sve radio button po name atributu
    let polRadios = document.getElementsByName("pol");
    polRadios.forEach(radioButton =>{
        if(radioButton.checked){
            console.log(`Osoba je ${radioButton.value} pola`);
        }
    });

    //4. nacin
    //selektuj mi sve radio button po name atributu - querySelectorAll
    let polRadiosInput = document.querySelectorAll("input[name='pol']");
    polRadiosInput.forEach(rb =>{
        if(rb.checked){
            console.log(`Osoba ${rb.value} pola`);
        }
    });
});


//7. ZADATAK
let btnIzracunaj1 = document.getElementById("izracunaj1");
let btnIzracunaj2 = document.getElementById("izracunaj2");
let btnIzracunaj3 = document.getElementById("izracunaj3");
let inputKvadrat = document.getElementById("kvadrat");
let inputPrepolovi = document.getElementById("polovina");
let inputPovKruga = document.getElementById("povrsinaKruga");
let paragrafPrvi = document.getElementById("paragraf1");
let paragrafDrugi = document.getElementById("paragraf2");
let paragrafTreci = document.getElementById("paragraf3");



btnIzracunaj1.addEventListener("click", ()=>{
    let rezultat = inputKvadrat.value * inputKvadrat.value;
    paragrafPrvi.innerHTML += rezultat;
});

btnIzracunaj2.addEventListener("click", ()=>{
    let rezultat = inputPrepolovi.value / 2;
    paragrafDrugi.innerHTML = rezultat;
});

btnIzracunaj3.addEventListener("click", ()=>{
    let rezultat = Math.pow(inputPovKruga.value, 2) * Math.PI;
    paragrafTreci.innerHTML = rezultat;
});

//8. ZADATAK
