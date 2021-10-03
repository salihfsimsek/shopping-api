const router = require('express').Router()

//Services
const ProductService = require('../services/product')

//middlewares
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

/////Routes/////

//Create 
router.post('/', verifyToken, adminCheck, async (req, res) => {
    const product = req.body
    console.log(product)
    try {
        const createdProduct = await ProductService.add(product)
        res.status(201).send(createdProduct)
    } catch (err) {
        res.status(400).send(err)
    }
})

//Update
router.put('/:id', verifyToken, adminCheck, async (req, res) => {
    try {
        const updatedProduct = await ProductService.update(req.params.id, req.body)
        res.status(200).send(updatedProduct)
    } catch (err) {
        res.status(400).send(err)
    }
})

//Get 
router.get('/:id', async (req, res) => {
    try {
        const product = await ProductService.find({ _id: req.params.id })
        res.status(200).send(product)
    } catch (err) {
        res.status(404).send(err)
    }
})

//Delete
router.delete('/:id', verifyToken, adminCheck, async (req, res) => {
    try {
        await ProductService.delete(req.params.id)
        res.status(200).send({ 'message': 'Product deleted successfully' })
    } catch (err) {
        res.status(404).send(err)
    }
})

//All products
router.get('/', async (req, res) => {
    try {
        const products = await ProductService.findAll()
        res.status(200).send(products)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router