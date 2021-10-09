const express = require('express');
const app = express();

//Body parser 
const bodyParser = require('body-parser');

//Env import
const dotenv = require('dotenv')

//DB Connection
require('./db')

//Routes
const userRouter = require('./routes/user')
const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const orderRouter = require('./routes/order')

dotenv.config()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('First page')
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

module.exports = app