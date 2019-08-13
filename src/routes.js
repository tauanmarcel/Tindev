const express = require('express');

const DevController = require('./controllers/DevController');

routes = express.Router();

routes.post('/devs', DevController.store);

module.exports = routes;