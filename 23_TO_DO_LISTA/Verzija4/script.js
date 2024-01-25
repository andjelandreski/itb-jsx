let liZadaci = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit")
let inputZadatka = document.querySelector("#task");
let ulZadaci = document.querySelector("ul");
let radioPocetak = document.querySelector("#pocetak");
let radioKraj = document.querySelector("#kraj");

let nizZadataka = [];
if(localStorage.getItem("zadaci") == null) {
    //jos uvek ne postoje
    localStorage.getItem("zadaci", JSON.stringify(nizZadataka));
} else {
    //postoje zadaci u memoriji i treba ih ispisati na stranici
    nizZadataka = JSON.parse(localStorage.getItem("zadaci")); //pretvaram iz stringa u niz
    nizZadataka.forEach(zad => {
        let liZad = document.createElement("li"); //kreiramo novi li element
        liZad.textContent = zad; //upisujemo u <li> tekstualni sadrzaj, tj. tekst zadatka
        ulZadaci.appendChild(liZad); //dodajemo <li> na kraj <ul>
    });
}

ulZadaci.addEventListener("click", e => {
    //console.log(`Kliknuto na <ul>`);
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.tagName);
    if(e.target.tagName == "LI"){
        //e.target.classList.toggle("precrtaj");
        e.target.remove(); //remove sklanja iz DOM-a
        let indeksElementa = nizZadataka.indexOf(e.target.textContent); //trazimo indeks kliknutog
        nizZadataka.splice(indeksElementa, 1); //izbrisemo taj element iz niza
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka)); //unesemo u LM
    } //toggle je kao prekidac za struju
});

inputZadatka.addEventListener("keyup", e => {
    e.preventDefault();
    console.log(e.keyCode);

    //ako je neko kliknuio na taster enter
    if(e.keyCode == 13){
        if(inputZadatka.value.trim() != "") {
            let tekstZadatka = inputZadatka.value;
            let liNoviZadatak = document.createElement("li");
            liNoviZadatak.innerHTML = tekstZadatka; // ili .innerHTML ili .textContent ili .innerText
            if(radioPocetak.checked == true){
                //ulZadaci.insertBefore(liNoviZadatak, ulZadaci.children[0]); 
    
    
                //profesorkin nacin:
                //let radioDodaj = document.querySelector("input[name='add']:checked");
    
                ulZadaci.prepend(liNoviZadatak); //profesorkin nacin
                nizZadataka.unshift(tekstZadatka); //dodajemo na pocetak niza
            }
            if(radioKraj.checked == true){
                ulZadaci.appendChild(liNoviZadatak);
                nizZadataka.push(tekstZadatka); //dodajemo na kraj niza
            }
        }
        localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
        inputZadatka.value = "";
    }

    
});





