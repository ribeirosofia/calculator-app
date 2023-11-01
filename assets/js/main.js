const outputDisplay = document.getElementById("display-num");
const btnSum = document.getElementById("btn-sum");
const btnMin = document.getElementById("btn-min");
const btnMultiply = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-div");
const btnDel = document.getElementById("btn-del");

btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  outputDisplay.textContent += "+";
});

btnMin.addEventListener("click", (e) => {
  e.preventDefault();
  outputDisplay.textContent += "-";
});

btnMultiply.addEventListener("click", (e) => {
  e.preventDefault();
  outputDisplay.textContent += "*";
});

btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  outputDisplay.textContent += "/";
});


