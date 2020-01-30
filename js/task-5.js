"use strict";

const inputName = document.querySelector("input#name-input");
const outputName = document.querySelector("span#name-output");

const result = () => {
  inputName.value === ""
    ? (outputName.textContent = "незнакомец")
    : (outputName.textContent = inputName.value);
};

inputName.addEventListener("input", result)