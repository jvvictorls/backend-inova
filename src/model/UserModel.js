const connection = require('./database/connection');

async function findAll() {
  const findAllUsers =  await connection`SELECT * FROM users`; //retorna um array
  return findAllUsers;
}

async function findByEmail(email) {
  const result = await connection`SELECT * FROM users WHERE email = ${email}`;
  return result;
}

async function login(email, password) {
  const result = await connection`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
  return result;
}

module.exports = {
  findAll,
  findByEmail,
  login,
}