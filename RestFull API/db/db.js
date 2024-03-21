const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://codewithsk99:UqYxThUqUSwVovN7@cluster0.ywhxpk0.mongodb.net/students?retryWrites=true&w=majority")
mongoose.connect("mongodb+srv://codewithsk99:UqYxThUqUSwVovN7@cluster0.ywhxpk0.mongodb.net/students")
.then(()=>{
    console.log("Succesfully Connect");
}).catch(()=>{
    console.log("Not Connected");
})