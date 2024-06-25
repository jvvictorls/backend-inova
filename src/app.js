const express = require('express');
const cors = require('cors');
const connection = require('./model/database/connection');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: '*', // or '*' to allow all origins
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json()); //para poder a aplicação receber dados via fornmulário.

app.use(routes);

module.exports = app;
