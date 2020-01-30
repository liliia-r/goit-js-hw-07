"use strict";

const numberInput = document.querySelector("div#controls > input");
const buttonRender = document.querySelector("button[data-action='render']");
const buttonDestroy = document.querySelector("button[data-action='destroy']");
const resultBoxes = document.querySelector("div#boxes");
// let div;
let generateColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 256)},${Math.floor(Math.random() * 256)})`;    
}

const createBoxes = () => {
    let amount = numberInput.value
    let width = 30;
    let height = 30;
    const arr = [];
    for(let i = 0; i < amount; i += 1){
        const div = document.createElement("div");
        arr.push(div);
  
        div.style.backgroundColor = generateColor()

        width += 10;
        height += 10;
        
        div.style.width = width + "px"
        div.style.height = height + "px"
    } 
   return arr;  
}

const insertBoxes = () => {
    resultBoxes.append(...createBoxes());
}
const destroyBoxes = () => {
    resultBoxes.innerHTML = "";
}

buttonRender.addEventListener("click", insertBoxes)
buttonDestroy.addEventListener("click", destroyBoxes)