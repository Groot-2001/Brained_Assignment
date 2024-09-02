const express = require("express");
const {
  deleteProduct,
  createProduct,
  getProduct,
  updateProduct,
} = require("../controller/product");
const productRoute = express.Router();

productRoute.get("/products/", getProduct);
productRoute.post("/products/create", createProduct);
productRoute.put("/products/:_id", updateProduct);
productRoute.delete("/products/:_id", deleteProduct);

module.exports = productRoute;
