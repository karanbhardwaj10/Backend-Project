// including express
const express=require('express');
// variable to use express
const app=express();
// portnumber
const port=7000;





// firing up the server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server :${err}`)
    }
    console.log(`Server is running on portnumber :${port}`)
})