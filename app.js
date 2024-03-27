const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000
const hostname = '127.0.0.1'
// const productRoute = require('./routers/productRoutes')
const userRoute = require('./routers/userRoute')


// create the home page
app.get('/', (req, res) => {
   res.status(200).send('This is the home page')
})


// create the user route page
app.use(userRoute)

// create the not found page
app.use((req, res, next) =>{
   res.status(404).send({
      message:'This is the not found page'
   })
})


// export the modules
module.exports = {
   app,
   port,
   hostname
}
