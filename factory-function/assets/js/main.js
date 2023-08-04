const btnNum = document.querySelectorAll(".btn-num");
const prevOperand = document.getElementById("previous-operand");

let operator = null;
let previousValue = "";
let currentValue = "";

btnNum.forEach((btnNum) => {
  btnNum.addEventListener("click", (e) => {
    currentValue =
      (currentValue === null ? "" : currentValue) + e.target.innerText;
    prevOperand.innerText = getDisplayExpression();
  });
});

const getDisplayExpression = () => {
  let displayExpression = "";

  if (previousValue !== null && operator !== null) {
    displayExpression = `${previousValue} ${operator} `;
  }

  if (currentValue !== null) {
    displayExpression += currentValue;
  }

  return displayExpression;
};

const calc = () => {
  if (operator && previousValue !== "") {
    if (
      operator !== "-" &&
      operator !== "*" &&
      operator !== "/" &&
      operator !== "+"
    ) {
      alert("Operador inválido!");
      return;
    }

    if (operator === "/" && parseFloat(currentValue) === 0) {
      alert("Operação inválida! Divisão por zero não é possível");
      return;
    }

    const result = eval(`${previousValue} ${operator} ${currentValue}`);
    currentValue = result.toString();
    prevOperand.innerText = currentValue;
    operator = null;
    previousValue = null;
  }
};

const setOperator = (op) => {
  if (operator) {
    calc();
  }
  operator = op;
  previousValue = currentValue;
  currentValue = "";
  prevOperand.innerText = `${previousValue} ${operator}`;
};

const btnSum = document.getElementById("btn-sum");
btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  setOperator("+");
});

const btnMin = document.getElementById("btn-min");
btnMin.addEventListener("click", (e) => {
  e.preventDefault();
  setOperator("-");
});

const btnTim = document.getElementById("btn-tim");
btnTim.addEventListener("click", (e) => {
  e.preventDefault();
  setOperator("*");
});

const btnDiv = document.getElementById("btn-div");
btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  setOperator("/");
});

const btnClear = document.getElementById("btn-clear");
btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  clear();
});

const btnDel = document.getElementById("btn-del");
btnDel.addEventListener("click", (e) => {
  e.preventDefault();
  del();
});

const btnEquals = document.getElementById("btn-equals");
btnEquals.addEventListener("click", (e) => {
  e.preventDefault();
  calc();
});

const clear = () => {
  currentValue = "";
  prevOperand.innerText = "";
  operator = null;
  previousValue = null;
};

const del = () => {
  currentValue = currentValue.slice(0, -1);
  prevOperand.innerText = currentValue;
  prevOperand.innerText = `${previousValue} ${operator} ${currentValue}`;
};
