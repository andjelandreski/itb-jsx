var x = 4; //pomocna promenljiva
let y = 8; //pomocna promenljiva

//.......

let rezultat = x + y; //promenljiva koja pamti rezultat(glavna promenljiva)

let racunaj = () => {
    document.body.innerHTML += `<p>${rezultat}</p>`;
}

