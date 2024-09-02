const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: String,
    category: String,
    price: Number,
    description: String,
    img: String,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model(
  "product_model",
  productSchema
);
