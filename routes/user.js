const router = require('express').Router()
const { verifyToken, authorizationCheck, adminCheck } = require('../middlewares/verifyToken')

//Services
const UserService = require('../services/user')

//Models
const UserModel = require('../models/User')

//Enc
const bcrypt = require('bcryptjs')

router.put('/:id', verifyToken, authorizationCheck, async (req, res) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
    }
    try {
        const updatedUser = await UserService.update(req.user.id, req.body)
        res.status(200).send(updatedUser)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await UserService.delete(req.params.id)
        res.status(200).send({ 'message': "User has been deleted" })
    } catch (err) {
        res.status(500).send(err)
    }
})

router.get('/:id', verifyToken, adminCheck, async (req, res) => {
    try {
        const user = await UserService.find({ _id: req.params.id })
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

//Fetch all users
router.get('/', verifyToken, adminCheck, async (req, res) => {
    try {
        const users = await UserService.findAll()
        res.status(200).send(users)
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router