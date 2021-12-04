const express = require('express')
// calling the router function
const router = express.Router()
console.log('posts route file running')
const postsController=require('../controllers/posts_controller');
router.get('/',postsController.posts);

module.exports=router;