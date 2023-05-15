import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const sixthtimetableSchema=mongoose.Schema({
 
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
const Sixthtimetable=mongoose.model("Sixthtimetable",sixthtimetableSchema);
sixthtimetableSchema.plugin(Sixthtimetable);

const sixthtimetable={
 
    day:[
       
        {
            teacher:"Kalai",
            standard:"6th standard",
            subject:"English",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Hari",
            standard:"6th standard",
            subject:"Social",
            schedule:"10.30-11.15"
        },
            {
                teacher:"Megha",
                standard:"6th standard",
                subject:"Tamil",
                schedule:"11.30-12.15"
            },
          
            {
                teacher:"Priya",
                standard:"6th standard",
                subject:"Maths",
                schedule:"12.15-1.00"
            },
           {
                teacher:"Jothi",
                standard:"6th standard",
                subject:"Science",
                schedule:"2.00-2.45"
            }, 
         
           {
                teacher:"Divya",
                standard:"6th standard",
                subject:"PT",
                schedule:"2.45-2.30"
            },
]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(sixthtimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Sixthtimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            sixthtimetable:result
            
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
        const sixth=new Sixthtimetable(details);
const sixthtimetableCreated=await sixth.save();
if(sixthtimetableCreated){
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
  Sixthtimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_sixthtimetable:result       
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
      Sixthtimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_sixthtimetable:result       
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
      Sixthtimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(sixthtimetable);
        // });