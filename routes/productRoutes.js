//productRoutes.js
const express = require("express")
const router = express.Router()
const requireAuth = require("../middlewares/authMiddleware")
const upload = require("../config/multer")


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
router.post("/products", upload.single("image"), createProduct)
router.get("/dashboard/new", requireAuth, showNewProduct)
router.get("/dashboard", requireAuth, showDashboard)
router.get("/dashboard/:id/edit", requireAuth, showEditProduct)
router.put("/dashboard/:id", requireAuth, updateProduct)
router.delete("/dashboard/:id/delete", requireAuth, deleteProduct)

router.get("/", (req, res) => {
  res.redirect("/products")
});

module.exports = router;


























