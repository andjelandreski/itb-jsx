const form = document.querySelector("#order");
const capacity = document.querySelector("#capacity");
const div = document.querySelector("#result");

function getItemsReturnPromise(resource){
    return new Promise((resolve, reject) => {
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
    });
}

async function clickGetItems(){
    let data1 = await getItemsReturnPromise("JSON/stock.json");
    let nizArtikala = [];
    data1.forEach(artikal => {
        if(artikal.stock == 0){
            nizArtikala.push(artikal.id);
        }
    });
    
    let data2 = await getItemsReturnPromise("JSON/weights.json");
    let totalWeight = 0;
    data2.forEach(artikal => {
        if(nizArtikala.includes(artikal.id)){
            totalWeight += artikal.weight;
        }
    });
    
    if(totalWeight <= Number(capacity.value)){
        let data3 = await getItemsReturnPromise("JSON/prices.json");
        let totalPrice = 0;
        data3.forEach(artikal => {
            if(nizArtikala.includes(artikal.id)){
                totalPrice += artikal.price;
            }
        });
        return totalPrice;
    } else{
        return "Not enough capacity in track!!";
    }
}

function submitFormVarijanta3(event){
    event.preventDefault();
    clickGetItems()
    .then(data => {
        div.innerHTML = data
    })
    .catch(err => {
        div.innerHTML = `Greska: ${err}`;
    });
}

form.addEventListener("submit", submitFormVarijanta3);