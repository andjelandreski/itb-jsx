//KREIRAJ KLASU PACIJENT
class Pacijent {
    constructor(i, v, t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    set ime(i) {
        this._ime = i;
    }    

    set visina(v){
        if(v > 0 && v < 250){
            this._visina = v;
        } else {
            this._visina = 1.80;
        }
        
    }

    set tezina(t) {
        if(t > 0 && t < 550){
            this._tezina = t;
        } else {
            this._tezina = 65;
        }
    }

    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }

    Stampaj() {
        console.log(`Svi podaci o pacijentu: Ime: ${this.ime}, visina: ${this.visina}, tezina: ${this.tezina}`);
    }

    Bmi() {
        let bmi = this.tezina / (this.visina * this.visina);
        return bmi;
    }

    Kritican() {
        if(this.Bmi() < 15 || this.Bmi() > 40){
            return true;
        } else {
            return false;
        }
    }
}

export default Pacijent;