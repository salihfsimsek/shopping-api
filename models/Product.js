const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
    },
    size: {
        type: String,
    },
    color: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel