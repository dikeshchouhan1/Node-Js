import express from "express"
import connectDB from "./config/DbConnection.js";
import User from "./model/UserModels.js";
const app=express();
const  PORT=3000;

app.use(express.json())
app.post('/user',async(req,res)=>{
    try{
        const user=await User.create(req.body);
   res.json(user)
    console.log("user crated successfully")

    }
    catch(err){
        console.log(err)
    }
   
})
app.get("/users", async (req, res) => {
 
  try{
    const users = await User.find();
    res.json(users);
  }
   catch(err){
        console.log(err)
    }
});

app.listen(PORT,()=>{
    connectDB();
    console.log(`server is runing ${PORT}`)
})