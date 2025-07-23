const shoppingList = [
    {
        name: "Milk",
        complete: true
    },
    {
        name: "Bread",
        complete: false
    },
    {
        name: "Eggs",
        complete: false
    },
    {
        name: "Cheese",
        complete: false
    }
];


export function getShoppingList() {
    return shoppingList;
}

export function addItem(itemName) {
    const item = { name: itemName, complete: false };
    shoppingList.push(item);
}

export function toggleItemComplete(item) {
    item.complete = !item.complete;
}

export function deleteItem(itemName) {

}
