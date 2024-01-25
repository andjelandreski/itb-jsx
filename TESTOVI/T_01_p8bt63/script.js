let datum =  new Date();
let dan = datum.getDay();
let sat = datum.getHours();
let minut = datum.getMinutes();

if(dan == 0 || dan == 6){
    document.getElementById("naslov").innerHTML = "Odmarate? ITBootcamp vam nudi mogućnost da stičete nove veštine! " + "(" + sat + ":" + minut + ")";
} else {
    document.getElementById("naslov").innerHTML = "Radite? ITBootcamp vam nudi mogućnost da se okrenete novoj profesiji! " + "(" + sat + ":" + minut + ")";
}