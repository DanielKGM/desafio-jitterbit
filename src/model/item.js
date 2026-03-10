import { Schema, model } from "mongoose";

// schema do item
const ItemSchema = new Schema({
  productId: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  // referência ao pedido
  orderId: {
    type: String,
    required: true,
  },
});

export default model("Item", ItemSchema);
