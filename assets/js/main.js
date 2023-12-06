let outputDisplay = document.getElementById("display-num");

const btnNum = document.querySelectorAll(".btn-num");
const btnSum = document.getElementById("btn-sum");
const btnMin = document.getElementById("btn-min");
const btnMultiply = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-div");
const btnDel = document.getElementById("btn-del");
const btnClear = document.getElementById("btn-clear");
const btnEquals = document.getElementById("btn-equals");

let previousOperand = "";
let operator = "";
let currentOperand = "";

btnNum.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    outputDisplay.textContent += e.target.textContent;
    previousOperand = outputDisplay.textContent;
  });
});

btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  previousOperand = outputDisplay.textContent;
  outputDisplay.textContent += "+";
});

btnMin.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "-";
  previousOperand = outputDisplay.textContent;
  outputDisplay.textContent += "-";
});

btnMultiply.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "*";
  previousOperand = outputDisplay.textContent;
  outputDisplay.textContent += "*";
});

btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "/";
  previousOperand = outputDisplay.textContent;
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

btnEquals.addEventListener("click", (e) => {
  e.preventDefault();
  calc();
});

const del = () => {
  const currentContent = outputDisplay.textContent;
  if (currentContent.length > 0) {
    outputDisplay.textContent = currentContent.slice(0, -1);
  }
};

const clear = () => {
  outputDisplay.textContent = "";
  previousOperand = "";
  operator = "";
  currentOperand = "";
};

const add = (a, b) => {
  return parseFloat(a) + parseFloat(b);
};
const minus = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};
const multiply = (a, b) => {
  return parseFloat(a) * parseFloat(b);
};
const divide = (a, b) => {
  if (b !== "0") {
    return parseFloat(a) / parseFloat(b);
  }
};

const calc = () => {
  let result;

  const match = previousOperand.match(
    /(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)/
  );

  if (!match) {
    outputDisplay.textContent = "operador inválido";
    return;
  }

  const [, numA, , operator, numB] = match;
  console.log(numA, operator, numB);

  switch (operator) {
    case "+":
      result = add(numA, numB);
      outputDisplay.textContent = result;
      break;
    case "-":
      result = minus(numA, numB);
      outputDisplay.textContent = result;
      break;
    case "*":
      result = multiply(numA, numB);
      outputDisplay.textContent = result;
      break;
    case "/":
      if (numB === "0") {
        outputDisplay.textContent = "Impossível divisão por zero";
        return;
      } else {
        result = divide(numA, numB);
      }
      break;
  }

  outputDisplay.textContent = result;
  previousOperand = result.toString();
  operator = "";
  currentOperand = "0";
};
