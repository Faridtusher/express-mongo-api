// import the router
const express = require('express')
const productRoute = express.Router();

// import the file from controller
const {postProducts} = require('../controllers/productsControllers')


productRoute.post('/products', postProducts)


// export the module
module.exports = productRoute