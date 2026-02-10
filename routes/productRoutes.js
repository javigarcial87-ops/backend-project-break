//productRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
router.get('/products', controller.showProducts);
router.get('/products/:id', controller.showProductById);

router.get('/dashboard', controller.showDashboard);
router.get('/dashboard/new', controller.showNewProduct);
router.post('/dashboard', controller.createProduct);
router.delete('/dashboard/:id/delete', controller.deleteProduct);

module.exports = router;


























