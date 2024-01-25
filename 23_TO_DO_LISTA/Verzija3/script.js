let liZadaci = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit")
let inputZadatka = document.querySelector("#task");
let ulZadaci = document.querySelector("ul");
let radioPocetak = document.querySelector("#pocetak");
let radioKraj = document.querySelector("#kraj");


ulZadaci.addEventListener("click", e => {
    //console.log(`Kliknuto na <ul>`);
    //console.log(e);
    //console.log(e.target);
    //console.log(e.target.tagName);
    if(e.target.tagName == "LI"){
        //e.target.classList.toggle("precrtaj");
        e.target.remove(); //remove sklanja iz DOM-a
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
            }
            if(radioKraj.checked == true){
                ulZadaci.appendChild(liNoviZadatak);
            }
        }
        
        inputZadatka.value = "";
    }

    
});





