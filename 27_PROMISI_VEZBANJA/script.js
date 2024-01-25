const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

/*
1) Odrediti artikle koji vis enisu na stanju
2) Odrediti ukupnu tezinu svih tih artikala
3) Ako je ta tezina manja od kapaciteta kamiona, onda:
    3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
    3.2) Inace ispisati poruku d akamion nema trazeni kapacitet
*/

function dohvatiZalihe(){
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            //sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            //ovde ide kod koji obradjuje zalihe
        } else if(request.readyState === 4) {
            //desila se neka greska
            console.log(`desila se greska`);
        }
    });
    request.open("GET","JSON/stock.json");
    request.send();
}

function dohvatiTezine(){
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            //sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            //ovde ide kod koji ovradjuje tezine
        } else if(request.readyState === 4) {
            //desila se neka greska
            console.log(`desila se greska`);
        }
    });
    request.open("GET", "JSON/weights.json");
    request.send();
}

function dohvatiCene(){
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            //sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            //ovde ide kod koji ovradjuje cene
        } else if(request.readyState === 4) {
            //desila se neka greska
            console.log(`desila se greska`);
        }
    });
    request.open("GET", "JSON/prices.json");
    request.send();
}

//OVAJ PRISTUP NIJE TACAN:
dohvatiZalihe();
// cekaj da se zavrsi asinhrona funkcija
dohvatiTezine();
//cekaj da se zavrsi asinhrona funkcija
dohvatiCene();
//cekaj da se zavrsi asinhrona funkcija
//ispisi ukupnu cenu
//Nama su potrebne komande koje cekaju da se ivrse asinhrone funkcije da bi se krenulo sa pozivom druge funkcije




function getItems(resource, resolve, reject){
    //sta znaci ovo u zagradama: (kom resuru pristupam, sta radim ako je sve u redu, sta radim ako je greska)
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200){
            //sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState === 4) {
            //desila se neka greska
            reject(`Desila se greska`);
        }
    });
    request.open("GET", resource);
    request.send();
}
/*
function subimtFormVarijanta1(event) {
    event.preventDefault();
    //1) Odrediti artikle koji vise nisu na stanju
    let nizArtikala = [];
    getItems("JSON/stock.json", (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0){
                nizArtikala.push(artikal.id);
            }
        });
        console.log(nizArtikala);
        //2) Odrediti ukupnu tezinu svih tih artikala
        getItems("JSON/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)){
                    totalWeight += artikal.weight;
                }
            });
            //3) Ako je ta tezina manja od kapaciteta kamiona
            if(totalWeight <= Number(capacity.value)){
                //3.1) Odrediti i ispisati ukupnu cenu svih tih artikala
                getItems("JSON/prices,json", (data) => {
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if(nizArtikala.includes(artikal.id)) {

                        }
                    });
                    div.innerHTML = `total price of article: ${totalPrice;
                },
                });
            
             } else {
                //3.2) Inace ispisati poruku d akamion nema trazeni kapacitet
                div.innerHTML = `Not enough capacity in truck!!`;
            }
        }, (msg) => {
            div.innerHTML = msg;
        });
    }, (msg) => {
        div.innerHTML = msg;
    });
    
}*/

function submitFormVarijanta1(e) {
    e.preventDefault();
    let nizArtikala = [];
    getItems("JSON/stock.json", (data)=>{
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                nizArtikala.push(artikal.id)
            }
        });
        getItems("json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalWeight+= artikal.weight;
                }
            })
            if(totalWeight <= Number(capacity.value)) {
                getItems("JSON/prices.json",(data)=>{
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if(nizArtikala.includes(artikal.id)) {
                         totalPrice += artikal.price;
                        }
                    })
                    div.innerHTML = `Total price of articles: ${totalPrice}`
                    }, (msg)=>{});
                } else {
                div.innerHTML = "Not enough capacity in truck!!"
            }
        }, (msg) => {div.innerHTML = msg})
        console.log(nizArtikala);
    }, (msg) => {
        div.innerHTML = msg;
    })
}

form.addEventListener("submit", submitFormVarijanta1);