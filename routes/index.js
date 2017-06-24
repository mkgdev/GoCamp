var express     =  require("express");

var router      =  express.Router();

var User        =  require("../Models/user");

var passport   =     require("passport");



// ============================
//  Landing Page


  router.get("/", function(req, res){
    
    
    res.send("Welcome to yelpcamp");
    
});




//========================================
//    Auth Routes setting
//========================================



//Registe Route
router.get("/register", function(req, res){
    
    res.render("register");
    
    
});


router.post("/register", function(req, res){
    
    
    
    User.register(new User({username:req.body.username}), req.body.password, function(err, user){
        
        
        if(err)
            {
                req.flash("error",err.message);
                
                return res.render("register");
            }
        
              passport.authenticate("local")(req, res, function(){
                 
                
                  res.redirect("/campground");
                  
              });
    } );
    
});


//Login route
router.get("/login", function(req, res){
    
    
    res.render("login");
});
    
router.post("/login",passport.authenticate("local", {      //middleware
    
    
    successRedirect :"/campground",
    
    
    failureRedirect :"/login"
    
    
}), function(req,res){
    
    
    
    
});


// Logout Route

router.get("/logout", function(req, res){
    
    
    req.logout();
    
    req.flash("success", "You have successfully logged  out!")
    res.redirect("/campground");
});




module.exports  = router;

