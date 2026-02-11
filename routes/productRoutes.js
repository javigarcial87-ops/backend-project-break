//productRoutes.js
const express = require("express");
const router = express.Router();

const {
  showProducts,
  createProduct,
  showNewProduct,
  showDashboard,
  showEditProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController")

router.get("/products", showProducts)
router.post("/products", createProduct)
router.get("/dashboard/new", showNewProduct)
router.get("/dashboard", showDashboard)
router.get("/dashboard/:id/edit", showEditProduct)
router.put("/dashboard/:id", updateProduct)
router.delete("/dashboard/:id/delete", deleteProduct)

router.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

module.exports = router;


























