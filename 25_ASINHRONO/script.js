const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function() {
    if(request.readyState == 4 && request.status == 200){
        let data = JSON.parse(request.responseText);
        console.log(data);
        console.log(data[5]);
    } else if(request.readyState == 4){
        console.log("Desila se greska");
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();

///////////////////////
//2
const request2 = new XMLHttpRequest();
request2.addEventListener("readystatechange", function() {
    if(request2.readyState == 4 && request2.status == 200){
        let data = JSON.parse(request2.responseText);
        console.log(data);
        let dataPrikaz =[];
        data.forEach(element => {
            if(element.website.includes(".com")){
                dataPrikaz.push(data);
            }
        });
        console.log(dataPrikaz);
    } else if(request.readyState == 4){
        console.log("Desila se greska");
    }
});
request2.open("GET", "https://jsonplaceholder.typicode.com/users");
request2.send();
/*njihov nacin
const usersResurs1 = new XMLHttpRequest();
usersResurs1.addEventListener("readystatechange", function() {
    if (usersResurs1.readyState == 4 && usersResurs1.status == 200) {
        let data = JSON.parse(usersResurs1.responseText);
        data.forEach(user => {
            if (user.website.endsWith(".com")) {
                console.log(user);
            }
        });
    }
    else if (usersResurs1.readyState == 4) {
        console.log(`Desila se greska ${usersResurs1.status}`);
    }
});
usersResurs1.open('GET', 'https://jsonplaceholder.typicode.com/users');
usersResurs1.send();*/

//3
const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function() {
    if(request3.readyState == 4 && request3.status == 200){
        let data = JSON.parse(request3.responseText);
        let nizImena =[];
        data.forEach(element => {
            if(element.name.includes("Clementin")){
                nizImena.push(element.name);
            }
        });
        console.log(nizImena);
    } else if(request.readyState == 4){
        console.log("Desila se greska");
    }
});
request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

//4 URADI SAMA
//5 URADI SAMA
//6 URADI SAMA

//Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group", ili reč „LLC".
/*const request3 = new XMLHttpRequest();
request3.addEventListener("readystatechange", function () {
  if (request3.readyState === 4 && request3.status === 200) {
    let data = JSON.parse(request3.responseText);
    console.log("Cetvrti zadatak");
    data.forEach(user => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user);
      }
    });
  } else if (request3.readyState === 4) {
    console.log("Desila se greska");
  }
});

request3.open("GET", "https://jsonplaceholder.typicode.com/users");
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.
const request4 = new XMLHttpRequest();
request4.addEventListener("readystatechange", function () {
  if (request4.readyState === 4 && request4.status === 200) {
    let data = JSON.parse(request4.responseText);
    console.log("Peti zadatak");

    let gradovi = [];
    data.forEach(user => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        if (gradovi.includes(user.address.city) === false)
          gradovi.push(user.address.city);
      }
    });
    console.log(gradovi);
  } else if (request4.readyState === 4) {
    console.log("Desila se greska");
  }
});

request4.open("GET", "https://jsonplaceholder.typicode.com/users");
request4.send();

// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
const request5 = new XMLHttpRequest();
request5.addEventListener("readystatechange", function () {
  if (request5.readyState === 4 && request5.status === 200) {
    let data = JSON.parse(request5.responseText);
    console.log("Sesti zadatak");

    let suma = 0;
    data.forEach(user => {
      if (
        Number(user.address.geo.lat) < 0 &&
        Number(user.address.geo.lng) < 0
      ) {
        suma++;
      }
    });
    console.log(suma);
  } else if (request5.readyState === 4) {
    console.log("Desila se greska");
  }
});

request5.open("GET", "https://jsonplaceholder.typicode.com/users");
request5.send();
*/
