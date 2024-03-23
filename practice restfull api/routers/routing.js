const express = require("express");
const app = express();
const User = require("../user/validation")
const router = new express.Router();



router.get("/user",async (req,res)=>{
    try{
        const result = await User.find();
        res.status(200).send(result)

    }catch(err){
        res.status(400).send(err)
    }
 
})

module.exports = router;