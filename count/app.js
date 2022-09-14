let counter = document.getElementById('count');
let value = 0;

let btnIncrease = document.getElementById("inc");
let btnDecrease = document.getElementById("dec");
let btnReset = document.getElementById("reset");

btnIncrease.addEventListener("click", () => {
    if (value == '100')
        alert("Count has reached maximum Value")
    else
        value++;
    counter.textContent = value;
});

btnDecrease.addEventListener("click", () => {
    value--;
    counter.textContent = value;
});

btnReset.addEventListener("click", () => {
    value = 0;
    counter.textContent = value;
});

