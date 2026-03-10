import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  productId: { type: Number, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const OrderSchema = new Schema({
  orderId: { type: String, required: true, unique: true },
  value: { type: Number, required: true },
  creationDate: { type: Date, required: true },
  items: [ItemSchema],
});

export default model("Order", OrderSchema);
