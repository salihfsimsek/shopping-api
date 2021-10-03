const BaseService = require('./base')
const UserModel = require('../models/User')

class UserService extends BaseService {
    model = UserModel
}

module.exports = new UserService()