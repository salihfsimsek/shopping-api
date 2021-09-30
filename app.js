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

dotenv.config()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('First page')
})

app.use('/api/user', userRouter)

module.exports = app