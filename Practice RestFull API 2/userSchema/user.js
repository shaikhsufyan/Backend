const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userShema =  {
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true

    },
    rank:{
        type:Number,
        required:true

    }
     
}
const usersShema = new mongoose.model("employes", userShema);
module.exports = usersShema;