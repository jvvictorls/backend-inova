const express = require('express');
const connection = require('./model/database/connection');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
  const findAll = await connection`SELECT * FROM users`
  return res.status(200).json(findAll);
})
module.exports = app;
