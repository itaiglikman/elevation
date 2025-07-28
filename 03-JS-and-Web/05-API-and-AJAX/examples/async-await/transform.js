// function processOrder(orderId) {
//     return fetch(`/api/orders/${orderId}`)
//         .then(response => response.json())
//         .then(order => {
//             return fetch(`/api/inventory/${order.productId}`);
//         })
//         .then(response => response.json())
//         .then(inventory => {
//             if (inventory.stock > 0) {
//                 return { success: true, message: 'Order processed' };
//             } else {
//                 return { success: false, message: 'Out of stock' };
//             }
//         });
// }


async function processOrder(orderId) {
    const orderResult = await axios.get(`/api/orders/${orderId}`)
    const order = await orderResult.json();
    const productResult = await axios.get(`/api/inventory/${order.productId}`);
    const inventory = await productResult.json();
    if (inventory.stock > 0) {
        return { success: true, message: 'Order processed' };
    } else {
        return { success: false, message: 'Out of stock' };
    }
}
