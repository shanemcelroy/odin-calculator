let firstNumber = null;
let secondNumber = null;
let operator = null;

const buttons = document.querySelector(".btn-container");
const display = document.querySelector(".screen-text");
const clear = document.querySelector(".clear");
const period = document.querySelector(".period");

buttons.addEventListener("click", (e) => {
  let button = e.target;
  let value = button.textContent;

  if (value === "+" || value === "-" || value === "*" || value === "/") {
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
  } else if (value === "=") {
    if (firstNumber !== null && operator !== null) {
      secondNumber = Number(display.textContent);
      result = operate(firstNumber, secondNumber, operator);
      display.textContent = result;
      firstNumber = result;
      operator = null;
      secondNumber = null;
    }
  } else {
    display.textContent += value;
    if (display.textContent.includes(".")) {
      period.disabled = true;
    }
  }
});

clear.addEventListener("click", (e) => {
  e.stopPropagation();
  clearData();
});

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

// If display has a decimal point, don't allow another decimal to be entered
