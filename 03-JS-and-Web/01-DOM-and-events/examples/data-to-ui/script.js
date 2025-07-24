import { getShoppingList, addItem, toggleItemComplete } from './model.js';

console.log(getShoppingList());

// UI
function refreshShoppingList(shoppingList) {
    const ul = document.getElementById('shoppingList');
    ul.innerHTML = "";
    for (const item of shoppingList) {
        const li = document.createElement('li');
        li.className = item.complete ? 'completed' : '';
        li.innerText = item.name;
        li.addEventListener('click', () => {
            toggleItemComplete(item);
            refreshShoppingList(shoppingList); //update ui
        })
        ul.appendChild(li);
    }
}

// CONTROLLER
addEventListener('DOMContentLoaded', () => {
    refreshShoppingList(getShoppingList()); //update ui
});

document.getElementById('btnAdd').addEventListener('click', () => {
    const newItemValue = document.getElementById('inputNew').value;
    addItem(newItemValue);
    refreshShoppingList(getShoppingList()); //update ui
    document.getElementById('inputNew').value = "";
});