import "./operation.js";
import "./trigono.js";

const display = document.querySelector("#display");
const buttons = document.querySelectorAll(".btn");
const calcContainer = document.querySelector(".calc-container");
const calcToggle = document.querySelector("#sci-toggle");

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
  }
});

let IsActive = localStorage.getItem("sciCalc");

function toggleCalc() {
  calcContainer.classList.toggle("active");
  if (calcContainer.classList.contains("active")) {
    calcToggle.innerHTML = `<i class="fa-solid fa-minimize"></i>`;
    localStorage.setItem("sciCalc", "enabled");
  } else {
    calcToggle.innerHTML = `<i class="fa-solid fa-expand"></i>`;
    localStorage.removeItem("sciCalc");
  }
}
if (IsActive === "enabled") {
  toggleCalc();
}

calcToggle.onclick = () => toggleCalc();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnValue = e.target.innerText;
    display.innerText != 0 || display.innerText.includes(".")
      ? (display.innerText += btnValue)
      : (display.innerText = btnValue);
  });
});

function basicOp(op) {
  display.innerText == 0
    ? (display.innerText = "0")
    : (display.innerText += op);
}

function symbols(symbol) {
  display.innerText == 0 && symbol != "."
    ? (display.innerText = symbol)
    : (display.innerText += symbol);
}

const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const multBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

plusBtn.addEventListener("click", () => basicOp("+"));
minusBtn.addEventListener("click", () => basicOp("-"));
multBtn.addEventListener("click", () => basicOp("*"));
divideBtn.addEventListener("click", () => basicOp("/"));

const c = () => (display.innerText = 0);
const cBtn = document.querySelector("#C");
cBtn.addEventListener("click", c);

const percentage = document.querySelector("#percentage");
percentage.onclick = () => {
  if (!display.innerText.includes("*")) {
    display.innerText = display.innerText / 100;
  } else {
    let numBeforeMult = display.innerText.split("*")[0];
    let numAfterMult = display.innerText.split("*")[1];

    display.innerText = `${numBeforeMult} * ${numAfterMult / 100}`;
  }
};

function backspace() {
  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  }
}

const backspaceBtn = document.querySelector("#backspace");
backspaceBtn.addEventListener("click", backspace);


const point = document.querySelector("#point");
point.onclick = () => (display.innerText += ".");

function showResult() {
  if (display.innerText == 0) {
    display.innerText = "0";
  } else {
    if (display.innerText.includes(" * 10^")) {
      let numBeforeTenX = display.innerText.split("* 10^")[0];
      let numAfterTenX = display.innerText.split("* 10^")[1];

      display.innerText = numBeforeTenX * Math.pow(10, numAfterTenX);
    } else if (display.innerText.includes("^")) {
      powerCalc();
    } else {
      display.innerText = eval(display.innerText);
    }
  }
}

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", showResult);

document.addEventListener("keydown", (e) => {
  let pressedNum = parseFloat(e.key);

  if (!isNaN(pressedNum)) {
    if (display.innerText != 0 || display.innerText.includes(".")) {
      display.innerText += pressedNum;
    } else {
      display.innerText = pressedNum;
    }
  }

  switch (e.key) {
    case "+":
      basicOp("+");
      break;
    case "-":
      basicOp("-");
      break;
    case "*":
      basicOp("*");
      break;
    case "/":
      basicOp("/");
      break;
    case "=":
      showResult();
      break;
    case "Enter":
      showResult();
      break;
    case "Backspace":
      backspace();
      break;
    case "(":
      symbols("(");
      break;
    case ")":
      symbols(")");
      break;
    case ".":
      symbols(".");
      break;
  }
});
