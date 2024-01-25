function getUsers(resolve, reject){
    let request = new XMLHttpRequest(); //pobjekat
    request.addEventListener("readystatechange", function() {
    if(request.readyState === 4 && request.status === 200){
        //sve je u redu
        //1. dohvati podatke
        let data = JSON.parse(request.responseText); //uvek je string
        //2. pozovi callback funckjiju koja obradjuje podatke
        resolve(data);
    } else if(request.readyState === 4){
        //desila se greska
        reject(`Desila se greska`);
    }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.send();
}

function zad2(niz){
    niz.forEach(user => {
        if(user.website.includes(".com")){
            document.body.innerHTML += user.website + "<br>";
        }
    });
}

function ispisStringa(str){
    document.body.innerHTML += str + "<br>";
}

//zadatak 2
getUsers(zad2, ispisStringa); //poziv funkcije getUsers
document.body.innerHTML += "1" + "<br>";
document.body.innerHTML += "2" + "<br>";

//zadatak 2
getUsers(niz => {
    niz.forEach(user => {
        if(user.company.name.includes("Group") || user.company.name.includes("LLC")){
            document.body.innerHTML += user.company.name + "<br>";
        }
    });
}, poruka => {
    document.body.innerHTML += poruka + "<br>";
});
//da li cete callback funkciju pisati kao: imenovana, anonimna ili arroow je svejedno, najcesce je kao zadatak 3 ako samo u tom momentu treba ta callback funkcija