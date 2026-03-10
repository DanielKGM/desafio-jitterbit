import { Schema, model } from "mongoose";

// schema do pedido
const OrderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },

  value: {
    type: Number,
    required: true,
  },

  creationDate: {
    type: Date,
    required: true,
  },
});

export default model("Order", OrderSchema);
