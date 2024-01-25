const btn2 = document.getElementById("btn2");
const input = document.getElementById("number");
let clock;

btn1.addEventListener("click", function(e) {
    e.preventDefault();
    if (clock === undefined) {
        clock = setInterval(() => {
            input.value++;
        }, 1000);
    }
});
btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearInterval(clock);
    clock = undefined;
});