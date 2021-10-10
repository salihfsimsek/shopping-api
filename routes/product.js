const router = require('express').Router()

//middlewares
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

//Controllers
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/product')

/////Routes/////

//Create 
router.post('/', verifyToken, adminCheck, createProduct)

//Update
router.put('/:id', verifyToken, adminCheck, updateProduct)

//Delete
router.delete('/:id', verifyToken, adminCheck, deleteProduct)

//Get 
router.get('/:id', getProduct)

//All products
router.get('/', getAllProducts)

module.exports = router