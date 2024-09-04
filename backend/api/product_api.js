const express = require("express");
const multer = require("multer");
const {
  deleteProduct,
  createProduct,
  getAllProduct,
  getProduct,
  updateProduct,
} = require("../controller/product");

const productRoute = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

productRoute.get("/products/:_id", getProduct);
productRoute.get("/products", getAllProduct);
productRoute.post(
  "/products/create",
  upload.single("img"),
  createProduct
);
productRoute.put(
  "/products/:_id",
  upload.single("img"),
  updateProduct
);
productRoute.delete("/products/:_id", deleteProduct);

module.exports = productRoute;
