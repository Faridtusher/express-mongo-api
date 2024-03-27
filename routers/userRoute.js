const express = require('express');
const userRoute = express.Router();
const { createUser, getUser, getSingleUser, updateUser, deleteUser } = require('../controllers/userController')


userRoute.post('/user', createUser)
userRoute.get('/user', getUser )
userRoute.get('/user/:id', getSingleUser )
userRoute.patch('/user/:id', updateUser)
userRoute.delete('/user/:id', deleteUser)


// export the module
module.exports = userRoute;