// require the library
const mongoose=require('mongoose');
// connect to the database
mongoose.connect('mongodb://localhost/todo-List_db');
// aquire the connection to check if it is successfull
const db=mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));

//if it's running successfully 
db.once('open',function(){
    console.log('Successfully connected to database');
});
