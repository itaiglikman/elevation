const ul = document.getElementById('shoppingList');
const inputItem= document.getElementById('itemInput');
const inputBtn = document.getElementById('inputBtn');

inputBtn.addEventListener('click',()=>{
    const newItem = inputItem.value;
    const newLi = document.createElement('li');
    newLi.innerText = newItem;
    // newLi.appendChild(document.createTextNode(newItem));
    ul.appendChild(newLi);
    inputItem.value="";
})

