const UserModel = require('../model/UserModel');

async function findAllUsers() {
  const allUsers = await UserModel.findAll();
  return allUsers;
}

async function findByEmail(email) {
  const user = await UserModel.findByEmail(email);
  if (!user) return null;
  return user;
}

const login = async (email, password) => {
  const token = await UserModel.login(email, password);
  if (token.length === 0) return null;
  const removePassword = delete token.password;
  return token;
};

module.exports = {
  findAllUsers,
  findByEmail,
  login,
};