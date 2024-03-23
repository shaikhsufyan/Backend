const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const EmployeSchema = new Schema ({
     
    name:{
        type:String,
        require:true,
        min:4
    },
    age:{
        type:Number,
        require:true
    },
    field:{
        type:String,
        require:true,

    }
})

const MySchema = new mongoose.model("employes",EmployeSchema );
module.exports=MySchema;