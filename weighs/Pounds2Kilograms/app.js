let kilograms = document.getElementById('kilograms');
let button = document.getElementById('button');

let value = 0;

button.addEventListener("click", () => {
    const input = document.getElementById('input').value;
    if (input > 0){
        value = input / 2.205;
        kilograms.textContent = Math.floor(value);
    }
    else
        alert("Enter a valid number");

});
