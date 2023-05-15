import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const twelfthtimetableSchema=mongoose.Schema({
 
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
const Twelfthtimetable=mongoose.model("Twelfthtimetable",twelfthtimetableSchema);
twelfthtimetableSchema.plugin(Twelfthtimetable);

const twelfthtimetable={
 
    day:[
        {
            teacher:"Harish",
            standard:"12th standard",
            subject:"English",
            schedule:"9.45-10.30"
        }, 
        {
            teacher:"Karthik",
            standard:"12th standard",
            subject:"Computer Science",
            schedule:"10.30-11.15"
        },
    {
        teacher:"Damodharan",
        standard:"12th standard",
        subject:"Tamil",
        schedule:"11.30.-12.15"    
    },
    
    {
        teacher:"Diya",
        standard:"12th standard",
        subject:"Physics",
        schedule:"12.15-1.00"   
    },
    {
        teacher:"Gowrishankar",
        standard:"12th standard",
        subject:"Chemistry",
        schedule:"2.00-2.45"
    },
   
    {
        teacher:"Dheeran",
        standard:"12th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },
    {
        teacher:"Priyadharshini",
        standard:"12th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(twelfthtimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Twelfthtimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            twelfthtimetable:result
            
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
        const twelfth=new Twelfthtimetable(details);
const twelfthtimetableCreated=await twelfth.save();
if(twelfthtimetableCreated){
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
   Twelfthtimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_twelfthtimetable:result       
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
      Twelfthtimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_twelfthtimetable:result       
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
       Twelfthtimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(twelfthtimetable);
        // });