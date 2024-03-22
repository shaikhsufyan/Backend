const express = require("express");
 
const User = require("../userSchema/user");
const router =  express.Router();

router.get("/data",async (req,res)=>{
    try{
      
    const data = await  User.find();
    res.send(data)

    }catch(err){
        res.send(err);
    }
})
router.get("/data/:id", async (req,res)=>{
     
    try{
        const id = req.params.id;
    console.log(id);
        const data = await User.find({_id:id})
        res.status(200).send(data)

    }catch(err){

    }
})

router.post("/data",async (req,res)=>{
  
    const datas = new User(req.body);
    console.log(datas);
  // USING ASYNC AWAIT
  try {
    const getData = await datas.save();
    res.status(201).send(getData);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/data/:id",async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await User.findByIdAndUpdate({_id:id},req.body,{new:true});
    res.status(201).send(data)
  }catch(err){
    res.send(err)
  }

})

router.delete("/data/:id", async (req,res)=>{
  try{
    const id = req.params.id;
    const data = await User.findByIdAndDelete(req.params.id);
    res.send(data);

  }catch(err){
    res.send(err);
  }
})

module.exports=router