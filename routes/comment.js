var express   =   require("express");

var router    =   express.Router();

 var  Post=       require("../Models/post");

var Campground  = require("../Models/campground");


var middleware   =  require("../middleware/index");



//======================================================
//    Comments
//======================================================





//create comment
router.get("/campground/:id/comment/new",middleware.isLoggedIn, function(req, res){
    
    
    Campground.findById(req.params.id, function(err, campground){
        
        
        if(err)
            {
                
                console.log(err);
            }
        else{
            res.render("Comments/new",{campground:campground});
            
        }
        
    });
    
    
});

// Post comment
router.post("/campground/:id/comment",middleware.isLoggedIn,function(req, res){
    
var comment= req.body.comment;
    
comment.author = {
    id: req.user._id,
    username: req.user.username
    
}
    
    Post.create(comment, function(err, comment){
        
        if(err)
            {
                console.log(err);
            }
        else{
               
            
            console.log("comment created");
            console.log(comment);
            Campground.findById(req.params.id, function(err, campground){
                
                
                if(err)
                    {
                        console.log(err);
                    }
                else
                    {
                        
                        campground.comment.push(comment);
                        campground.save(function(err, campground)
                       {
                            
                            if(err)
                                {console.log(err)}
                            else{
                                console.log(campground);
                                
                                req.flash("success","New Comment Added!");
                                res.redirect("/campground/"+req.params.id);
                            }
                            
                            
                        });
                    }
                
            });
            
        }
        
        
    });
    
    
    
});

//Edit comment route

router.get("/campground/:id/comment/:com_id/edit", middleware.checkCommentOwnership,function(req, res){
    
    Campground.findById(req.params.id, function(err, campground)
 {
    
         if(err)
             {
                 return console.log(err);
             }
        Post.findById(req.params.com_id, function(err, comment)
        {
            if(err)
                {
                    return console.log(err);
                }
            
             res.render("../views/Comments/edit", {campground:campground, comment:comment});
            
            
        });
                   
        
        
    });
    
   
    
});

//update comment route
router.put("/campground/:id/comment/:com_id",middleware.checkCommentOwnership,function(req, res){
    
    Post.findByIdAndUpdate(req.params.com_id, req.body.comment, function(err, comment){
        
        
        if(err)
            {
                
                return console.log(err);
            }
        
        console.log(`update comment: `+comment);
        
        req.flash("success","Comment Edited Successfully!");
        
        
        
        
    });
    
    res.redirect("/campground/"+req.params.id);
    
    
    
    
});

//Delete comment route

router.delete("/campground/:id/comment/:com_id", middleware.checkCommentOwnership, function(req,res){
    
    Post.findByIdAndRemove(req.params.com_id, function(err, comment){
        
        if(err)
            {
                return console.log(err);
            }
        console.log(`Delete comment : `+comment);
        req.flash("success","Comment deleted successfully");
    });
    
    res.redirect("/campground/"+ req.params.id);
});

module.exports  = router;

