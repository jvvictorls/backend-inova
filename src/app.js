const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: ['https://teste-omhy.vercel.app', 'http://127.0.0.1:5500'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json()); // Para permitir que a aplicação receba dados via formulário

app.use(routes);

module.exports = app;
