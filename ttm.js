//计时器
let oTime = document.querySelector("#TTM .status .time");
let sVal = 600;

setInterval(() => {
    oTime.innerHTML = --sVal;
}, 1000);