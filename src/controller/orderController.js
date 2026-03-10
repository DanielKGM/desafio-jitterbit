import {
  createOrder,
  getOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} from "../services/orderService";
import { mapOrder } from "../utils/mapper";

// cria pedido
export async function createOrder(req, res) {
  try {
    const mappedOrder = mapOrder(req.body);

    const order = await createOrder(mappedOrder);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// busca pedido
export async function getOrder(req, res) {
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
export async function updateOrder(req, res) {
  const order = await updateOrder(req.params.id, req.body);

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.json(order);
}

// remove pedido
export async function deleteOrder(req, res) {
  const order = await deleteOrder(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  res.status(204).send();
}
