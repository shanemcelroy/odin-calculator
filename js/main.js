let firstNumber;
let secondNumber;
let operator;

const buttons = document.querySelector(".btn-container");
const display = document.querySelector(".screen-text");
const reset = document.querySelector(".clear");

buttons.addEventListener("click", (e) => {
  let button = e.target;
  let value = button.textContent;

  if (value === "+" || value === "-" || value === "*" || value === "/") {
    firstNumber = Number(display.textContent);
    operator = value;
    clearScreen();
  } else if (value === "=") {
    secondNumber = Number(display.textContent);
    clearScreen();
    display.textContent = operate(firstNumber, secondNumber, operator);
  } else {
    display.textContent += value;
  }
});

reset.addEventListener("click", (e) => {
  e.stopPropagation();
  clearScreen();
});

function clearScreen() {
  display.textContent = "";
}

function operate(n1, n2, operator) {
  switch (operator) {
    case "+":
      return add(n1, n2);
    case "-":
      return subtract(n1, n2);
    case "*":
      return multiply(n1, n2);
    case "/":
      return divide(n1, n2);
    default:
      return "Invalid Operator.";
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("You can't divide by 0!");
  } else {
    return a / b;
  }
}
