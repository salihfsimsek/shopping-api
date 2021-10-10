const router = require('express').Router()


//Middlewares
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

//Controllers
const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders, getMonthlyIncome } = require('../controllers/order')

/////Routes/////

//Create
router.post('/', verifyToken, authorizationCheck, createOrder)

//Update
router.put('/:id', verifyToken, adminCheck, updateOrder)

//Delete
router.delete('/:id', verifyToken, adminCheck, deleteOrder)

//Get users order
router.get('/:id', verifyToken, authorizationCheck, getOrder)

//Get users all orders
router.get('/', verifyToken, authorizationCheck, getAllOrders)

//Get monthly income
router.get('/income', verifyToken, adminCheck, getMonthlyIncome)

module.exports = router