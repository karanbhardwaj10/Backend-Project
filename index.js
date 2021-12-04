// including express
const express=require('express');
const todoList = require('./models/todolist');
// variable to use express
const app=express();
// portnumber
const port=7000;
// use express router
app.use('/',require('./routes'));
// linking our static files
app.use(express.static('./Static-Files'));
// Middleware
app.use(express.urlencoded());

// setting up the view engine
app.set('view engine','ejs');
app.set('views','./views')


app.get('/', function (req, res) {
    todoList.find({}, function (err,TDList) {     
        // the second argument of the function is database name
        if (err) {
            console.log("error in finding the data from db");
            return;
        }
        return res.render('home', {
            title: "ToDO-List",
            // #todo-list is the database name 
            listItems:todo-List,
        });

    });
});




app.post('/create_task', function (req, res) {
    
    todoList.create({
        Description: req.body.Description,
        Catagory:req.body.Catagory,
        Date: req.body.Date,
    }, function (err, newtask) {
        if (err) {
            console.log('error in creating a new task')
            return;
        }
        console.log('*******', newtask);
        return res.redirect('back');
    });

});





// firing up the server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server :${err}`)
    }
    console.log(`Server is running on portnumber :${port}`)
})