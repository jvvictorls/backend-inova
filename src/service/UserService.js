const UserModel = require('../model/UserModel');

async function findAllUsers() {
  const allUsers = await UserModel.findAll();
  return allUsers;
}

async function findByEmail(email) {
  const user = await UserModel.findByEmail(email);
  if (!user) return null;
}

module.exports = {
  findAllUsers,
  findByEmail,
};