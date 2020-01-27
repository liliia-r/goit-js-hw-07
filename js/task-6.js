"use strict";

const inputSymbols = document.querySelector("#validation-input");

const result = () => {
    if (String(inputSymbols.value.length) !== inputSymbols.dataset.length){
        inputSymbols.classList.add("invalid")
        inputSymbols.classList.remove("valid")
        return
    } else {
        inputSymbols.classList.add("valid")
        inputSymbols.classList.remove("invalid")
}
}

inputSymbols.addEventListener("blur", result)