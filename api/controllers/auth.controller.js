const User  = require("../models/user.model");
const bcryptjs=require("bcryptjs");
const { errorHandler } = require("../utils/error");


exports.signup=async(req,res,next)=>{
    // console.log(req.body);
    const {username,email,password}=req.body;

    if(!username || !email || !password || username==="" || email==="" || password===""){
        // return res.status(400).json({message:"All fields are required"});
        next(errorHandler(400,'All fields are required'));
    }
    const hashedPassword=await bcryptjs.hash(password,10);
    const newUser=new User({
        username,
        email,
        password:hashedPassword
    });

    try{
        await newUser.save();
        res.json({message:"Signup successfully"});
    }
    catch(e){
        next(e);
    }

}