// install mongoose => require the mongoose => make the connection => create the schema => create the model => export the model
const mongoose = require('mongoose')
const {Schema, model} = mongoose


// create the schema
const userSchema = new Schema({
   id:{
      type:String,
      require:true
   },
   name:{
      type:String,
      require:true
   },
   passion:{
      type:String,
      require:true
   },
   age:{
      type:Number,
      require:true
   }
})

// create the model
const userModel = new model('users', userSchema)

// export the model
module.exports = userModel;