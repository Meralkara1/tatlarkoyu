const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [{ type: String, required: true }],
    price: {
      current: { type: Number, required: true },
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
