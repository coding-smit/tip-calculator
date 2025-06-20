const amtInput = document.getElementById("amount");
const tipInput = document.getElementById("tip");
const btn = document.getElementById("btn-cal");
const result = document.getElementById("total");

btn.addEventListener("click", function() {
    const amtValue = parseFloat(amtInput.value);
    const tipValue = parseFloat(tipInput.value);

    if (isNaN(amtValue)) {
        alert("Please enter a valid amount.");
        return;
    }

    if (isNaN(tipValue)) {
        alert("Please enter a valid tip percentage.");
        return;
    }

    const totalAmount = amtValue * (1 + tipValue / 100);
    result.innerText = `₹ ${totalAmount.toFixed(2)}`;
});
