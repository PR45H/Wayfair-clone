const productRouter = require('express').Router();
const productController = require('../controllers/product.controller');

productRouter.get('/', productController.allProducts);
productRouter.get('/:type', productController.getProduct);
productRouter.get('/:type/:id', productController.getProductById);
productRouter.post('/add-product', productController.addProduct);
productRouter.post('/update-product/:id', productController.updateProduct);
productRouter.post('/delete-product/:id', productController.deleteProduct);

module.exports = productRouter;