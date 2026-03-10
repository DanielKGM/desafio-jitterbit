const router = require("express").Router();
import {
  createOrder,
  listOrders,
  getOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController";

// cria pedido
router.post("/", createOrder);

// lista pedidos
router.get("/list", listOrders);

// busca pedido por id
router.get("/:id", getOrder);

// atualiza pedido
router.put("/:id", updateOrder);

// remove pedido
router.delete("/:id", deleteOrder);

export default router;
