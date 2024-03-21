const express = require("express");
const app = express();
const User = require("./models/user"); 
require("./db/db") 
 
app.use(express.json())

const port = process.env.port||8000;
app.post("/signup",   (req,res)=>{ 
    const datas = new User(req.body);
     
     datas.save().then(()=>{
        console.log("Running"); 
        res.status(201).send(datas);
     }).catch((err)=>{
        res.status(400).send(err)
        console.log("Error");

     }) 
    
})

app.listen(port,()=>{
    console.log("Running on Port "+port);
})