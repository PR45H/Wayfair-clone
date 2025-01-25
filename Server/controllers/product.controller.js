
// 1. To get the product data from database according to the type of product selected by the user,
// eg., "bedding", "furniture", etc., the path will be /product/:type - eg: /api/product/furniture. - DONE

// 2. Need to create a route to get a specific product selected by the user.
// to get the product data from the database according to the product id, the path will be for eg - /product/furniture/:id.

// 3. Need to create a route to get all the products from the database.
// to show all the products in the product center in the frontend, the path will be /products.

// 4. Need to create a route to add a product to the database. - DONE

const productModel = require('../models/product.model')


                            // Point 1
// The user will select the type of product like bedding, furniture, etc.
// The user will get the list of available product data according to the type of product selected.
const getProduct = async (req,res) => {
    try {
        const type = req.params.type
        // console.log(type)
        const products = await productModel.find({ type: type })
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

                        // Point 2
// The user will select a specific product by clicking on it.
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const productType  = req.params.type;
        console.log(productId, productType);
        const product = await productModel.findOne({ _id: productId, type: productType });

        // Check if product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            message: 'Product found',
            productId: product._id,
            data: product
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

                        // Point 3
// Get all products from the database
const allProducts = async (req,res) => {
    try {
        const products = await productModel.find()
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

                        // Point 4
// Add a product to the database
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

// updateProduct
const updateProduct = async (req, res) => { 
    try {
        const productId = req.params.id;
        const product = await productModel.findOne({ _id: productId });

        // Check if product exists
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updatedProduct = await productModel.findOneAndUpdate({ _id: productId}, req.body, { new: true });

        return res.status(200).json({
            message: 'Product updated successfully',
            productId: updatedProduct._id,
            data: updatedProduct
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

// deleteProduct
const deleteProduct = async (req, res) => {
try {
    const productId = req.params.id;
    const product = await productModel.findOne({ _id: productId});
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    await productModel.deleteOne({ _id: productId});
    return res.status(200).json({
        message: 'Product deleted successfully',
        productId: productId
    });
} catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
}
}

module.exports = {allProducts, getProduct, getProductById, addProduct, updateProduct, deleteProduct}
