const passport =require('passport');
const Localstrategy=require('passport-local').Strategy;

const User=require('../models/user');

// authentication using passport
passport.use(new Localstrategy({
    usernameField:'email',
    },
    function(email, password, done) {
        // find the user and establish identity
        User.findOne({email: email }, function (err, user) {
            // findone argument me pehla email is schema waala email and second waala email after : this is value jo pass ki hai above function argument me
          if (err) { console.log("error in finding the user"); return done(err); }
          if (!user || user.password != password) { console.log('invalid Username/password'); return done(null, false); }
          return done(null, user);
        });
      }
  ));

//   serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});
// deserialize the user from the key in cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if (err) { console.log("error in finding the user"); return done(err); }
        return done(null,user);
    })
})
// check if user is authenticated 
// this will be used as a middleware
passport.checkAuthentication=function(req,res,next){
// if the user is signed in then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
    return next();
}
// if user is not signed in
return res.redirect('/users/sign-in');
}
passport.setAuthenticatedUser=function(req,res,next){
    if(req.isAuthenticated()){
// req.user contains the current signed in user from the session cookie and we're just sending this to the locals for the views
        res.locals.user= req.user
    }
    next();
}

module.exports=passport;