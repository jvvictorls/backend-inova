const connection = require('../config/connection');

const findAll = async () => {
  const [rows] = await connection.execute('SELECT * FROM users');
  const removedPassword = rows.map((row) => {
    delete row.password;
    return row;
  })

  return removedPassword;
}

module.exports = {
  findAll,
}