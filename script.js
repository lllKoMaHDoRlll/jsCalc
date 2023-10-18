const products = {
    "Sandwich": 10,
    "Espresso": 20,
    "Cola": 30,
    "Latte": 40
}

function calculate() {
    let calcEl = document.getElementsByClassName("calculator")[0];
    let productField = document.getElementsByName("products")[0];
    let quantityField = document.getElementsByName("quantity")[0];

    let resultField = document.getElementById("result");

    var result;

    result = parseInt(quantityField.value) * productField.value;

    if (isNaN(result) || result < 0) {
        result = "Invalid input!";
    }

    resultField.innerHTML = result;
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    let productsSelect = document.getElementById("products-select");

    for (const [product, price] of Object.entries(products)) {
        const option = document.createElement("option");
        const name = document.createTextNode(product);
        option.setAttribute("value", price);
        option.appendChild(name);
        productsSelect.appendChild(option);
    }

    let buttonEl = document.getElementById("calc-button");

    buttonEl.addEventListener("click", calculate);
});
