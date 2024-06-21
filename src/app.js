const express = require('express');
const connection = require('./model/database/connection');
const routes = require('./routes');

const app = express();

app.use(express.json()); //para poder a aplicação receber dados via fornmulário.

app.use(routes);

module.exports = app;
