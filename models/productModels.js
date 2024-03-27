// // install => require => make connection => create the schema => create the models  => exports modules
// const mongoose = require('mongoose')
// const {Schema, model} = mongoose;

// // make the connections
// const connectDb = async() =>{
//    try {
//       await mongoose.connect('mongodb://127.0.0.1:27017/productData')
//       console.log('Db is connected')

//    } catch (error) {
//       console.log(error)
//       console.log('Db not connected')
//    }
// }


// // create the schema
// const productSchema = new Schema({
//    id:{
//       type:String,
//       require:true
//    },
//    brand:{
//       type:String,
//       require:true
//    },
//    title:{
//       type:String,
//       require:true
//    },
//    // gmail:{
//    //    type:String, 
//    //    require:true,
//    // },
//    // phone:{
//    //    type:String,
//    //    require:true
//    // },
//    price:{
//       type:Number,
//       require:true
//    }
// })

// // create the model
// const createModel = model('products', productSchema)



// // export the modules
// module.exports = {
//    connectDb,
//    createModel
// }
