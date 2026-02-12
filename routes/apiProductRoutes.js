const express = require("express")
const router = express.Router()

const {
    getProducts,
  getProductById,
  createProductApi,
  updateProductApi,
  deleteProductApi,
} = require("../controllers/apiProductController")

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProductApi);
router.put("/products/:id", updateProductApi);
router.delete("/products/:id", deleteProductApi);

module.exports = router