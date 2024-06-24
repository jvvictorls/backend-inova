const connection = require('./database/connection');

async function findAll() {
  const findAllUsers =  await connection`SELECT * FROM users`; //retorna um array
  return findAllUsers;
}

async function findByEmail(email) {
  const [result] = await connection`SELECT * FROM users WHERE email = ${email}`;
  return result;
}

async function login(email, password) {
  const [token] = await connection`SELECT * FROM users WHERE email = ${email} AND password = ${password}`;
  return token;
}

async function create(name, cpf, email, password, endereço, interesse) {
  const result = await connection`INSERT INTO users (name, cpf, email, password, endereço, interesse_em) VALUES (${name}, ${cpf}, ${email}, ${password}, ${endereço}, ${interesse}) RETURNING *`;
  return result;
}

module.exports = {
  findAll,
  findByEmail,
  login,
  create
}