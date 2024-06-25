const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors({
  origin: 'https://teste-omhy.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json()); //para poder a aplicação receber dados via fornmulário.

app.use(routes);

module.exports = app;
