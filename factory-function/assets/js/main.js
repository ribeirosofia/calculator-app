const numberButtons = document.querySelector(".btn-num");
const prevOperand = document.querySelector(".previous-operand");

const btnContent = `O conteúdo do botão é ${numberButtons.innerText}`;

numberButtons.addEventListener("click", (event) => {
  prevOperand.innerText = event.target.innerText;
});

console.log(numberButtons);
