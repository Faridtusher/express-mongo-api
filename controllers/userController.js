// require the express => 
const {v4:uuid4} = require('uuid')
const express = require('express')
const userExpress = express();
const userModel =  require('../models/userModel')
const bodyParser = require('body-parser')
userExpress.use(bodyParser.json())



// create the user
const createUser = async (req, res) =>{
   try {
      const createUsers = userModel({
         id: uuid4() ,
         name: req.body.name,
         position: req.body.position,
         age: Number(req.body.age)
      })

      if(createUsers){
         await createUsers.save()
         res.status(200).json(createUsers)
      }
      else{
         res.status(500).send('Problem in your request')
      }
   } catch (error) {
     res.status(500).send({
      message:error.message
     }) 
   }
   // res.status(200).send('This is the post')
}

// get the user
const getUser =async (req, res) =>{

   try {
      // const id = req.params.id;
      const findUser = await userModel.find();
      if(findUser){
         res.status(200).json(findUser)
      }
      else{
         res.status(404).send('Can not find the user')
      }
   } catch (error) {
      res.status(500).send({
         message:error.message
      })
   }


   // res.status(200).send('Get page')
}

// get user by id
const getSingleUser = async (req, res) =>{
   try {
   //   const id = req.params.id;
      const getSingleUser = await userModel.findOne({ _id: req.params.id })
     if(getSingleUser){
      res.status(200).send(getSingleUser)
     }
     else{
      res.status(404).send('Can not get the user')
     } 
   } catch (error) {
      res.status(500).send({
         message:error.message
      })
   }
}

// update the user
const updateUser = async (req, res) =>{

   try {
      const updateUser = await userModel.findOne({_id: req.params.id})
      updateUser.name = req.body.name,
      updateUser.age = Number(req.body.age)
      updateUser.position = req.body.position

      await updateUser.save();
      res.status(200).json(updateUser)
      // res.status(200).send(updateUser)
   } catch (error) {
     res.status(500).send({
      message:error.message
     }) 
   }




   // res.status(200).send('Update page')
}

// delete the user
const deleteUser = async(req, res) =>{
   try {
      // const deleteUser
      const deleteUser = await userModel.deleteOne({_id:req.params.id})
      if(deleteUser){
         res.status(200).send(deleteUser)
      }
      else{
         res.status(500).send({
            message:'Not deleted',
         })
      }

   } catch (error) {
      res.status(500).send({
         message:error.message
      })
   }
   res.status(200).send('Delete page')
}

// export the module
module.exports = {
   createUser,
   getUser,
   getSingleUser,
   updateUser, 
   deleteUser
}
