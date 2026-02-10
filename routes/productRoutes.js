//productRoutes.js
const express = require("express");
const router = express.Router();

const {
  showProducts,
  createProduct,
  showNewProduct,
} = require("../controllers/productController")

router.get("/products", showProducts)
router.post("/products", createProduct);
router.get("/dashboard/new", showNewProduct)

router.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

module.exports = router;


























