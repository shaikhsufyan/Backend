const express = require("express");
const app = express();
const User = require("./userSchema/user");
const router = require("./routing/route");
 
require("./database/db");
app.use(express.json())
 
 
app.use(router)

const PORT = process.env.PORT||8000;

 

app.listen(PORT, ()=>{
    
    console.log("Running on PORT 8000");
}) 