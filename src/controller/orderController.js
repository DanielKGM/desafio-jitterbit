import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from "../service/orderService.js";
import { mapOrder } from "../utils/orderMapper.js";

// cria pedido
export async function createOrder_(req, res) {
  try {
    const { order, items } = mapOrder(req.body); // Desestrutura aqui

    const newOrder = await createOrder(order, items); // Passa os dois argumentos

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// busca pedido
export async function getOrder_(req, res) {
  const order = await getOrder(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.json(order);
}

// lista pedidos
export async function listOrders(req, res) {
  const orders = await getOrders();

  res.json(orders);
}

// atualiza pedido
export async function updateOrder_(req, res) {
  const order = await updateOrder(req.params.id, req.body);

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.json(order);
}

// remove pedido
export async function deleteOrder_(req, res) {
  const order = await deleteOrder(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.status(204).send();
}
