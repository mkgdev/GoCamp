var express             =          require("express"),
    mongoose            =          require("mongoose"),
    bodyParser          =          require("body-parser"),
    User                =          require("./Models/user"),
    Campground          =          require("./Models/campground"),
    Post                =          require("./Models/post"),
    
    flash               =          require("connect-flash"),

    seeds               =          require("./seeds"),
    passport=                      require("passport"),
    LocalStrategy       =          require("passport-local"),
     app                =          express(),
    methodOverride      =          require("method-override");
    
    CampgroundRoutes    =          require("./routes/campground"),
    CommentRoutes       =          require("./routes/comment"),
    IndexRoutes         =          require("./routes/index");           //Authentication Routes


var DBURL = process.env.url;

if(!DBURL)
    {
        DBURL= "mongodb://localhost/go_camp";
    }

 mongoose.connect(DBURL);

    app.use(express.static(__dirname+"/public"));

  app.set("view engine","ejs");
   
    app.use(methodOverride('_method'));

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(flash());


    //seeds();    


//=================================
//    Passport setup
//==================================

 app.use(require("express-session")({
       
       secret: "This is not expected from this site",
       
       resave: false,
       
       saveUninitialized :false
       
       
   }));
    
   app.use(passport.initialize());
   app.use(passport.session());
  
   passport.use(new LocalStrategy(User.authenticate()));

  


  passport.serializeUser(User.serializeUser());

  passport.deserializeUser(User.deserializeUser());






app.use(function(req,res , next){                            //Middleware 
    
    
    res.locals.currentUser = req.user;
    
    res.locals.error       = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});




//***********************
//Routes configuration
//***********************

app.use(CampgroundRoutes);
app.use(CommentRoutes);
app.use(IndexRoutes);

//************************










    
//=======================================================
//             Listening Port
//========================================================
app.listen(2000, function(){
    
    
   console.log("Yelpcamp server has started");
   
    
});