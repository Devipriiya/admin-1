import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const eleventhtimetableSchema=mongoose.Schema({
 
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
const Eleventhtimetable=mongoose.model("Eleventhtimetable",eleventhtimetableSchema);
eleventhtimetableSchema.plugin(Eleventhtimetable);

const eleventhtimetable={
 
    day:[
      
        {
            teacher:"Priyadharshini",
            standard:"11th standard",
            subject:"Maths",
            schedule:"9.45-10.30"
        },
        {
            teacher:"Gowrishankar",
            standard:"11th standard",
            subject:"Chemistry",
            schedule:"10.30-11.15"
        },
        {
            teacher:"Harish",
            standard:"11th standard",
            subject:"English",
            schedule:"11.30.-12.15"
        },
       {
            teacher:"Damodharan",
            standard:"11th standard",
            subject:"Tamil",
            schedule:"12.15.-1.00"    
       },
       {
        teacher:"Karthik",
        standard:"11th standard",
        subject:"Computer Science",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Dheeran",
        standard:"11th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },
    {
        teacher:"Diya",
        standard:"11th standard",
        subject:"Physics",
        schedule:"3.30-4.15"
    },
  ]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(eleventhtimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Eleventhtimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            eleventhtimetable:result
            
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
        const eleventh=new Eleventhtimetable(details);
const eleventhtimetableCreated=await eleventh.save();
if(eleventhtimetableCreated){
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
   Eleventhtimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_eleventhtimetable:result       
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
     Eleventhtimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_eleventhtimetable:result       
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
    Eleventhtimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(eleventhtimetable);
        // });