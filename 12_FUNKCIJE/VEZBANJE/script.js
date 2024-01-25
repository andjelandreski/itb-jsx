//Vezba 3
function neparan(n){
    if(n % 2 == 1){
        return `Broj je neparan`;
    }
    if(n % 2 == 0){
        return `Broj je paran`;
    }
}
console.log(neparan(51));


//Vezba 4
function maks2(br1, br2){
    if(br1 > br2){
        return br1;
    } else {
        return br2;
    }
}
console.log(maks2(100,23));

function maks4(b1, b2, b3, b4){
    if(b1 > b2){
        if(b1 > b3){
            if (b1 > b4){
                return b1;
            }        
        }
    } else if(b2 > b3){
        if(b2 > b4){
            return b2;
        }
    } else if(b3 > b4){
            return b3;
    } else {
        return b4;
    }
}
console.log(maks4(180, 190, 200, 340));

//DRUGI NACIN
const maks2Function = (broj1, broj2) => {
    if (broj1 > broj2) {
        return broj1;
    } else {
        return broj2;
    }
}
const maks4Function = (a, b, c, d) => {
    let veciPrvaDva = maks2Function(a, b);
    let veciDrugaDva = maks2Function(c, d);
    return maks2Function(veciPrvaDva, veciDrugaDva);
}
console.log(maks4Function(5, 7, 10, 15));
const maks4Function2 = (a, b, c, d) => {
    return maks2Function(maks2Function(a, b), maks2Function(c, d));
}
console.log(maks4Function2(20, 11, 16, 18));

//Vezba 5
function prikaziSliku(adresa) {
    document.write(`<img src="${adresa}">`)
}
prikaziSliku("1.jpg");
prikaziSliku("2.jpg");

//Vezba 5A (kompleksniji) sa id elementom u kome ta slika treba da se prikaze
function prikaziSlikuUElementu(putanja, id){
    let element = document.getElementById(id);
    element.innerHTML = `<img src="${putanja}">`;
}
prikaziSlikuUElementu("1.jpg", "slika1");


//Vezba 6
function obojiParagraf(boja) {
    document.write(`<p style= "color:${boja}">Ovo je paragraf, promeni mu boju.</p>`)
}
obojiParagraf("red");
obojiParagraf("rgb(200,100,100)");

//Vezba 7
function danUNedelji(n) {
    if (n % 7 == 0) {
        console.log(`Nedelja`);
    }
    else if (n % 7 == 1) {
        console.log(`Ponedeljak`);
    }
    else if (n % 7 == 2) {
        console.log(`Utorak`);
    }
    else if (n % 7 == 3) {
        console.log(`Sreda`);
    }
    else if (n % 7 == 4) {
        console.log(`Cetvrtak`);
    }
    else if (n % 7 == 5) {
        console.log(`Petak`);
    }
    else if (n % 7 == 6) {
        console.log(`Subota`);
    }
}
danUNedelji(4);

//Vezba 9
function sumiraj(n, m){
    let suma = 0;
    for (n = 1; n <= m; n++){
        suma += n;
    }
    return suma;
}
console.log(sumiraj(1,3));

//Vezba 10
function mnozi(n, m){
    let proizvod = 1;
    for (n = 1; n <= m; n++){
        proizvod *= n;
    }
    return proizvod;
}
console.log(mnozi(2, 5));

//Vezba 11
function aritmeticka(n, m){
    let suma = sumiraj(n, m);
    let br = 0;
    for (let i = n; i <= m; i++){
        br++;
    }
    return suma / br;
}
console.log(`Aritmeticka sredia je: ${aritmeticka}`);

//Vezba 12
function aritmetickaTri (n , m){
    let arithmeticMean = 0;
    let sum = 0;
    let counter = 0;
    for (i = n; i <= m; i++){
        if(i % 10 == 3){
            counter++;
            sum = sum + i;
        }
    }
    arithmeticMean = sum / counter;
    return arithmeticMean;
}
console.log(aritmetickaTri(10, 13));

//Vezba 13
function velicinaFonta(broj){
    let p = `<p style= "font-size: ${broj}px">Ovo je neki tekst</p>`;
    document.body.innerHTML += p;
}
velicinaFonta(90);

//Vezba 14
function recenica5(m){
    for(i = 1; i <= m; i++){
       document.body.innerHTML += recenica;
    }
}      let recenica = `<p style= "font-size: ${i}cm">Ovo je recenica velicine ${i} cm</p>`;
   
recenica5(5);

//Vezba 15a
    let n = 6;
    let a = 500;
    let d = 100;
function poslednjaPlata(){
    for (i = 2; i <= n; i++){
        a += d;
    }
    return a;
}
console.log(poslednjaPlata());

//Vezba 15b
    n = 6;
    a = 500;
    d = 100;
function ukupnaPlata (){
    let ukupno = 0;
    for (i = 1; i <= n; i++){
        ukupno += a;
        a += 100;
    }
    return ukupno;
}
console.log(ukupnaPlata());
/*15 a i b NA DRUGI NACIN
function poslednjaPlata (n, a, d){
    let zadnjaPlata = a + (n-1) * d;
    return zadnjaPlata;
}
console.log(`Poslednja plata zaposlenog je ${poslednjaPlata(4, 5, 1)} dinara`);
7:29
//b)
function ukupnaPlata (n, a, d){
    let suma = 0;
    for(let i = 0; i< n; i++){
        suma = suma + a + d * i;
    }
    return suma;
}
console.log(`Ukupna plata zaposlenog je ${ukupnaPlata(5, 10, 2)} dinara`);
15 a i b TRECI NACIN
/ 15. zadatak
7:31
function poslednjaPlata(n, a, d) {
  return a + (n - 1) * d;
}
console.log(poslednjaPlata(6, 1000, 100));
function ukupnaPlata(n, a, d) {
  return ((a + poslednjaPlata(n, a, d)) / 2) * n;
}
console.log(ukupnaPlata(3, 1000, 100));
*/

//Vezba 16
function igreBezGranica(t,p,n){
    if(t<p || t>p+n) {
        console.log(`Cekanje je 0s`);
    } else {
        let cekanje = p + n - t;
        console.log(`Takmicaru je potrebno da saceka ${cekanje}s.`);
    }
}
igreBezGranica(15, 20, 25);
igreBezGranica(15, 10, 12);












    