const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://codewithsk99:UqYxThUqUSwVovN7@cluster0.ywhxpk0.mongodb.net/employe?retryWrites=true&w=majority")
 
.then(()=>{
    console.log("DB Succesfully Connect");
}).catch(()=>{
    console.log("DB Not Connect");
})
