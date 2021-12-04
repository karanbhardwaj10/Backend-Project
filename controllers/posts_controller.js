module.exports.posts=function(req,res){
    // return res.render('<h1>This is the page for posts</h1>');
    return res.render('home',{
        title:"Hello",
    })
}