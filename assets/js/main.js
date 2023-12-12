class Calculator {
  constructor() {
    this.outputDisplay = document.getElementById("display-num");

    this.btnNum = document.querySelectorAll(".btn-num");
    this.btnSum = document.getElementById("btn-sum");
    this.btnMin = document.getElementById("btn-min");
    this.btnMultiply = document.getElementById("btn-multiply");
    this.btnDiv = document.getElementById("btn-div");
    this.btnDel = document.getElementById("btn-del");
    this.btnClear = document.getElementById("btn-clear");
    this.btnEquals = document.getElementById("btn-equals");

    this.previousOperand = "";
    this.operator = "";
    this.currentOperand = "";
  }
  addNumber(e) {
    this.outputDisplay.textContent += e.target.textContent;
    this.previousOperand = this.outputDisplay.textContent;
  }

  setOperator(operator) {
    this.operator = operator;
    this.previousOperand = this.outputDisplay.textContent;
    this.outputDisplay.textContent += operator;
  }

  del() {
    const currentContent = this.outputDisplay.textContent;
    if (currentContent.length > 0) {
      this.outputDisplay.textContent = currentContent.slice(0, -1);
    }
  }

  clear() {
    this.outputDisplay.textContent = "";
    this.previousOperand = "";
    this.operator = "";
    this.currentOperand = "";
  }

  add(a, b) {
    return parseFloat(a) + parseFloat(b);
  }
  minus(a, b) {
    return parseFloat(a) - parseFloat(b);
  }
  multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
  }
  divide(a, b) {
    if (b !== "0") {
      return parseFloat(a) / parseFloat(b);
    }
  }

  calculate() {
    let result;

    const match = this.previousOperand.match(
      /(-?\d+(\.\d+)?)\s*([-+*/])\s*(-?\d+(\.\d+)?)/
    );

    if (!match) {
      this.outputDisplay.textContent = "operador inválido";
      return;
    }

    const [, numA, , operator, numB] = match;
    console.log(numA, operator, numB);

    switch (operator) {
      case "+":
        result = this.add(numA, numB);
        this.outputDisplay.textContent = result;
        break;
      case "-":
        result = this.minus(numA, numB);
        this.outputDisplay.textContent = result;
        break;
      case "*":
        result = this.multiply(numA, numB);
        this.outputDisplay.textContent = result;
        break;
      case "/":
        if (numB === "0") {
          this.outputDisplay.textContent = "Impossível divisão por zero";
          return;
        } else {
          result = this.divide(numA, numB);
        }
        break;
    }

    this.outputDisplay.textContent = result;
    this.previousOperand = result.toString();
    this.operator = "";
    this.currentOperand = "0";
  }
}
const calculator = new Calculator();

calculator.btnNum.forEach((numbers) => {
  numbers.addEventListener("click", (e) => {
    calculator.addNumber(e);
  });
});

calculator.btnSum.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  calculator.setOperator("+");
});

calculator.btnMin.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  calculator.setOperator("-");
});

calculator.btnMultiply.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  calculator.setOperator("*");
});

calculator.btnDiv.addEventListener("click", (e) => {
  e.preventDefault();
  operator = "+";
  calculator.setOperator("/");
});

calculator.btnDel.addEventListener("click", (e) => {
  e.preventDefault();
  calculator.del();
});

calculator.btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  calculator.clear();
});

calculator.btnEquals.addEventListener("click", (e) => {
  e.preventDefault();
  calculator.calculate();
});
