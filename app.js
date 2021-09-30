const express = require('express');
const app = express();

//DB Connection
require('./db')

app.get('/', (req, res) => {
    res.send('App js icinden baglandi')
})

module.exports = app