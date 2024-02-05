console.log(db);

let users = db.collection('users');
console.log(users);

let d1 = users.doc("andjelandreski");
console.log(d1);
let d2 = db.doc("users/andjelandreski");
console.log(d2);

/*
CRUD operacije - Create, Read, Update, Delete
Za pristup dokumentu:
let doc = db.collection("...").doc("....");
Kod dokumenta imamo sledece metode:
- doc.set(....) => Create
- doc.get(....) => Read
- doc.update(....) => Update
- doc.delete(....) => Delete
Sve ove 4 metode kao rezultat vracaju PROMISE zato sto je to asinhron poziv.
Nakon ovih poziva lancaju se .then() i .catch()
*/

/*1. Create (set) */
let cust1 = {
    name: "Mika",
    age: 38,
    addresses: ["Loznica", "Valjevo"],
    salary: 400.60
}; //JS objekat -  na osnovu njega kreiramo dokument u bazi

db.collection("customers").doc("cust1")
.set(cust1)
.then(() => {
    document.body.innerHTML += `Korisnik dodat u bazu`
})
.catch(e => {
    document.body.innerHTML += `Greska u ${e}`;
}
);