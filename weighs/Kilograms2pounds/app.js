let pounds = document.getElementById('pounds');
let button = document.getElementById('button');

let value = 0;

button.addEventListener("click", () => {
    const input = document.getElementById('input').value;
    if (input > 0){
        value = input * 2.205;
        pounds.textContent = value.toFixed(2);              
    }
    else
        alert("Enter a valid number");

});
