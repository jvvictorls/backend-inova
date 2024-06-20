const userService = require('../service/UserService');

const findAll = async (req, res) => {
  const users = await userService.findAll();
  res.status(200).json(users);
}

module.exports = { 
  findAll,
}
