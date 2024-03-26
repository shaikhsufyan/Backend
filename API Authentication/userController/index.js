const UserModel = require("../models/userSchema")
 const bcrypt = require("bcrypt");
 const express = require("express");
 const app = express();
 app.use(express.json())
 
module.exports={
    signupUser: async (req,res)=>{
        // res.send("Sign Up Page")
        const userModel = new UserModel(req.body);
        
        userModel.password=await bcrypt.hash(req.body.password)
        try{
            const response = await userModel.save();
            UserModel.password=undefined;
            return res.status(201).json({message:"Succes",data:response})
 
        }catch(err){
            return res.status(500).json(err)
        }
    },
    loginUser:(req,res)=>{
        res.send("Login Page")
    }
}