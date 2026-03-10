import Order from "../model/order.js";

// cria pedido
export async function createOrder(orderData, itemsData) {
  const orderWithItems = { ...orderData, items: itemsData };
  return await Order.create(orderWithItems);
}

// busca pedido por id
export async function getOrder(id) {
  return await Order.findOne({ orderId: id });
}

// lista todos os pedidos
export async function getOrders() {
  return await Order.find();
}

// atualiza pedido por id
export async function updateOrder(id, data) {
  return await Order.findOneAndUpdate({ orderId: id }, data, { new: true });
}

// remove pedido por id
export async function deleteOrder(id) {
  return await Order.findOneAndDelete({ orderId: id });
}
