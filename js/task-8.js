"use strict";

const numberInput = document.querySelector("div#controls > input");
const buttonRender = document.querySelector("button[data-action='render']");
const buttonDestroy = document.querySelector("button[data-action='destroy']");
const resultBoxes = document.querySelector("div#boxes");
let boxes = document.querySelector("div#boxes > div")

let generateColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 256)},${Math.floor(Math.random() * 256)})`;    
}
const createBoxes = (amount) => {
    amount = numberInput.value
    let width = 30;
    let height = 30;
    for(let i = 0; i < amount; i += 1){
        let div = document.createElement("div")
        resultBoxes.append(div)
  
        div.style.backgroundColor = generateColor()

        width += 10;
        height += 10;
        
        resultBoxes.childNodes[i].style.width = width + "px"
        resultBoxes.childNodes[i].style.height = height + "px"

        resultBoxes.children[0].style.width = 30 + "px"
        resultBoxes.children[0].style.height = 30 + "px"
    }
}

const destroyBoxes = () => {
    resultBoxes.innerHTML = '';
}

buttonRender.addEventListener("click", createBoxes)
buttonDestroy.addEventListener("click", destroyBoxes)