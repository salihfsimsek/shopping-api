const BaseService = require('./base')
const OrderModel = require('../models/Order')

class OrderService extends BaseService {
    model = OrderModel

    async totalIncome(previousMonth, lastMonth) {
        return this.model.aggregate([
            { $match: { createAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: {
                        $month: "$createdAt"
                    },
                    sales: '$amount'
                },
                $group: {
                    _id: '$amount',
                    total: { $sum: '$sales' }
                }
            }
        ])
    }
}

module.exports = new OrderService()