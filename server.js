import app from "./src/app.js";
import connectDB from "./src/config/database.js";

const PORT = process.env.PORT || 3000;

await connectDB();
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
