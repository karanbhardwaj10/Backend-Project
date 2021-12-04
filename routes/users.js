const express = require('express')
// calling the router function
const router = express.Router()
// checking if router is loaded
console.log(" user router loaded");

//linking the userController to its user router file
const userController=require('../controllers/users_controller')
router.get('/profile',userController.profile);



module.exports=router;