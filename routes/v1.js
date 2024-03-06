const { register } = require('../controller/authController');

const apiRoute = require('express').Router();

apiRoute.post('/register',register)
module.exports = apiRoute