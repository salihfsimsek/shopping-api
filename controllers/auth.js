const AuthService = require('../services/auth')

//Enc
const bcrypt = require('bcryptjs')

//JWT
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    newUser.password = hashedPassword

    try {
        const response = await AuthService.add(newUser)
        res.status(201).send(response)
    } catch (err) {
        res.status(400).send(err)
    }
}

const login = async (req, res) => {
    try {
        const user = await AuthService.find({ email: req.body.email })
        if (!user) {
            return res.status(401).send({ 'message': 'Email or password wrong' })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) {
            return res.status(401).send({ 'message': 'Email or password wrong' })
        }

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET_KEY)

        res.status(200).send({ user, accessToken })
    }
    catch (err) {
        res.status(400).send(err)
    }
}

module.exports = { register, login }