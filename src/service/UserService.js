const userModel = require('../model/UserModel');

const findAll = async () => {
  const response = await userModel.findAll();
  return response;
}

module.exports = {
  findAll
}