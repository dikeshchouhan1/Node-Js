import express from "express"
import connectDB from "./config/DbConnection.js";
import User from "./model/UserModels.js";
const app=express();
const  PORT=3000;

app.use(express.json())


// ✅ Create (POST)
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

// ✅ Read All (GET)
app.get("/users", async (req, res) => {
 
  try{
    const users = await User.find();
    res.json(users);
  }
   catch(err){
        console.log(err)
    }
});


// ✅ Read One (GET)
app.get("/users/:id",async (req,res)=>{
    try{
        const user= await User.findById(req.params.id);
        res.json(user)
      
    }
    catch(err){
        console.log(err)
    }
})


// ✅ Update (PUT)
app.put("/users/:id",async (req,res)=>{
    try{
      const update=await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
      })
      res.json(update);
    }
    catch(err){
        console.log(err)
    }
})

// ✅ Delete (DELETE)
app.delete("/users/:id",async(req,res)=>{
    try{
      await User.findByIdAndDelete(req.params.id)
      res.json({message:"User deleted"})
    }catch(err){
        console.log(err)
    }
})
app.listen(PORT,()=>{
    connectDB();
    console.log(`server is runing ${PORT}`)
})