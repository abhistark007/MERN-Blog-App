const express=require("express");
const app=express();
app.use(express.json());

require("dotenv").config();
const mongoose=require("mongoose");
mongoose.connect(process.env.DB_URI)
.then(()=>console.log("DB Connected"))
.catch((e)=>{console.log("DB Failed");console.log(e.message);});

const userRoutes=require("./routes/user.route");
app.use("/api/user",userRoutes);
const authRoutes=require("./routes/auth.routes");
app.use("/api/auth",authRoutes)



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

// add a middleware func to handle errors
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || 'Internal server error'
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})





