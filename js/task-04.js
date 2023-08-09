let counterValue = 0;
const decrem = document.querySelector("button[data-action='decrement']");
const increm = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");

const countDecr = function() {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countIncr = function() {
  counterValue += 1;
  myValue.textContent = counterValue;
};

decrem.addEventListener("click", countDecr);
increm.addEventListener("click", countIncr);