import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const tenthtimetableSchema=mongoose.Schema({
 
    teacher:{
        type:String,
       required:true,
    },
    standard:{
        type:String,
       required:true,
    },
    subject:{
        type:String,
       required:true,
    },
    schedule:{
        type:String,
       required:true,
    }
   
        
})
const Tenthtimetable=mongoose.model("Tenthtimetable",tenthtimetableSchema);
tenthtimetableSchema.plugin(Tenthtimetable);

const tenthtimetable={
 
    day:[
        {
            teacher:"Divya",
            standard:"10th standard",
            subject:"PT",
            schedule:"9.45-10.30"
        },
    {
        teacher:"Megha",
        standard:"10th standard",
        subject:"Tamil",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Preethi",
        standard:"10th standard",
        subject:"Maths",
        schedule:"11.30-12.15"
    },
   
    {
        teacher:"Jothi",
        standard:"10th standard",
        subject:"Science",
        schedule:"12.15-1.00"
    },
  
    {
        teacher:"Kalai",
        standard:"10th standard",
        subject:"English",
        schedule:"2.00-2.45"
    },
   {
        teacher:"Hari",
        standard:"10th standard",
        subject:"Social",
        schedule:"3.30-4.15"
    },
  ]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(tenthtimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Tenthtimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            tenthtimetable:result
            
        })
    })
    .catch(err=> {
    console.log(err);
    res.status(505).json({
        error:err
    })
    }
  )
})

router.post("/",async(req,res)=>{
    try{
        const details={
       
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
            
        };
        console.log(details);
        const tenth=new Tenthtimetable(details);
const tenthtimetableCreated=await tenth.save();
if(tenthtimetableCreated){
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
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
   Tenthtimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_tenthtimetable:result       
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
    router.delete('/:id',(req,res)=>{
        console.log(req.params.id);
      Tenthtimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_tenthtimetable:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
    




        router.delete("/",async(req,res)=>{
       Tenthtimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(tenthtimetable);
        // });