let blog1 = {
    title: "HTML",
    content: "osnovni html tagovi",
    author: "Andjela",
    likes: 10,
    comments: true
};

//Ispis objekta
console.log(blog1);
console.log(typeof blog1);

//Ispis odredjene osobine
console.log(blog1.title);
console.log(blog1.author);
console.log(blog1[`content`]);

//Izmena odredjene osobine
blog1.content = "HTML tabele";
console.log(blog1.content);
blog1[`content`] = "HTML liste";
console.log(blog1.content);
blog1.likes = 7;
blog1.comments = false;
console.log(blog1);

///////////////////////////////////////

let user1 = {
    username: "Andjela Andreski",
    age: 25,
    blogs: ["Naredba grananja", "Nizovi", "Objekti"],
    login: function() {
        console.log(`Ulogovani ste`);
    },
    logout: function() {
        console.log(`Izlogovani ste`);
    },
    logBlogs: function() {
        this.blogs.forEach ( element => {
            console.log(element);
        });
    },
    hello: function() {
        return `Hello ${this.username}`;
    }
}
user1.login();
user1.logout();
user1.logBlogs();
console.log(user1.hello());
console.log(this);

user1.blogs.forEach(blog => {
    document.write(`<p>${blog}</p>`)
});

///////////////////////////////////////
let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [3, 4, 6, 7, 6, 4],
    //1.
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
           suma += t; 
        });
        return suma / this.temperature.length;
    },
    //2.
    brNatProsecnih: function() {
        let br = 0;
        let pros = this.prosecna();
        this.temperature.forEach(t => {
            if(t > pros){
                br++;
            }
        });
        return br;
    },
    //3.
    maksTemperatura: function() {
        let maks = this.temperature[0];
        this.temperature.forEach(t => {
            if(maks < t){
                maks = t;
            }
        });
        let br = 0;
        this.temperature.forEach(t => {
            if(t == maks){
                br++;
            }
        });
        return br;

    },
    //4.
    brojMerenja: function(t1, t2) {
        let br = 0;
        //ciljano da u t1 bude manja vrendost, a u t2 veca
        //cilj t1 < t2
        if (t1 > t2){
            let pomocnaPromenljiva = t1; //pomocna casa za premestanje sokova :D
            t1 = t2;
            t2 = pomocnaPromenljiva;
        }

        this.temperature.forEach(t => {
            if(t > t1 && t < t2){
                br++;
            }
        });
        return br;
    },
    //5.
    tempIznadPros: function() {
        let prosecnaTemp = this.prosecna();
        let br1 = 0;
        let br2 = 0;
        this.temperature.forEach(t => {
            if(t > prosecnaTemp){
                br1++;
            } else if(t < prosecnaTemp){
                br2++;
            }
        });
        if(br1 > br2){
            return true;
        } else {
            return false;
        }
    },

    //5 profesorkin nacin
    iznadProsekaUVeciniDana: function () {
        let brDana = this.brNatProsecnih();
        if(brDana > this.temperature.length / 2){
            return true;
        } else {
            return false;
        }
    },
    /*
    Jos jedno resenje 5og:
    temperatureIznadProseka: function() {
        return (this.brNatprosecnih() > this.temperature.length / 2) ? true : false
    },
     */

    //6.
    ledenDan: function() {
        br = 0;
        this.temperature.forEach(t => {
            if(t < 0){
                br++;
            }
        });
        if(br > 0){
            return true;
        } else {
            return false;
        }
    },

    //6. profesorkin nacin
    //prvi pristup preko FOREACH petlje
    leden: function() {
        let ledenDan = true;
        this.temperature.forEach(t => {
            if(t > 0) {
                ledenDan = false;
            }
        });
        return ledenDan;

        /*drugi pristup preok FOR petlje
        for(let i = 0; i < this.temperature.length;  i++){
            if(this.temperature[i] > 0){
                return false; //kada se ovo jednom izvrsi, funkcija se dalje NE nastavlja
            }
        }
        return: true;
        */
    },
    
    //8
    nepovoljan: function() {
        for(let i = 0; i < this.temperature.length-1; i++){
            if(Math.abs(this.temperature[i]-this.temperature[i+1]) > 8){
                return true;
            }
        }
        return false;
    }


};
console.log(`Prosecna temperatura je: ${dan1.prosecna()}`);
console.log(`Broj natprosecnih merenja u danu je: ${dan1.brNatProsecnih()}`);
console.log(`Broj merenja sa maksimalnom temperaturom je: ${dan1.maksTemperatura()}`);
console.log(`Broj merenja izmedju zadatih temperatura je: ${dan1.brojMerenja(3, 6)}`);
console.log(dan1.tempIznadPros());
console.log(dan1.iznadProsekaUVeciniDana());
console.log(dan1.ledenDan());
console.log(dan1.leden());
console.log(dan1.nepovoljan());