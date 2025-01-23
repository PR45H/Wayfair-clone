
// 1. To get the product data from database according to the type of product selected by the user,
// eg., "bedding", "furniture", etc., the path will be /product/:type - eg: /api/product/furniture.

// 2. Need to create a route to get a specific product selected by the user.
// to get the product data from the database according to the product id, the path will be for eg - /product/furniture/:id.

// 3. Need to create a route to get all the products from the database.
// to show all the products in the product center in the frontend, the path will be /products.

const productModel = require('../models/product.model')

const allProducts = async (req,res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// The user will select the type of product like bedding, furniture, etc.
// The user will get the list of available product data according to the type of product selected.
const getProduct = async (req,res) => {
    try {
        const type = req.params.type
        console.log(type)
    } catch (error) {
        
    }
}

const getProductById = async (req, res) => {

}

const addProduct = async (req,res) => {
    try {
        const product = req.body
        const newProduct = new productModel(product)
        await newProduct.save()
        res.status(201).json({
            message: 'Product added successfully',
            name: newProduct.name,
            id: newProduct._id
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {allProducts, getProduct, getProductById, addProduct}
