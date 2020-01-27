"use strict";

const item = document.querySelectorAll(".item");
console.log(item.length);

item.forEach(el => console.log(`Категория: ${el.querySelector("h2").textContent} 
Количество элементов: ${el.children[1].children.length}`));