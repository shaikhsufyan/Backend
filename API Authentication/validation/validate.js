
const joi = require("joi");
const signupValidator = (req,res,next)=>{
    const schema = joi.object({
        fullName:joi.string().min(4).required().max(100),
        email:joi.string().email().required(),
        passowrd:joi.string().min(6).alphanum().required(),

    })
    const{error, value} = schema.validate(req.body);
    if(error){
        return res.status(400).json(error)
    }
    next()

}
module.exports = {signupValidator}