const express = require("express");
const {
  getProducts,
  saveProduct,
} = require("../controllers/products.contoller");

const router = express.Router();

router.get("/products", getProducts);

router.post("/products", saveProduct);

module.exports = router;
