const ln = document.querySelector("#ln");

ln.onclick = () => (display.innerText = Math.log(display.innerText));

const pi = document.querySelector("#pi");

pi.onclick = () => {
  display.innerText == 0
    ? (display.innerText = Math.PI)
    : (display.innerText += Math.PI);
};

const square = document.querySelector("#square");
square.onclick = () => (display.innerText = Math.pow(display.innerText, 2));

const oneDivByX = document.querySelector("#one-divided-by-x");
oneDivByX.onclick = () => {
  display.innerText = `1÷${display.innerText} = ${1 / display.innerText}`;
};

const absolute = document.querySelector("#absolute");
absolute.onclick = () => {
  display.innerText = `|${display.innerText}| = ${Math.abs(display.innerText)}`;
};

const exp = document.querySelector("#exp");
exp.onclick = () => (display.innerText = Math.exp(display.innerText));

const squareRoot = document.querySelector("#square-root");
squareRoot.onclick = () => (display.innerText = Math.sqrt(display.innerText));

function powerCalc() {
  let base = display.innerText.split("^")[0];
  let exp = display.innerText.split("^")[1];
  display.innerText = Math.pow(base, exp);
}

const power = document.querySelector("#x-power-y");
power.onclick = () => (display.innerText += "^");

const tenX = document.querySelector("#ten-x");
tenX.onclick = () => (display.innerText += " * 10^");

const plusMinus = document.querySelector("#plus-minus");
plusMinus.onclick = () => (display.innerText = display.innerText * -1);

const log2 = document.querySelector("#log-2");
log2.onclick = () => {
  display.innerText != 0
    ? (display.innerText = Math.log2(display.innerText))
    : alert("Logaritma dari 0 tidak terdefinisi!");
};

const log = document.querySelector("#log");
log.onclick = () => {
  display.innerText != 0
    ? (display.innerText = Math.log10(display.innerText))
    : alert("Logaritma dari 0 tidak terdefinisi!");
};

const factBtn = document.querySelector("#fact");

function factCalc() {
  let n = display.innerText;

  if (display.innerText == 0) {
    display.innerText = 1;
  } else if (n < 0) {
    display.innerText = "";
  }
  else {
    let oldValue = display.innerText;
    for (let i = n - 1; i > 1; i--) {
      n = n * i;
    }
    display.innerText = oldValue + "! = " + n;
  }
}

factBtn.addEventListener("click", factCalc);