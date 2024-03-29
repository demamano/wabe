const jwt = require("jsonwebtoken");
const User = require("../models/user");
const admin = async(req,res,next) =>{
    try{
const token =req.header("x-auth-token");
if(!token)
    return res.status(401).json({msg:"No auth token,request denied"})
const verified = jwt.verify(token,"passwordKey");
if(!verified)
return res.status(401).json({msg:"token verification failed"})
const user =await user.findById(verified.id);
if(user.type == "user" || user.type == "seller"){
    return res.status(401).json({msg:"you are not admin"});

}
req.user =verified.id;
req.token = token;
next();

    }catch(err){
res.status(500).json({
    error:err.message
})
    }
}
module.exports =admin;