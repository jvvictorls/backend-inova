const connection = require('./database/connection');

async function findAll() {
  const findAllUsers =  await connection`SELECT * FROM users`; //retorna um array
  return findAllUsers;
}

async function findByEmail(email) {
  const findUser = await connection`SELECT * FROM users WHERE email = ${email}`;
  return findUser;
}

module.exports = {
  findAll,
  findByEmail,
}