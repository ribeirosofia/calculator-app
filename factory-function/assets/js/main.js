const btnNum = document.querySelectorAll(".btn-num");
const prevOperand = document.querySelector(".previous-operand");

const btnContent = `O conteúdo do botão é ${btnNum.innerText}`;

btnNum.forEach((btnNum) => {
  btnNum.addEventListener("click", (e) => {
    prevOperand.innerText = e.target.innerText;
  });
});

console.log(btnNum);
