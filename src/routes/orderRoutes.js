import { Router } from "express";
import {
  createOrder_,
  listOrders,
  getOrder_,
  updateOrder_,
  deleteOrder_,
} from "../controller/orderController.js";

const router = Router();

// cria pedido
router.post("/", createOrder_);

// lista pedidos
router.get("/list", listOrders);

// busca pedido por id
router.get("/:id", getOrder_);

// atualiza pedido
router.put("/:id", updateOrder_);

// remove pedido
router.delete("/:id", deleteOrder_);

export default router;
