import express from "express";

import mongoose from "mongoose";
import connectDB from "./appdb.js";
connectDB();
const app=express();
app.use(express.json());
const user=[
    { enroll_No:"1",
    student_Name:"Aswini",
    class:"1st Standard",
    section:"A",
    father_Name:"Raj",
    email:"aswini@gmail.com",
    blood_group:"A+",
    phone_No:"9978563490",
    address:"krishnagiri"
    },
    {
        enroll_No:"2",
    student_Name:"Aswini",
    class:"1st Standard",
    section:"A",
    father_Name:"Raj",
    email:"aswini@gmail.com",
    blood_group:"A+",
    phone_No:"9978563490",
    address:"krishnagiri"
    }
]
const registrationSchema=mongoose.Schema(
    {
enroll_No:{
    type:Number,

},
student_Name:{
    type:String,
   required:true,
},
class:{
    type:String,
   required:true,
},
section:{
    type:String,
   required:true,
},
father_Name:{
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

const Registration =mongoose.model("Registration",registrationSchema);
registrationSchema.plugin(Registration);
// app.use(express.json());
app.get("/registration",(req,res)=>{
    try{
        res.status(200).send(user);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
app.post("/registration",async(req,res)=>{
    try{
        const details={
            enroll_No:req.body.enroll_No,
            student_Name:req.body.student_Name,
            class:req.body.class,
            section:req.body.section,
            father_Name:req.body.father_Name,
            email:req.body.email,
            blood_group:req.body.blood_group,
            phone_No:req.body.phone_No,
            address:req.body.address,
            
        };
        console.log(details);
        const user=new Registration(details);
const registrationCreated=await user.save();
if(registrationCreated){
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
app.put('/registration/:id',(req,res)=>{
    console.log(req.params.id);
   Registration.findOneAndUpdate({_id:req.params.id},{
        $set:{
            enroll_No:req.body.enroll_No,
            student_Name:req.body.student_Name,
            class:req.body.class,
            section:req.body.section,
            father_Name:req.body.father_Name,
            email:req.body.email,
            blood_group:req.body.blood_group,
            phone_No:req.body.phone_No,
            address:req.body.address,
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_userDetails:result       
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
    app.delete('/registration/:id',(req,res)=>{
        console.log(req.params.id);
        Registration.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                enroll_No:req.body.enroll_No,
                student_Name:req.body.student_Name,
                class:req.body.class,
                section:req.body.section,
                father_Name:req.body.father_Name,
                email:req.body.email,
                blood_group:req.body.blood_group,
                phone_No:req.body.phone_No,
                address:req.body.address,
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_userDetails:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
    




        app.delete("/registration",async(req,res)=>{
            Registration.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        // export default router;
        const port=4000;
        app.listen(port,()=>{
            console.log(`server is running at ${port}`);
            console.log(user);
        });