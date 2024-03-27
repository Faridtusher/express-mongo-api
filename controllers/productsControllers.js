const {v4 : uuid4} = require('uuid')
var bodyParser = require('body-parser')
const {createModel} = require('../models/productModels')
const express = require('express');
// const { app } = require('../app');
const abc = express();
abc.use(bodyParser.urlencoded({ extended: true }))
abc.use(bodyParser.json())



const postProducts =  async(req, res) =>{
   const newProducts = new createModel({
      id: uuid4(),
      brand: req.body.brand,
      title: req.body.title,
      // gmail: req.body.gmail,
      // phone: req.body.phone,
      price: Number(req.body.price)
   })

   await newProducts.sava();
   res.status(200).json(newProducts)
}


// export the file
module.exports = {
   postProducts
}