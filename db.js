const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.MONGODB || 'mongodb://localhost/ecommerce-practice', { useUnifiedTopology: true, useNewUrlParser: true, })
    console.log('DB Connected')
}

main()