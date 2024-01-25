import Film  from "./film.js";

let film1 = new Film("Cuvari  formule", "Dragan Bjelogrlic", 2023, [9, 10, 8, 8, 6, 10, 10, 9]);
let film2 = new Film("Klopka", "Srdan Golubovic", 2007, [9, 9, 9, 8, 7, 10, 10, 8, 6]);
let film3 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982, [8, 9.1, -8, 18, 9]);
let filmovi = [film1, film2, film3];

film1.stampaj();
filmovi[2].stampaj();

console.log(`Ispis for petljom:`);
for(let i = 0; i < filmovi.length; i++){
    filmovi[i].stampaj();
}

console.log(`Ispis forEach petljom:`);
filmovi.forEach(f => {
    f.stampaj();
});

console.log(film3);

console.log(`Prosecna ocena filma ${film1.naslov} je: ${film1.prosecna
()}`);

//vekovi: 
//1801-1900 - 19. vek
//1901-2000 - 20. vek
//2001-2100 - 21. vek
let vekFilmova = (filmovi, vek) => {
    filmovi.forEach(f => {
        //proba da li radi za vek:
        // 1801/100 = 18.01 = Math.ceil 19
        // 1850/100 = 18.5 = Math.ceil 19
        // 1900/100 = 19 = Math.ceil 19
        let vekFilma = Math.ceil(f.godinaIzdanja / 100);
        if(vekFilma == vek){
            f.stampaj();
        }
    });
}
vekFilmova(filmovi, 21);

let prosecnaOcena = niz => {
    let suma = 0;
    let br = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            suma += o;
            //br++; //prvi nacin
        });
        br += f.ocene.length; //drugi nacin
    });
    return suma / br;
}
console.log(`Prosecna ocena svih filmova je: ${prosecnaOcena(filmovi)}`);

let najcescaOcena = niz => {
    let br5 = 0; 
    let br6 = 0;
    let br7 = 0;
    let br8 = 0;
    let br9 = 0;
    let br10 = 0;
    niz.forEach(f => {
        f.ocene.forEach(o => {
            /*if(o == 5){
                br5++;
            }
            if(o == 6){
                br6++;
            }
            if(o == 7){
                br7++;
            }
            if(o == 8){
                br8++;
            }
            if(o == 9){
                br9++;
            }
            if(o == 10){
                br10++;
            }*/
            switch(o) {
                case 5:
                    br5++;
                    break;
                case 6:
                    br6++;
                    break; 
                case 7:
                    br7++;
                    break;
                case 8:
                    br8++;
                    break;
                case 9:
                    br9++;
                    break;  
                case 10:
                    br10++;
                    break;
            }
        });
    });
    let nizBrojevaOcena = [br5, br6, br7, br8, br9, br10];
    let maxOc = nizBrojevaOcena[0];
    let maxIndex = 0;
    for(let i = 0; i < nizBrojevaOcena.length; i++){
        if(maxOc <= nizBrojevaOcena[i]){
            maxOc = nizBrojevaOcena[i];
            maxIndex = i;
        }
    }
    console.log(nizBrojevaOcena);
    return maxIndex + 5;
}
console.log(najcescaOcena(filmovi));

let iznadOcene = (ocena, niz) => {
    let filmoviIznadOc = [];
    niz.forEach(f => {
        if(f.prosecna() > ocena){
            filmoviIznadOc.push(f);
        }
    });
    return filmoviIznadOc;
}
console.log(iznadOcene(7, filmovi));

let iznadOceneNoviji = (ocena, niz) => {
    let iznadOcene = [];
    niz.forEach(f => {
        if(f.prosecna() > ocena){
            iznadOcene.push(f);
        }
    });
    let noviji = iznadOcene[0];
    for(let i = 0; i < iznadOcene.length; i++){
        if(noviji.godinaIzdanja < iznadOcene[i].godinaIzdanja){
            noviji = iznadOcene[i];
        }
    }
    return noviji;
}
console.log(iznadOceneNoviji(8, filmovi));

let najboljeOcenjeniFilm = niz => {
    let najboljeOcenjen = niz[0]; // objekat film
    let najboljaOcena = najboljeOcenjen.prosecna(); //ovo je vrednost pros. ocene
    niz.forEach(film => {
        if(film.prosecna() > najboljaOcena){
            najboljaOcena = film.prosecna();
            najboljeOcenjen = film;
        }
    });
    return najboljeOcenjen;
}
console.log(`Najbolje ocenjen film je: ${najboljeOcenjeniFilm(filmovi).naslov}`);

//OVAJ ZADATAK PONOVI!!!!
let osrednjiFilm = niz => {
    let nekiFilm = niz[0];
    let prosecnaOcenaSvihFilmova = prosecnaOcena(niz);
    let najmanjaProsecnaOcena = niz[0].prosecna();
    let najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - najmanjaProsecnaOcena);

    niz.forEach(film => {
        if(Math.abs(prosecnaOcenaSvihFilmova - film.prosecna()) < najmanjaRazlika) {
            nekiFilm = film;
            najmanjaRazlika = Math.abs(prosecnaOcenaSvihFilmova - film.prosecna());
        }
    });
    return nekiFilm;
}
console.log(osrednjiFilm(filmovi));

let najmanjaOcenaNajboljeg = niz => {
    let najboljiFilm = najboljeOcenjeniFilm(niz);
    let najmanjaOcena = najboljiFilm.ocene[0];
    najboljiFilm.ocene.forEach(o => {
        if(o < najmanjaOcena){
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(`Najmanja ocena najbolje ocenjenog filma je:  ${najmanjaOcenaNajboljeg(filmovi)}`);

//1. nacin
let najmanjaOcena = niz => {
    let sveOcene = [];
    niz.forEach(f => {
        f.ocene.forEach(o => {
            sveOcene.push(o);
        });
    });
    let najmanjaOcena = sveOcene[0];
    sveOcene.forEach(o => {
        if(najmanjaOcena > o){
            najmanjaOcena = o;
        }
    });
    return najmanjaOcena;
}
console.log(najmanjaOcena(filmovi));
//2. nacin
let najmanjaOcena2 = niz => {
    let minOcena = niz[0].ocene[0];
    niz.forEach(f => {
        f.ocene.forEach(o => {
            if(o < minOcena) {
                minOcena = o;
            }
        });
    });
    console.log(minOcena);
}
najmanjaOcena2(filmovi);