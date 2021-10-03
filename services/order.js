const BaseService = require('./base')
const OrderModel = require('../models/Order')

class OrderService extends BaseService {
    model = OrderModel
}

module.exports = new OrderService()