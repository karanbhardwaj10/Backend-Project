// creating a schema
const mongoose=require('mongoose');

const todoListschema = new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Catagory:{
        type:String
    },

  });
  const todoList=mongoose.model('todoList',todoListschema)
  module.exports=todoList;