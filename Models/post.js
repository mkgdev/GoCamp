
var mongoose=  require("mongoose");

var moment  =  require("moment");



var postSchema = new mongoose.Schema({
    
    author: {
        id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        
        username: String
        
        
    },
    
    date:{
           type:String,
        default: moment().calendar().toString()
        
    },
    
    text: String
    
    
    
});


module.exports = mongoose.model("Post", postSchema);