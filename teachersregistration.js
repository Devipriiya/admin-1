import express from "express";

import mongoose from "mongoose";
import connectDB from "./appdb.js";
connectDB();
const app=express();
app.use(express.json());
const teachersregistration=[
    { 
    teacher_id:"1",
    teacher_Name:"Dhamodharan",
    faculty:"Science and Social",
    Department:"CSE",
    father_Name:"Kumar",
    dob:"08/06/1990",
    email:"dhamodharan@gmail.com",
    blood_group:"O+",
    phone_No:"9778523490",
    address:"krishnagiri"
    }
]
const teachersregistrationSchema=mongoose.Schema(
    {
        teacher_id:{
    type:Number,

},
teacher_Name:{
    type:String,
   required:true,
},
faculty:{
    type:String,
   required:true,
},
department:{
    type:String,
   required:true,
},
father_Name:{
    type:String,
   required:true,
}, 
dob:{
    type:String,
    required:true,
},
email:{
    type:String,
   required:true,
},
blood_group:{
    type:String,
   required:true,
},
phone_No:{
    type:String,
   required:true,
},
address:{
    type:String,
   required:true,
},
     })

const Teachersregistration =mongoose.model("Teachersregistration",teachersregistrationSchema);
teachersregistrationSchema.plugin(Teachersregistration);
// app.use(express.json());
app.get("/teachersregistration",(req,res)=>{
    try{
        res.status(200).send(teachersregistration);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
app.post("/teachersregistration",async(req,res)=>{
    try{
        const details={
           teacher_id:req.body.teacher_id,
           teacher_Name:req.body.teacher_Name,
           faculty:req.body.faculty,
           department:req.body.department,
           father_Name:req.body.father_Name,
            dob:req.body.dob,
            email:req.body.email,
            blood_group:req.body.blood_group,
            phone_No:req.body.phone_No,
            address:req.body.address,
            
        };
        console.log(details);
        const teachers=new Teachersregistration(details);
const teachersregistrationCreated=await teachers.save();
if(teachersregistrationCreated){
    console.log("created");
res.status(201).json({message:"successfully created"});
}
else{
    res.status(401);
    throw new error("not found ");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
//update
app.put('/teachersregistration/:id',(req,res)=>{
    console.log(req.params.id);
   Teachersregistration.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher_id:req.body.teacher_id,
            teacher_Name:req.body.teacher_Name,
            faculty:req.body.faculty,
            department:req.body.department,
            father_Name:req.body.father_Name,
             dob:req.body.dob,
             email:req.body.email,
             blood_group:req.body.blood_group,
             phone_No:req.body.phone_No,
             address:req.body.address,
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_teachersregistration:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    //delete
    app.delete('/teachersregistration/:id',(req,res)=>{
        console.log(req.params.id);
      Teachersregistration.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher_id:req.body.teacher_id,
                teacher_Name:req.body.teacher_Name,
                faculty:req.body.faculty,
                department:req.body.department,
                father_Name:req.body.father_Name,
                 dob:req.body.dob,
                 email:req.body.email,
                 blood_group:req.body.blood_group,
                 phone_No:req.body.phone_No,
                 address:req.body.address,
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_teachersregitration:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
    




        app.delete("/teachersregistration",async(req,res)=>{
       Teachersregistration.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        // export default router;
        const port=4000;
        app.listen(port,()=>{
            console.log(`server is running at ${port}`);
            console.log(teachersregistration);
        });