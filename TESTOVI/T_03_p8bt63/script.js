auto1 = {
    marka: `Fiat`,
    km: 80,
    godiste: 2008,
    vlasnici: [`Pera`, `Zika`, `Mika`]
}
auto2 = {
    marka: `Megan`,
    km: 200,
    godiste: 2016,
    vlasnici: [`Pera`, `Zika`, `Mika`]
    }
auto3 = {
    marka: `Golf`,
    km: 100,
    godiste: 2020,
    vlasnici: [`Pera`, `Zika`, `Mika`]
}
auto4 = {
    marka: `Audi`,
    km: 100,
    godiste: 2014,
    vlasnici: [`Pera`, `Zika`, `Mika`]
}
let nizAutomobila = [auto1, auto2, auto3, auto4];

let prosecnoGodiste = niz => {
    let suma = 0;
    let prosek = 0;
    for(let i = 0; i < niz.length; i++){
        suma += niz[i].godiste;
    }
    prosek = suma / niz.length;
    return Math.floor(prosek);
    
}
console.log(prosecnoGodiste(nizAutomobila));

let markaNajmanjeKm = (niz, marka) => {
    let najmanjaKm = niz[0].km;
    let autaIzabraneMarke = [];
    for(let i = 0; i < niz.length; i++){
        if(niz[i].marka === marka){
            autaIzabraneMarke.push(niz[i]);
        }
        if(najmanjaKm > niz[i].km){
            najmanjaKm = niz[i].km;
        }
    }
    console.log(autaIzabraneMarke);
    if(autaIzabraneMarke.length === 0){
        return null;
    }
    console.log(niz);
    let izabraniAuto = null;
    for(let i = 0; i < autaIzabraneMarke.length; i++){
        if(autaIzabraneMarke[i].km == najmanjaKm){
            if(izabraniAuto === null){
                izabraniAuto == autaIzabraneMarke[i];
            }
            if(izabraniAuto != null && izabraniAuto.godiste < autaIzabraneMarke[i].godiste){
                izabraniAuto == autaIzabraneMarke[i];
            }
        }
    }
}
console.log((markaNajmanjeKm(nizAutomobila, `Fiat`)));

let prosekKm10 = niz => {
    let datum = new Date();
    let trenutnaGodina = datum.getFullYear();
    let suma = 0;
    let br = 0;
    let prosek = 0;
    niz.forEach(auto => {
        let imaGodina = trenutnaGodina - auto.godiste;
        if(imaGodina < 10){
            suma += auto.km; 
            br++;
        }
    });
    prosek = suma / br;
    return prosek;
}
prosekKm10(nizAutomobila);
console.log(prosekKm10(nizAutomobila));

let rokfeler = (niz, ime) => {
    let br = 0;
    for(let i = 0; i < niz.length; i++){
        for(let j = 0; j < niz[i].vlasnici.length; j++){
            if(niz[i].vlasnici[j] == ime){
                br++;
            }
        }
    }
    if(br > 2){
        return true;
    } else {
        return false;
    }
}
console.log(rokfeler(nizAutomobila, `Pera`));

let skorije = niz => {
    let podelaNiza = niz.length / 2;
    let br = 1;
    let sumaStarijih = 0;
    let sumaMladjih = 0;
    let brStarijih = 0;
    let brMladjih = 0;
    for(let i = 0; i < niz.length; i++){
        if(br <= podelaNiza){
            sumaStarijih += niz[i].godiste;
            brStarijih++;
        } if( br > podelaNiza){
            sumaMladjih += niz[i].godiste;
            brMladjih++;
        }
        br++;
    }
    let prosecnoStarijih = sumaStarijih / brStarijih;
    let prosecnoMladjih = sumaMladjih / brMladjih;
    console.log(prosecnoStarijih);
    console.log(prosecnoMladjih);
    if(prosecnoMladjih > prosecnoStarijih){
        return true;
    } else {
        return false;
    }
}
console.log(skorije(nizAutomobila));
