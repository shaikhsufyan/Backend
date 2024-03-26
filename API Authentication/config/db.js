const mongoose = require("mongoose");
// const url = process.env.MONGO_URL;
 
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Mongoose Connect");
}).catch((err)=>{
    console.log("Mongoose Not Connected :: "+err);

})
 
 