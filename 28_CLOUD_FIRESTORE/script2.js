class User {
    constructor(n, s, a){
        this.name = n;
        this.surname = s;
        this.age = a;
    }
}

let branko = new User("Branko", "Milivojevic", 27);
branko.grad = "Paracin";
/*branko.potpis = function() {
    console.log(this.name, this.surname);
    //dodavanje metode
}
branko.potpis(); //poziv metode*/
let ivan = new User("Ivan", "Stanimirovic", 37);
ivan.poreklo = "Leskovac";

User.prototype.bojaKose = "crna";



db.collection("users").doc("cust04")
.set(Object.assign({}, branko))
.then(()=> {
    console.log(`uspesno dodat user`);
})
.catch((e) => {
    console.log(`greska ${e}`);
});

db.collection("users").doc("istanimirovic")
.set(Object.assign({}, ivan))
.then(()=> {
    console.log(`uspesno dodat user`);
})
.catch((e) => {
    console.log(`greska ${e}`);
});
//JS poziva set metodu kojoj se prosledjuje JS OBJEKAT
//Na osnovu tog objekta se u bazi kreira novi dokument

/*
JS OBJEKAT:
1) Moze za poseban objekat da se dodaju polja i metode (kao i za dokumenta u bazi)
2) Moze klasi kojoj pripada objekat da se dodaju polja i metode
3) Moze da se nasledjuju klase (najbolje resenje/najprofesionalnije)

Primer:
HTML: Forma gde se unose korisnici
Za sve korisnike pamtimo ime, prezime, godine
Ako korisnik odabere karticu kao nacin pretplate, za te korisnike pamtiti i broj kartice
*/