const button = document.querySelector(".button");

button.addEventListener("click", () => {
    let billAmount = document.querySelector(".billAmount").value;
    let tipPercentage = document.querySelector(".tipPercentage").value;
    let total = document.querySelector(".total");

    if (billAmount === null || billAmount === "" || tipPercentage === null || tipPercentage === "") {
        total = document.querySelector(".total").innerHTML = "$0";
    } else {
        total = Number.parseFloat(billAmount) + Number.parseFloat(tipPercentage);
        total = document.querySelector(".total").innerHTML = "$" + total;
    } 
});