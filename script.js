const amtInput = document.getElementById("amount");
const tipInput = document.getElementById("tip");
const btn = document.getElementById("btn-cal");
const result = document.getElementById("total")


function calculate(){
    const amtValue = amtInput.value;
    const tipValue = tipInput.value;

    const calValue = amtValue*(1+tipValue / 100)
    result.innerText = calValue.toFixed(2);

}

btn.addEventListener("click",calculate());