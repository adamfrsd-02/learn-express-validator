const express = require('express'),
    routes = express.Router(),
    categoryController = require('./controllers/categoryController'),
    categoryValidation = require('./middleware/categoryValidation');

// categories routes
routes.get('/api/v1/categories', categoryController.findAll);
routes.post('/api/v1/categories', categoryValidation.categoryValidation, categoryController.create);
routes.delete('/api/v1/categories/:id', categoryController.remove);




module.exports = routes;