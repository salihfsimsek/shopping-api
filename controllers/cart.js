const CartService = require('../services/cart')

const createCart = async (req, res) => {
    const cart = req.body
    try {
        const createdCart = await CartService.add(cart)
        res.status(200).send(createdCart)
    } catch (err) {
        res.status(400).send
    }
}

const updateCart = async (req, res) => {
    try {
        const updatedCart = await CartService.update({ _id: req.params.id }, req.body)

        res.status(200).send(updatedCart)
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteCart = async (req, res) => {
    try {
        await CartService.delete(req.params.id)
        res.status(200).send({ 'message': 'Successfully deleted' })
    } catch (err) {
        res.status(400).send(err)
    }
}

const getCart = async (req, res) => {
    try {
        const cart = await CartService.find({ _id: req.params.id })
        res.status(200).send(cart)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getAllCarts = async (req, res) => {
    try {
        const carts = await CartService.findAll()
        res.status(200).send(carts)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { createCart, updateCart, deleteCart, getCart, getAllCarts }