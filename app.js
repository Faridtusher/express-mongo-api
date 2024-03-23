const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000
const hostname = '127.0.0.1' 


// create the home page
// app.get()


// create the not found page



// export the modules
module.exports = {
   app, 
   port,
   hostname
}
