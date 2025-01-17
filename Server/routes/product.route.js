const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');

productRouter.get('/products', productController.allProducts);
productRouter.get('/product/:type', productController.getProduct);
productRouter.get('/product/:type/:id', productController.getProductById);

module.exports = productRouter;