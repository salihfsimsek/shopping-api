const UserService = require('../services/user')

//Enc
const bcrypt = require('bcryptjs')

const updateUser = async (req, res) => {
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
}

const deleteUser = async (req, res) => {
    try {
        await UserService.delete(req.params.id)
        res.status(200).send({ 'message': "User has been deleted" })
    } catch (err) {
        res.status(500).send(err)
    }
}

const getUser = async (req, res) => {
    try {
        const user = await UserService.find({ _id: req.params.id })
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send(err)
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.findAll()
        res.status(200).send(users)
    } catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { updateUser, deleteUser, getUser, getAllUsers }