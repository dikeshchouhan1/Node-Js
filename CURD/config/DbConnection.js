import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB =async()=>{
    try{
        const uri = process.env.MONGO_DB;
         console.log("✅ MongoDB Connected Successfully");
       await mongoose.connect(uri)
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB;