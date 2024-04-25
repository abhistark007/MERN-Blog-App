const express=require("express");
const app=express();

require("dotenv").config();
const mongoose=require("mongoose");
mongoose.connect(process.env.DB_URI)
.then(()=>console.log("DB Connected"))
.catch((e)=>console.log("DB Failed"));

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

