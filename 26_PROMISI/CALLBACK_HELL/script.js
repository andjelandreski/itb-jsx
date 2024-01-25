let getJSON = (resource, callback) => {
    //1.kreiranje XML objekta
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200){
        //sve je ok
        let data = JSON.parse(request.responseText);
        callback(data, undefined);
    } else if(request.readyState == 4){
        //nesto nije ok
        callback(undefined, "Desila se greska");
    }
    });

    //2. otvaramo kreirani zahtev
    request.open("GET", resource);

    //3. slanje zahteva
    request.send();
}

getJSON("../JSON/prvi.json", (data, err) => {
    if(data){
        console.log(data); //sve je proslo ok i vraca podatke (data)
        //ako je sve bilo ok u prvi.json i vraca podatke iz prvi.json 
        //ako je sve bilo ok sa prvim fajlom onda uzmi drugi.json
        getJSON("../JSON/drugi.json", (data, err) => {
            if(data){
                console.log(data); //sve je proslo ok i drugi.json
                getJSON("../JSON/treci.json", (data, err) => {
                    if(data){
                        //sve je proslo ok u treci.json
                        console.log(data);
                    } else {
                        //ispisuje gresku u treci.json
                        console.log(err);
                    }
                });
            } else {
                console.log(err); //ispisuje gresku za drugi.json
            }
        });
    } else {
        console.log(err); //ispisuje gresku za prvi.json
    }
});


console.log("kraj fajla");