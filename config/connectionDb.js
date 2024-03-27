const mongoose = require('mongoose')
const {Schema, model} = mongoose

// make the connection
const connectDb = async () => {
   try {
      await mongoose.connect('mongodb://127.0.0.1:27017/myUser')
      console.log('Your db is connected')
   } catch (error) {
      console.log(error)
      console.log('Db is not connected')
   }
}

// export the module
module.exports = connectDb;