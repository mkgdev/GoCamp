var mongoose= require("mongoose");

var Campground= require("./Models/campground");

var Post = require("./Models/post");


//var data = [
//    {
//        name: "Cloud's Rest", 
//        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
//        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//    },
//    {
//        name: "Desert Mesa", 
//        image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
//        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//    },
//    {
//        name: "Canyon Floor", 
//        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
//        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
//    }
//]


function seeds()
{
    
//    Campground.remove({},function(err){
//        
//        if(err)
//            {
//                console.log(err);
//            }
//        else{
//            
//            
//            console.log("Campgrounds removed!");
//            
//           data.forEach(function(data){
//               
//              Campground.create(data, function(err, campground){
//                  
//                  if(err)
//                      {
//                          console.log(err);
//                      }
//                  else{
//                      console.log("Campground created!!")
//                      Post.create({
//                          
//                          author: "Mukesh Gupta",
//                          text: "Place is too lovely. I wish there was clean toilet."
//                          
//                          
//                      },function(err, post){
//                          
//                          if(err)
//                              {console.log(err)
//                            }
//                          else{
//                              
//                              console.log("Comment added!");
//                              campground.comment.push(post);
//                              campground.save();
//                          }
//                      });
//                      
//                  }
//                  
//              });
//               
//               
//               
//           });
//            
//            
//            
//        }
//        
//        
//    });
    
    
    
}

module.exports = seeds;