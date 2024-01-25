let getJSON = resource => {

    const request = new XMLHttpRequest(); //1.kreiranje XML objekta

    request.open("GET", resource); //2. otvaramo kreirani zahtev

    request.send(); //3. slanje zahteva

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", function() {
            if(request.readyState == 4 && request.status == 200){
                //sve je ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState == 4){
                //nesto nije ok
                reject("Doslo je do greske")
            }
        });
    });
}

getJSON("../JSON/prvi.json").then( sadrzaj => {
    console.log("prvi.json", sadrzaj);
    return getJSON("../JSON/drugi.json"); //vraca instancu promise, koja moze imati .then i .catch
}).then(sadrzaj2 => {
    console.log("drugi.json", sadrzaj2); //ako je drugi.json resolved onda ispisuje njegove podatke
    return getJSON("../JSON/treci.json");
}).then(sadrzaj3 => {
    console.log("treci.json", sadrzaj3); //ako je treci.json resolved onda ispisuje njegove podatke
}).catch(greska => {
    console.log(greska); //ako je ma jedan fajl bio rejected, upada u catch granu
});

console.log("kraj fajla");