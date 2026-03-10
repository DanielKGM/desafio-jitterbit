import { connect } from "mongoose";

// conecta ao MongoDB
const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error);

    // encerra aplicação em caso de erro
    process.exit(1);
  }
};

export default connectDB;
