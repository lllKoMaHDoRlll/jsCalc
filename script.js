const products = {
    "Product1": 10,
    "Product2": 20,
    "Product3": 30,
    "Product4": 40,
    "Product5": 50,
}

let productsSelect = document.getElementById("products-select");

for (const [product, price] of Object.entries(products)) {
    const option = document.createElement("option");
    const name = document.createTextNode(product);
    option.setAttribute("value", price);
    option.appendChild(name);
    productsSelect.appendChild(option);
}

function calculate() {
    let calcEl = document.getElementsByClassName("calculator")[0];
    let productField = document.getElementsByName("products")[0];
    let quantityField = document.getElementsByName("quantity")[0];

    let resultField = document.getElementById("result");

    var result;

    result = parseInt(quantityField.value) * productField.value;

    if (isNaN(result)) {
        result = "Invalid input!";
    }

    resultField.innerHTML = result;
    return false;
}