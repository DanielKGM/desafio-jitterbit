import express, { json } from "express";
import orderRoutes from "./routes/orderRoutes";

const app = express();

// habilita leitura de JSON
app.use(json());

// rotas da API
app.use("/order", orderRoutes);

export default app;
