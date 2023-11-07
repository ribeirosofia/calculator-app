let outputDisplay = document.getElementById("display-num");

const btnNum = document.querySelectorAll(".btn-num");
const btnSum = document.getElementById("btn-sum");
const btnMin = document.getElementById("btn-min");
const btnMultiply = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-div");
const btnDel = document.getElementById("btn-del");
const btnClear = document.getElementById("btn-clear");

let previousOperand = "0";
let operator = "";
let currentOperand = "0";

btnNum.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    outputDisplay.textContent += e.target.textContent;
  });
});

btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  outputDisplay.textContent += "+";
});

btnMin.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "-";
  outputDisplay.textContent += "-";
});

btnMultiply.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "*";
  outputDisplay.textContent += "*";
});

btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "/";
  outputDisplay.textContent += "/";
});

btnDel.addEventListener("click", (e) => {
  e.preventDefault();
  del();
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  clear();
});

const del = () => {
  const currentContent = outputDisplay.textContent;
  if (currentContent.length > 0) {
    outputDisplay.textContent = currentContent.slice(0, -1);
  }
};

const clear = () => {
  outputDisplay.textContent = "";
};

const add = (a, b) => {
  return a + b;
};
const minus = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  if (b !== "0") {
    return a / b;
  }
};
