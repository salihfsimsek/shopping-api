const router = require('express').Router()

//Middlewares
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

//Controllers
const { createCart, updateCart, deleteCart, getCart, getAllCarts } = require('../controllers/cart.js')

/////Routes/////

//Create
router.post('/', verifyToken, authorizationCheck, createCart)

//Update
router.put('/:id', verifyToken, authorizationCheck, updateCart)

//Delete
router.delete('/:id', verifyToken, authorizationCheck, deleteCart)

//Get cart
router.get('/:id', verifyToken, authorizationCheck, getCart)

//Get all carts
router.get('/', verifyToken, authorizationCheck, getAllCarts)

module.exports = router