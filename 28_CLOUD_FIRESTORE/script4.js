//Dohvatanje dokumenata iz kolekcije po redosledu polja
//(dokument mora da sadrzi to polje da bi bio dohvacen)
//(ako ima vise od jednog polja, neophodno je prvo kreirati indeks)
/*
db.collection("users")
.orderBy("name", "desc") //desc - prikazuj od pozadi
.orderBy("age", "asc") // asc - prikazuj redom
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

///////////////////////////

//Dohvatanje odredjenog broja dokumenata (limitiranje)
/*db.collection("users")
.orderBy("name", "desc") //desc - prikazuj od pozadi
.orderBy("age", "asc") // asc - prikazuj redom
.limit(2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

/////////////////////////////

//Dohvatanje dokumenata koji zadovoljavaju odredjene uslove(filtriranje)


//Dohvati sve klijente koji imaju platu vecu ili jednaku od 500
/*db.collection("customers")
.where("salary", ">=", 50)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/


//Dohvati sve klijente koji imaju platu izmedju 300 i 800
/*
db.collection("customers")
.where("salary", ">=", 300)
.where("salary", "<=", 800)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Dohvati sve klijente koji imaju platu manju od 900 i imaju 30 godina
/*
db.collection("customers")
.where("salary", "<=", 900)
.where("age", "==", 30)
.orderBy("salary")
.orderBy("name")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/

/*Doohvati sve klijente koji imaju preko 25 godina sortirana po imenu
db.collection("customers")
.where("age", ">", 25)
.orderBy("age")
.orderBy("name")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/

/*Doohvati sve klijente koji imaju adresu u Nisu
db.collection("customers")
.where("addresses", "array-contains", "Nis")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/

/*Doohvati sve klijente koji imaju adresu u Nisu ili Bgu
db.collection("customers")
.where("addresses", "array-contains-any", ["Nis", "Beograd"])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/

//Doohvati sve klijente koji imaju 22, 25 ili 28 godina
/*db.collection("customers")
.where("age", "in", [22, 25, 28])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/


//Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
/*db.collection("tasks")
.orderBy("title", "asc") // asc - prikazuj redom
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/

//Iz kolekcije tasks, pročitati sve zadatke, i koji su prioritetni
/*db.collection("tasks")
.where("priority", "==", true)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});*/


//Iz kolekcije tasks, pročitati sve zadatke, i koji treba da se izvrše u tekućoj godini
/*
let datum = new Date();
let godina = datum.getFullYear(); //tekuca godina
let datum1 = new Date(godina, 0, 1); //1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); //1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection("tasks")
.where("due_date", ">=", ts1)
.where("due_date", "<", ts2)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

/*
Iz kolekcije tasks, pročitati sve zadatke, i koji su završeni
let datum = new Date();
//let ts1 = firebase.firestore.Timestamp.fromDate(datum);

db.collection("tasks")
.where("due_date", "<=", datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

/*
Iz kolekcije tasks, pročitati sve zadatke, i koji tek treba da počnu
let datum = new Date();
//let ts1 = firebase.firestore.Timestamp.fromDate(datum);

db.collection("tasks")
.where("start_date", ">=", datum)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije movies, pročitati sve filmove koje je režirao George Lucas
/*
db.collection("movies")
.where("director.ime", "==", "Dzoel")
.where("director.prezime", "==", "Zvik")
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije movies, pročitati sve filmove cija je ocena između 5 i 10,
/*
db.collection("movies")
.where("rating", "<=", 10)
.where("rating", ">=", 5)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije movies, pročitati sve filmove kojima je žanr komedija, tragedija ili drama
/*
db.collection("movies")
.where("genres", "array-contains-any", ["komedija", "tragedija", "drama"])
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Iz kolekcije movies, pročitati sve filmove koji su izašli u 21. veku.
/*
db.collection("movies")
.where("release_year", ">=", 2001)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});
*/

//Prikazati sve informacije o najbolje rangiranom filmu.
db.collection("movies")
.orderBy("rating", "desc")
.limit(1)
.get()
.then(snapshot => {
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    });
})
.catch(err => {
    console.log(`Error: ${err}`);
});

//Prikazati sve informacije o najslabije rangiranoj drami.
db.collection("movies")
    .where("genres", "array-contains", "romansa")
    .orderBy("rating", "asc")
    .limit(1)
    .get()
    .then(snapshot => {
    snapshot.forEach(doc => {
      let data = doc.data();
      console.log(data);
    });
    })
    .catch(err => {
    console.log(`Error: ${err}`);
});

