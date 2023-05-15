import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const fourthtimetableSchema=mongoose.Schema({
 
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
const Fourthtimetable=mongoose.model("Fourthtimetable",fourthtimetableSchema);
fourthtimetableSchema.plugin(Fourthtimetable);

const fourthtimetable={
 
    day:[
        {
            teacher:"Preethi",
            standard:"4th standard",
            subject:"Maths",
            schedule:"10.00-10.30"
        },
   {
        teacher:"Aswini",
        standard:"4th standard",
        subject:"Tamil",
        schedule:"10.30-11.00" 
    },
{
        teacher:"Pavithra",
        standard:"4th standard",
        subject:"English",
        schedule:"11.30-12.00"
    },
 
    {
        teacher:"Sowmiya",
        standard:"4th standard",
        subject:"GK",
        schedule:"1.00-1.30"
    }
]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(fourthtimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
Fourthtimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            fourthtimetable:result
            
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
        const fourth=new Fourthtimetable(details);
const fourthtimetableCreated=await fourth.save();
if(fourthtimetableCreated){
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
    Fourthtimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_fourthtimetable:result       
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
        Fourthtimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_fourthtimetable:result       
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
            Fourthtimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(fourthtimetable);
        // });