const orderList = document.getElementById('orderList'); //id del ul
const addOrderBtn = document.getElementById('addOrderBtn');//id del boton 

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    const preparacion = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Completado");
        }, 10000); // Simula un tiempo de preparación de 10 segundos
    });
    const status = await preparacion;
    updateOrderStatus(order, status);

     // TODO: Simular la preparación del pedido usando setTimeout y Promise
    // TODO: Actualizar el estado del pedido a "Completado"
}