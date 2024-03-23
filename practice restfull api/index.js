const express = require("express");
const app = express();
const User = require("./user/validation") 
require("./database/db")
const routing = require("./routers/routing")
 

app.use(routing);
 
app.use(express.json())
const PORT = process.env.PORT||8080;

app.post("/user", async (req,res)=>{  
  

    const datas = new User(req.body);
    // using async await
    try{
        const getData = await datas.save();
        res.status(201).send(getData);  

    }catch(err){
        res.status(400).send(err)
    }
   


    // using then and catch method :
    // datas.save().then(()=>{ 
    //     res.status(201).send(datas)
    //     console.log(datas);
    // }).catch((err)=>{
    //     res.status(400).send(err)
    //     console.log("ERROR Message"+err);
    // }) 
    
})

// GET DATA

routing.get("/user",async (req,res)=>{
    try{
        const result = await User.find();
        res.status(200).send(result)

    }catch(err){
        res.status(400).send(err)
    }
 
})
// GET PERTICULAR DATA
app.get("/user/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        console.log(id);
        const result = await User.find({_id:id});
        res.status(200).send(result)
    }catch(err){
        res.status(400).send(err)

    }
})

// DELETE DATA
app.delete("/user/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await User.findByIdAndDelete(req.params.id)
        res.status(204).send(result);
    }catch(err){
        res.status(400).send(err);
    }
}) 
app.put("/user/:id", async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await User.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).send(result)
    }catch(err){
        res.status(400).send(err)
    }
})

app.listen(PORT,()=>{
    console.log("Running on Port 8000");
})
