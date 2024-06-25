const express = require('express');
const cors = require('cors');
const connection = require('./model/database/connection');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json()); //para poder a aplicação receber dados via fornmulário.

app.use(routes);

module.exports = app;
