const BaseService = require('./base')
const ProductModel = require('../models/Product')

class ProductService extends BaseService {
    model = ProductModel
}

module.exports = new ProductService()