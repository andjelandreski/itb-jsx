let blog1 = {
    title: "IF naredba grananja!",
    likes: 50,
    dislikes: 21,
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

//////////////////////////

let user1 = {
    username: "AndjelaAndreski",
    age: 17,
    blogs: [blog1, blog3],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};
let user2 = {
    username: "JohnDoe",
    age: 28,
    blogs: [blog2],
    logBlogs: function() {
        this.blogs.forEach(elem => {
            console.log(elem.title);
        })
    }
};

///////////////////////////////

console.log(user1.blogs[0].title);
console.log(user1.blogs[0]["title"]);

user1.logBlogs();
user2.logBlogs();


//1. Zadatak
//Napraviti niz korisnika gde svaki od korisnika sadrzi niz blogova. Svaki blog u ovom nizu je objekat
let users = [user1, user2];

//Ispis username polja iz users niza
users.forEach(u => {
    console.log(u.username);
});

//Ispis svih naslova blogova koje su korisnici kreirali
users.forEach(u => {
    u.logBlogs();
});

//Da nisam imala metodu logBlogs
users.forEach(u => {
    let userBlogs = u.blogs; //niz blogova korisnika
    //Iteriram nizom objekata, gde je svaki objekat po jedan blog. Iz tog objekta blog mogu uzeti naslov
    userBlogs.forEach(b => {
        console.log(b.title);
    });
});

//3. Zadatak
//Ispisati naslove onih blogova koji imaju vise od 50 lajkova
users.forEach(u => {
    let userBlogs = u.blogs; // niz blogova korisnika
    userBlogs.forEach(b => {
        if(b.likes > 50){
            console.log(b.title);
        }
    });
});

//2.Zadatak
//Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(u => {
    if(u.age < 18){
        console.log(u.username);
    }
});

//4.Zadatak
//Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(u => {
    if(u.username === "JohnDoe"){
        u.logBlogs();
    }
    /*if(u.username.includes("JohnDoe")){
        u.logBlogs();
    }*/
});

//5.Zadatak
//Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(u => {
    let sumLikes = 0;
    u.blogs.forEach(b => {
        sumLikes += b.likes;
    });
    if(sumLikes > 100){
        console.log(u.username);
    }
});

//6. Zadatak
//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let sum = 0;
let br = 0;
users.forEach(u => {
    u.blogs.forEach(b => {
        sum += b.likes;
        br++;
    });
});
let prosek = sum / br;
users.forEach(u => {
    u.blogs.forEach(b => {
        if(b.likes > prosek){
            console.log(b.title);
        }
    });
});

//7. Zadatak
//Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
let sumPoz = 0;
let br1 = 0;
let sumNeg = 0;
users.forEach(el => {
    el.blogs.forEach(b => {
        sumPoz += b.likes;
        sumNeg += b.dislikes;
        br1++;
    });
});
let prosekPoz = sumPoz / br1;
let prosekNeg = sumNeg / br1;
users.forEach(el => {
    el.blogs.forEach(b =>{
        if(b.likes > prosekPoz && b.dislikes < prosekNeg){
            console.log(b.title);
        }
    });
});

let dan1 = {
    datum: "2023/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperature: [-3, -4, -6, -7, -6, -4, -10, 0]
};
let dan2 = {
    datum: "2023/12/24",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperature: [3, 4, 6, 7, 9, 8, 5, 3]
};
let dan3 = {
    datum: "2023/12/25",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperature: [3, 4, 6, 6, 7, 5, 4, 3]
};

//Zadatak - vremenska prognoza
//1. zadatak
let dani = [dan1, dan2, dan3];

//2. zadatak
let maxBrMerenja = dani[0].temperature.length;
let indexPrvog = 0;
let indexPoslednjeg = 0;
dani.forEach(d => {
    if(maxBrMerenja < d.temperature.length){
        maxBrMerenja = d.temperature.length;
        indexPrvog = indeks;
    }

    if(maxBrMerenja <= d.temperature.length){
        maxBrMerenja = d.temperature.length;
        indexPoslednjeg = indeks;
    }
});
//a)ispisati svaki takav datum
dani.forEach(d => {
    if(d.temperature.length == maxBrMerenja){
        console.log(d.datum);
    }
});
//b)ispisati prvi od njih
//1. nacin:
console.log(dani[indexPrvog].datum);
//2. nacin
for (let i = 0; i < dani.length; i++){
    if(maxBrMerenja == dani[i].temperature.length){
        console.log(dani[i].datum);
        break;
    }
}

//c)ispisati poslednji od njih
//1. nacin
console.log(dani[indexPoslednjeg].datum);