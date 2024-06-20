const connection = require('../config/connection');

const findAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM users');
  return rows;
}

module.exports = {
  findAll,
}