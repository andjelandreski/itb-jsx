let liZadaci = document.querySelectorAll("li");

liZadaci.forEach(li => {
    li.addEventListener("click", () =>{
        if(li.style.textDecoration == "line-through"){
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    });
});

/*
Drugi nacin sa toggle:
const allLiElements = document.querySelectorAll(`li`);
allLiElements.forEach(element => {
    element.addEventListener(`click`, () => {
        element.classList.toggle(`precrtaj`);
    });
});
 */

