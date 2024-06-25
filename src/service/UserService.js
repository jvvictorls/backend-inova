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
  delete token.password;
  return token;
};

const create = async (name, cpf, email, password, address, interest) => {
  const result = await UserModel.create(name, cpf, email, password, address, interest);
  delete result.password && delete result.cpf;
  return result;
}

module.exports = {
  findAllUsers,
  findByEmail,
  login,
  create,
};