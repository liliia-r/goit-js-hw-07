"use strict";

const inputSymbols = document.querySelector("#validation-input");

const result = () => {
    if (inputSymbols.value.length !== 6){
        inputSymbols.classList.add("invalid")
    } else {
        inputSymbols.classList.remove("invalid")
        inputSymbols.classList.add("valid")
}
}

inputSymbols.addEventListener("focus", result)