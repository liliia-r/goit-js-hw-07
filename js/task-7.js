"use strict";

const inputRange = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

const changeFontSize = () => {
    spanText.style.fontSize = inputRange.value + "px"
}

inputRange.addEventListener("input", changeFontSize)