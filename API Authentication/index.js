const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config(); 
require("./config/db")

 
const PORT = 8000;

app.use("/api",routes) 
app.use(bodyParser.json())
 
app.listen(PORT,()=>{
    console.log("server running on PORT 8000");
})
