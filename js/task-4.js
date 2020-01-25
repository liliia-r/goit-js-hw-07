"use strict";

const counterValue = document.querySelector("#value");

const incrementButton = document.querySelector("button[data-action='increment']");

const decrementButton = document.querySelector("button[data-action='decrement']");

let value = 0
const increment = () => {
    value += 1;
    counterValue.textContent = value;
}

const decrement = () => {
    value -= 1
    counterValue.textContent = value;
}

incrementButton.addEventListener("click", increment)
decrementButton.addEventListener("click", decrement)