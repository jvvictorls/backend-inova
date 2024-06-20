const userModel = require('../model/UserModel');

const findAll = async () => {
  return await userModel.findAll();
}

module.exports = {
  findAll
}