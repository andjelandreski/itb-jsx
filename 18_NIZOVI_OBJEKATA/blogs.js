console.log("Nizovi objekata");

let blog1 = {
    title: "IF naredba grananja!",
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: "WHILE petlja",
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: "For petlja",
    likes: 100,
    dislikes: 12
};
let arrBlogs = [blog1, blog2, blog3];

//Ispis niza objekta
console.log(arrBlogs);

//Ispis jednog elementa iz niza objekata
console.log(arrBlogs[1]);

//Ispis jednog propertija iz niza objekata
console.log(arrBlogs[1].title);
console.log(arrBlogs[1]["title"]);

//Ipis naslova svih elemenata iz niza - koriscenjem for petlje
for (let i = 0; i < arrBlogs.length; i++){
    console.log(arrBlogs[i].title);
}

arrBlogs[1].title = "WHILE ciklus"; //promena propertija
//Ispis naslova svih elemenata iz niza koriscenjem forEach petlje
arrBlogs.forEach (obj => {
    console.log(obj.title, obj.likes);
});

//1. Zadatak
//Napraviti aeeow funkciju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova
let sumLikes = arr => {
    let sum = 0;
    arr.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}

console.log(`Suma lajkova je: ${sumLikes(arrBlogs)}`);

//2. Zadatak
//Napraviti arrow funkciju kojoj se prosledjuje niz objekata, a ona vraca prosecan broj lajkova
let avgLikes = arr => {
    /*
    prvi nacin:
    let s = sumLikes(arr);
    let n = arr.length;
    let avg = s / n;
    return avg;
    */
    //drugi nacin:
    return sumLikes(arr) / arr.length;
}

console.log(`Prosecan broj lajkova je: ${avgLikes(arrBlogs)}`);

//3. Zadatak
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let pozNaslovi = niz => {
    niz.forEach(obj => {
        if(obj.likes > obj.dislikes){
            console.log(obj.title);
        }
    });
}

pozNaslovi(arrBlogs);

//4. Zadatak
//Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploPozNaslovi = niz => {
    niz.forEach(obj => {
        if(obj.likes >= (obj.dislikes * 2)){
            console.log(obj.title);
        }
    });
}

duploPozNaslovi(arrBlogs);

//5.Zadatak
//Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicnikNaslovi = niz => {
    niz.forEach(obj => {
        //if(obj.title.endsWith("!")){
        //    console.log(obj.title);
        //}

        if (blog1.title[blog1.title.length - 1] == "!"){
            console.log(obj.title);
        }
    });
}
uzvicnikNaslovi(arrBlogs);
