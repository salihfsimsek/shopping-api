const ProductService = require('../services/product')

const createProduct = async (req, res) => {
    const product = req.body
    try {
        const createdProduct = await ProductService.add(product)
        res.status(201).send(createdProduct)
    } catch (err) {
        res.status(400).send(err)
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await ProductService.update(req.params.id, req.body)
        res.status(200).send(updatedProduct)
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteProduct = async (req, res) => {
    try {
        await ProductService.delete(req.params.id)
        res.status(200).send({ 'message': 'Product deleted successfully' })
    } catch (err) {
        res.status(404).send(err)
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await ProductService.find({ _id: req.params.id })
        res.status(200).send(product)
    } catch (err) {
        res.status(404).send(err)
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductService.findAll()
        res.status(200).send(products)
    } catch (err) {
        res.status(400).send(err)
    }
}


module.exports = { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts }