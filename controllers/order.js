const OrderService = require('../services/order')

const createOrder = async (req, res) => {
    const order = req.body

    try {
        const createdOrder = await OrderService.add(order)
        res.status(200).send(createdOrder)
    } catch (err) {
        res.status(400).send
    }
}

const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await OrderService.update({ _id: req.params.id }, req.body)

        res.status(200).send(updatedOrder)
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteOrder = async (req, res) => {
    try {
        await OrderService.delete(req.params.id)
        res.status(200).send({ 'message': 'Successfully deleted' })
    } catch (err) {
        res.status(400).send(err)
    }
}

const getOrder = async (req, res) => {
    try {
        const order = await OrderService.find({ _id: req.params.id })
        res.status(200).send(order)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.findAll()
        res.status(200).send(orders)
    } catch (err) {
        res.status(400).send(err)
    }
}

const getMonthlyIncome = async (req, res) => {
    const date = new Date()
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {
        const income = await OrderService.totalIncome(prevMonth, lastMonth)
        res.status(200).send(income)
    } catch (err) {
        res.status(500).send(err)
    }
}

module.exports = { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, getMonthlyIncome }