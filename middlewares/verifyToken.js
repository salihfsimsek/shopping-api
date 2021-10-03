const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) return res.status(401).send({ 'message': 'Access denied' })
    const onlyToken = token.split(' ')[1]
    jwt.verify(onlyToken, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send({ "message": "Token is not valid" })
        req.user = user
        next()
    })
}

const authorizationCheck = (req, res, next) => {
    if (req.user.id === req.params.id) {
        next()
    } else {
        res.status(403).send({ 'message': 'You are not allowed to do that!' })
    }
}

const adminCheck = (req, res, next) => {
    if (req.user.isAdmin) {
        next()
    } else {
        res.status(403).send({ 'message': 'You are not allowed to do that' })
    }
}

module.exports = { verifyToken, authorizationCheck, adminCheck }