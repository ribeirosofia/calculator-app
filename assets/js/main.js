const outputDisplay = document.getElementById("display-num");
const btnSum = document.getElementById("btn-sum");
const btnMin = document.getElementById("btn-min");
const btnMultiply = document.getElementById("btn-multiply");
const btnDiv = document.getElementById("btn-div");
const btnDel = document.getElementById("btn-del");
const btnClear = document.getElementById("btn-clear");

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
