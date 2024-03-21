const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type:String,
        require:true,
        min:5
    },
    email:{
        type:String,
        require:true, 
        min:5
    }
})

const UserData =  new mongoose.model("datas",UserSchema);
module.exports = UserData;