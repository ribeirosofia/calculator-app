const btnNum = document.querySelectorAll(".btn-num");
const prevOperand = document.querySelector("#previous-operand");

let currentValue = "";

btnNum.forEach((btnNum) => {
  btnNum.addEventListener("click", (e) => {
    currentValue += e.target.innerText;
    prevOperand.innerText = currentValue;
  });
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

const clear = () => {
  currentValue = "";
  prevOperand.innerText = "";
};

const del = () => {
  currentValue = currentValue.slice(0, -1);
  prevOperand.innerText = currentValue;
};
