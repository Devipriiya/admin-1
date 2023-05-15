import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const firsttimetableSchema=mongoose.Schema({
 
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
const Firsttimetable=mongoose.model("firsttimetable",firsttimetableSchema);
firsttimetableSchema.plugin(Firsttimetable);

const firsttimetable={
 
    day:[
        {
    teacher:"Aswini",
    standard:"1st standard",
    subject:"Tamil",
    schedule:"10.00-10.30"
    },
  {
        teacher:"Pavithra",
        standard:"1st standard",
        subject:"English",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Karthiga",
        standard:"1st standard",
        subject:"Evs",
        schedule:"11.30-12.00"
    },
 {
        teacher:"Preethi",
        standard:"1st standard",
        subject:"Maths",
        schedule:"1.00-1.30"
    }
  


   
]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(firsttimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
 Firsttimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            firsttimetable:result
            
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
        const first=new Firsttimetable(details);
const firsttimetableCreated=await first.save();
if(firsttimetableCreated){
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
   Firsttimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_firsttimetable:result       
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
     Firsttimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_firsttimetable:result       
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
     Firsttimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(firsttimetable);
        // });