var express =  require("express");
var router  =  express.Router();
var Campground  =        require("../Models/campground");

var middleware   =  require("../middleware/index");
    





// campground routes
router.get("/campground", function(req,res)
{
    
    
  Campground.find({}, function(err, campgrounds)
    {
        
        
       if(err)
       console.log(err);
       else{
          res.render("../views/Campgrounds/index",{Campground: campgrounds}); 
       }
        
    });
    
   
    
    
});



// Post routes
router.post("/campground", middleware.isLoggedIn,function(req,res)
{
    var newCampground = req.body.campground  // accessing Object named campground
    
    var username  = req.user.username;
    var id       = req.user._id;
    
    var author = {
        id: id,
        username:username
    };
    
    

    
    
    Campground.create(newCampground, function(err, campground){
        
        if(err)
        {
            console.log(err);
        }
        else{
            
           campground.author = author;
            campground.save();
            console.log("New Campground created!");
          // console.log(req.user);
            console.log(campground);
            
            req.flash("success","New Campground added by "+username);
            res.redirect("/campground");
            
        }
        
    });
  

    
    
    
});


// new routes
router.get("/campground/new",middleware.isLoggedIn,function(req,res)
{
    
   res.render("../views/Campgrounds/new");
    
});


//Show routes

router.get("/campground/:id", function(req,res)
{
    
   Campground.findById(req.params.id).populate("comment").exec(function(err, campground){
       
      if(err)
          {
              
              console.log(err);
          }else{
              
              res.render("../views/Campgrounds/show",{campground:campground});
          }
       
       
       
   });
   
    
    
});


//Edit Campground Routes

router.get("/campground/:id/edit",middleware.checkCampgroundOwnership, function(req,res){
    
    
    Campground.findById(req.params.id, function(err, campground){
        
        
        if(err)
            {
                console.log(err);
                return res.redirect("back");
            }
           
            console.log(campground);
        
            
            res.render("../views/Campgrounds/edit",{campground:campground});
        
    });
    
});

//Update  Campground Routes

router.put("/campground/:id", middleware.checkCampgroundOwnership, function(req,res){
    
    
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err,campground){
        
        if(err)
            {
               return console.log(err);
                res.redirect("/campground/"+req.params.id);
                
            }
        else{
            
            
            console.log(`Updated Campground : `+campground);
            req.flash("success","Successfully Updated Campground!")
            res.redirect("/campground/"+req.params.id);
        }
        
    });
    
    
});


//Delete campground Routes


router.delete("/campground/:id", middleware.checkCampgroundOwnership, function(req,res){
    
    
    Campground.findByIdAndRemove(req.params.id, function(err,campground){
        
        
        
        if(err){
            console.log(err);
            req.flash("error","Campground not deleted!!")
            res.redirect("/campground");
        }
        else{
            
            console.log(`Deleted Campground : `+campground);
             req.flash("success",campground.name+" Campground deleted successfully!!")
            res.redirect("/campground");
        }
    });
    
});





module.exports = router;