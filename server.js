require("dotenv").config();

import { listen } from "./src/app";
import connectDB from "./src/config/database";

// inicia aplicação conectando primeiro ao banco
const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;

  listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
