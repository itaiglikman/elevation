const money = 800;
document.getElementById('money').innerHTML = money;

document.getElementById('nameBtn').addEventListener('click', async () => {
    const name = document.getElementById('nameInput').value;
    const price = await checkPrice(name);
    document.getElementById('nameDiv').innerHTML = price;

});

document.getElementById('buyBtn').addEventListener('click', async () => {
    const buy = document.getElementById('buyInput').value;
    const price = await checkPrice(buy);
    let msg = '';
    if (money >= price) {
        const item = await buyItem(buy);
        msg = `Congratulations, you've just bought ${item.name} for ${item.price}. There are ${item.inventory} left now in the store.`
    } else {
        msg = 'get a job'
    }
    document.getElementById('buyDiv').innerHTML = msg;

});


async function checkPrice(name) {
    let res = await fetch('http://localhost:3000/api/priceCheck/' + name)
    const data = await res.json();
    return data.price;
}

async function buyItem(name) {
    let res = await fetch('http://localhost:3000/api/buy/' + name)
    const data = await res.json();
    return data.item;
}

let lastPrice = checkPrice('chair');

setInterval(async () => {
    console.log(lastPrice);
    const currPrice = await checkPrice('chair');
    console.log(currPrice);
    if (currPrice < lastPrice) console.log('but now');
    else console.log('wait until next time');
    lastPrice = currPrice;
}, 3000)



