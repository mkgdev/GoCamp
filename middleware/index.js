var Campground = require("../Models/campground.js")

var Post       =  require("../Models/post.js");



var middleware = {};



middleware.isLoggedIn= function isLoggedIn(req,res, next)             //MiddleWare
{
    
    
    if(req.isAuthenticated()){
        
        return next();
    }
    
    req.flash("error", "You need to be logged in to do that!");
    res.redirect("/login");
        
}



middleware.checkCampgroundOwnership= function checkCampgroundOwnership(req, res, next)
{

  
  if(req.isAuthenticated())
      {
          
          Campground.findById(req.params.id, function(err, foundCampground)
                             {
              
              if(err)
                  {
                      console.log(err);
                  }
              else{
                  
                   if(foundCampground.author.id.equals(req.user._id))
                       {
                           next();
                       }
                  else{
                      req.flash("error", "You dont have permission to do that!")
                      res.redirect("/campground/"+req.params.id);
                  }
              }
              
          });
      }
    else{
        req.flash("error", "You need to be logged in to do that!")
        res.redirect("/login");
    }

}

middleware.checkCommentOwnership= function checkCommentOwnership(req,res, next)
{
    if(req.isAuthenticated())
        {
            Post.findById(req.params.com_id, function(err, comment){
                
                if(err)
                    {
                        return console.log(err);
                    }
                
                if(comment.author.id.equals(req.user._id))
                    {
                        
                        next();
                    }
                else{
                    
                    req.flash("error", "You dont have permission to do that!")
                    res.redirect("/campground/"+req.params.id);
                }
                
                
            });
            
            
        }
    else{
        req.flash("error", "You need to be logged in to do that!")
        
        res.redirect("/login");
    }
    
    
}


module.exports = middleware;


