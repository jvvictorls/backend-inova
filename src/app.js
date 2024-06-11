const express = require('express');
const SignUpRouter = require('./routes/signup');

const app = express();

app.use(express.json());

app.get('/signup', (req, res) => { SignUpRouter.get(req, res); });

module.exports = app;
