const BaseService = require('./base')
const CartModel = require('../models/Cart')

class CartService extends BaseService {
    model = CartModel
}

module.exports = new CartModel()