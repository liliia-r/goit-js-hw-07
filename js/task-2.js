"use strict";

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ul = document.querySelector("#ingredients");

function addIngredients(ingredients) {
    for (let ingredient of ingredients) {
        const item = document.createElement("li");
        item.textContent = ingredient;
        ul.append(item);
    }
}
addIngredients(ingredients);