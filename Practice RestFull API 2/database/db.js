const mongoose = require("mongoose");
 
mongoose.connect("mongodb+srv://codewithsk99:UqYxThUqUSwVovN7@cluster0.ywhxpk0.mongodb.net/employe")
 
.then((req,res)=>{
    console.log("DATABASE CONNECT");

}).catch(()=>{
    console.log("NOT CONNECT");
})