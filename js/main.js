let firstNumber = null;
let secondNumber = null;
let operator = null;

const buttons = document.querySelector(".btn-container");
const display = document.querySelector(".screen-text");
const clear = document.querySelector(".clear");
const period = document.querySelector(".period");
const deleteBtn = document.querySelector(".delete");
const allowedKeys = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
  "=",
  "Backspace",
  "Enter",
];

document.addEventListener("keydown", (e) => {
  if (allowedKeys.includes(e.key)) {
    handleInput(e.key);
  }
});

buttons.addEventListener("click", (e) => {
  let value = e.target.textContent;
  handleInput(value);
});

clear.addEventListener("click", (e) => {
  e.stopPropagation();
  clearData();
});

deleteBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  deleteInput();
});

function handleInput(value) {
  if (["+", "-", "*", "/"].includes(value)) {
    if (firstNumber !== null && operator !== null) {
      secondNumber = Number(display.textContent);
      result = operate(firstNumber, secondNumber, operator);
      display.textContent = result;
      firstNumber = result;
      period.disabled = false;
    } else {
      period.disabled = false;
      firstNumber = Number(display.textContent);
    }
    operator = value;
    display.textContent = "";
  } else if (value === "=" || value === "Enter") {
    if (firstNumber !== null && operator !== null) {
      secondNumber = Number(display.textContent);
      result = operate(firstNumber, secondNumber, operator);
      display.textContent = result;
      firstNumber = result;
      operator = null;
      secondNumber = null;
    }
  } else if (value === "Backspace") {
    deleteInput();
  } else {
    display.textContent += value;
    if (display.textContent.includes(".")) {
      period.disabled = true;
    }
  }
}

function deleteInput() {
  let input = display.textContent;
  if (input.length !== 0) {
    let deleted = input.slice(-1);
    if (deleted === ".") {
      period.disabled = false;
    }
    let newNum = input.slice(0, -1);
    display.textContent = newNum;
  }
}

function clearScreen() {
  display.textContent = "";
}

function clearData() {
  display.textContent = "";
  period.disabled = false;
  firstNumber = null;
  secondNumber = null;
  operator = null;
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
  let answer = a * b;
  return parseFloat(answer.toFixed(2));
}

function divide(a, b) {
  if (b === 0) {
    alert("You can't divide by 0!");
  } else {
    let answer = a / b;
    return parseFloat(answer.toFixed(2));
  }
}
