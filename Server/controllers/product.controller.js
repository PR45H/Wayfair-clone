
// 1. To get the product data from database according to the type of product selected by the user,
// eg., "bedding", "furniture", etc., the path will be /product/:type.

// 2. Need to create a route to get a specific product selected by the user.
// to get the product data from the database according to the product id, the path will be /product/:type/:id.

// 3. Need to create a route to get all the products from the database.
// to show all the products in the product center in the frontend, the path will be /products.

const productModel = require('../models/product.model')

const allProducts = async (req,res) => {
    
}

const getProduct = async (req,res) => {
    
}

const getProductById = async (req, res) => {

}

module.exports = {allProducts, getProduct, getProductById}
