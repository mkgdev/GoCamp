
var mongoose=  require("mongoose");



var postSchema = new mongoose.Schema({
    
    author: {
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        
        username: String
        
        
    },
    
    text: String
    
    
    
});


module.exports = mongoose.model("Post", postSchema);