import {
  create,
  findOne,
  find,
  findOneAndUpdate,
  findOneAndDelete,
} from "../models/Order";
import { insertMany, find as _find } from "../models/Item";

// cria pedido
export async function createOrder(orderData, itemsData) {
  const order = await create(orderData);

  await insertMany(itemsData);

  return order;
}

// busca pedido por id
export async function getOrder(id) {
  const order = await findOne({ orderId: id });

  const items = await _find({ orderId: id });

  return { ...order.toObject(), items };
}

// lista pedidos
export async function getOrders() {
  return await find();
}

// atualiza pedido
export async function updateOrder(id, data) {
  return await findOneAndUpdate({ orderId: id }, data, { new: true });
}

// remove pedido
export async function deleteOrder(id) {
  return await findOneAndDelete({ orderId: id });
}
