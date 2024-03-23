// install => require => make connection => create the schema => create the models  => exports modules
const mongoose = require('mongoose')
const {Schema, model} = mongoose;

// make the connections
try {
   const connectDb = mongoose.connect('mongoDb://127.0.0.1/productsData')
} catch (error) {
   
}
