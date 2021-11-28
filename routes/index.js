const express = require('express')
// calling the router function
const router = express.Router()
// checking if router is loaded
console.log("router loaded");

// linking our controller file to our router index.js file
const homeController=require('../controllers/home_controller')



// using function to use the controller to our server and this will handle all the request for home page
router.get('/',homeController.home)
// this will handle all the requests for user page
router.use('/users',require('./users'));

// for any furthur routes,access from here - routes.use('/routername',require('./routerfile')) for ex
router.use('/posts',require('./posts'));


// exporting this index.js router file to our main index.js file
module.exports=router;