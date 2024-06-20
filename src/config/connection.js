const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'db',
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'secti_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;