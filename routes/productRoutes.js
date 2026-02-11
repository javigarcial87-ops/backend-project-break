//productRoutes.js
const express = require("express");
const router = express.Router();

const {
  showProducts,
  createProduct,
  showNewProduct,
  showDashboard,
} = require("../controllers/productController")

router.get("/products", showProducts)
router.post("/products", createProduct)
router.get("/dashboard/new", showNewProduct)
router.get("/dashboard", showDashboard)



router.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

module.exports = router;


























