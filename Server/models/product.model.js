const mongoose = require('mongoose');

const productSchema = new mongoose.Schema
    ({
        name: { type: String, required: true },
        brand: { type: String, required: true },
        type: { type: String, required: true }, // e.g., "bedding", "furniture"
        category: { type: String, required: true }, // e.g., "bed", "sofa"
        price: { type: Number, required: true },
        description: { type: String },
        specifications: { type: Map, of: mongoose.Schema.Types.Mixed }, // Dynamic specifications
        images: [String],
        warranty: {
        commercialWarranty: { type: Boolean, default: false },
        },
    }, { timestamps: true }, { versionKey: false });

const Product = mongoose.model('product', productSchema);
module.exports = Product;