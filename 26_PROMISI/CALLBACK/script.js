let mojaFunkcija = (callback) => {
    callback();
  };
  mojaFunkcija(() => {
    console.log("Callback funkcija okidanje");
  });
  //////////////////
  let sabiranje = (funkcija) => {
    funkcija(4, 5);
  };
  // 1. nacin
  sabiranje((a, b) => {
    console.log(a + b);
  });
  // 2. nacin
  function stampajSumu(x, y) {
    console.log(x + y);
  }
  sabiranje(stampajSumu); // stampajSumu se poziva bez zagrada
  ////////////////////////////////
  let oduzimanje = (funkcija) => {
    let razlika = funkcija(100, 30);
    console.log(razlika);
  };
  oduzimanje((a, b) => {
    return a - b;
  });
  ////////////////////////////////
  let racunaj = (funkcija) => {
    let rezultat = funkcija(100, 30);
    console.log(rezultat);
  };
  racunaj((a, b) => {
    return a * b;
  });