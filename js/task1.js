let divideBtn = document.getElementById("divide-btn");
let multiplyBtn = document.getElementById("multiply-btn");
let resultPlace = document.getElementById("result");
function divide(){
    resultPlace.textContent = document.getElementById("num1").value / document.getElementById("num2").value;
}
function multiply(){
    resultPlace.textContent = document.getElementById("num1").value * document.getElementById("num2").value;
}