const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/auth',require('./controllers/authController'));

module.exports = app;