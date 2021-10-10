const router = require('express').Router()
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

//Controllers
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/user')

//Enc
const bcrypt = require('bcryptjs')

router.put('/:id', verifyToken, authorizationCheck, updateUser)

router.delete('/:id', deleteUser)

router.get('/:id', verifyToken, adminCheck, getUser)

//Fetch all users
router.get('/', verifyToken, adminCheck, getAllUsers)

module.exports = router