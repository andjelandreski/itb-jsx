class Auto {
    constructor(m, b, k){
        this.marka = m; // konstruktor treba da pozove setere i da on iskontrolise da su za svako polje na validan nacin postavljene - mnogo je binto gde pisemo donju crticu, gde ne. trebalo bi da je pisemo jedino u geterimo i seterim, svuda drugde pozivamo eter, ne treba direktno da pristupamo i da koristimo donju crticu. Pristupamo poljima jedino preko getera i setera!!!!!!!!
        this.boja = b;
        this.imaKrov = k;
    }
    // Konstruktor bi trebalo da radi dve stvari:
    //1) Da kaze koja polja ce imati svaki objekat te klase
    // (POLJA NAZIVAJTE SA POCETNOM DONJOM CRTOM)
    //2) Da postavi vrednosti za ta svojstva

    //metoda:
    sviraj() {
        console.log(`Auto marke ${this._marka} svira: Beep! Beep!`);
    }

    //Geteri i seteri
    //Svako polje moze (ne mora) da ima po jedan geter i po jedan seter
    //Geter: dohvata vrednost polja
    //Seter: postavlja vrednost polja

    //Seteri
    set marka(m) {
        if(m.length > 0){
            this._marka = m;
        } else {
            this._marka = "Skoda";
        }
        console.log(`pozvan je seter za polje _marka`);
    }

    set boja(b) {
        if(b.length > 0){
            this._boja = b;
        } else {
            this._boja = "crna";
        }
    }

    set imaKrov(k){
        if(k === true || k === false) {
            this._imaKrov = k;
        } else {
            this._imaKrov = false;
        }
    }

    //Geteri
    get marka() {
        return this._marka;
    }

    get boja() {
        return this._boja;
    }

    get imaKrov() {
        return this._imaKrov;
    }
}

export default Auto;