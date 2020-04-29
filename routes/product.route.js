const express = require('express');
const router = express.Router();

// Import Controller
const controller = require('../controllers/product.controller.js');

// ROUTES
router.get('/', controller.products);
router.post('/', controller.postProduct);
router.get('/:productId', controller.getProduct);
router.patch('/:productId', controller.patchProduct);
router.delete('/:productId', controller.deleteProduct);




module.exports = router;