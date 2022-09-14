let Miles = document.getElementById('Miles');
let button = document.getElementById('button');

let value = 0;

button.addEventListener("click", () => {
    const input = document.getElementById('input').value;
    if (input > 0){
        value = input * 0.621;
        Miles.textContent = value.toFixed(3);              
    }
    else
        alert("Enter a valid number");

});
