

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

function getAll() {
    return store
}

function getStoreByName(name: string) {
    const item = store[getIndex(name)];
    return item;
}

function reduceInventoryByName(name: string) {
    const index = getIndex(name);
    if (index === -1) return null;
    const item = store[index];
    store[index].inventory -= 1;
    return item;
}

function sale(query: string) {
    if (query !== 'true') return store;
    const saleStore = store.map(item => {
        item.price /= 2;
        return item;
    });
    return saleStore;
}

function getIndex(name: string) {
    return store.findIndex(item => item.name === name);
}


export default {
    getAll, getStoreByName, reduceInventoryByName, sale
}