class Film { //klase se nazivaju velikim pocetnim slovom
    /*
    naslov = "Cuvari folmure";
    reziser = "Dragan Bjelogrlic";
    godinaIzdanja = 2023;
    */

    //konstruktor je jedna specificna metoda: ona se okida kada kazes kljucnu rec "new" i navedes klasu koju pozivas. To je kao neka forma za popunjavanje, ona je prazna, to je sablon, i onda se konstruktoru prosledjuju podaci i on popuni te sablone.
    constructor(n, r, g, o) {
        //pisemo this zato sto ovde sugerisemo da je ovaj (npr. "naslov") - ovo polje unutar ove odredjene klase
        /*
        this._naslov = n; kada imenujes polja uobicajeno je da se stavi ispred kljucne reci donja crtica
        */
        this.naslov = n; //seter metoda se poziva BEZ donje crtice, sa donjom crtom postavlja vrednost direktno u polje, kada NEMA donju crticu onda poziva metod i prosledjuje mu jedan podatak iza znaka jednakosti
        //ovo je sada seter
        this.reziser = r; 
        this.godinaIzdanja = g;
        this.ocene = o;
    }
    //za postavljanje vrednosti koristimo SETERE
    //on setuje neku vrednost koja mu se prosledi, sluzi da negde postavi vrednost i da ogranici koje vrednosti se postavljaju i unose. Seter proveri/filtrira informacije i tek onda postavi vrednost
    //seteri - set metode
    set naslov(n) {
        this._naslov = n; //ovo je sada properti i mi se trudimo da ga zastitimo preko setera
    }

    set reziser(r) {
        this._reziser = r;
    }

    set godinaIzdanja(gi) {
        if(gi < 1800){
            this._godinaIzdanja = 1800;
        } else {
            this._godinaIzdanja = gi;
        }
    }

    set ocene(o) {
        for(let i = 0; i < o.length; i++){
            if(o[i] < 5 || o[i] > 10 || o[i] != Math.ceil(o[i])){
                o[i] = 5;
            }
        }
        this._ocene = o;
    }

    //geteri -  sluze da nam vrate vrednosti polja
    get naslov() {
        return this._naslov;
    }

    get reziser () {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    get ocene() {
        return this._ocene;
    }
    //metode(funkcija u klasi se zove metoda)
    stampaj () {
        console.log(`Naslov: ${this.naslov}`); //mora da se koristi "this." //ovo poziva geter za naslov
    }

    prosecna() {
        let suma = 0;
        let prosecna = 0;
        this.ocene.forEach(elem => {
            suma += elem;
        });
        prosecna = suma / this.ocene.length;
        return prosecna;
    }
}

export default Film;

/*let film1 = new Film("Cuvari formule", "Dragana Bjelogrlic", 2023); // objekat/primerak(instanca) klase film
let film2 = new Film("Klopka", "Srdan Golubovic", 2007);
console.log(film1);
console.log(film2);
film1.stampaj();
film1.godinaIzdanja = 2024; //ovo poziva seter
console.log(film1);
console.log(`Film: ${film2.naslov}, Godina izdanja:${film2.godinaIzdanja}`);

let filmovi = [film1, film2];*/

