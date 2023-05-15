import express from "express";
// import connectDB from "./librarydb.js";

const router =express.Router();
import mongoose from "mongoose";
const timetableSchema=mongoose.Schema({
    
   timetable:[
    {
        day:[
            {
            Subject:String,
            teacher:String,
            schedule:String,
        }
    ]
    }
    
   ]
        
})
const Timetable=mongoose.model("Timetable",timetableSchema);
timetableSchema.plugin(Timetable);
const timetable={
   timetable:[
 {
    day:[
        {
    Subject:"Tamil",
    teacher:"Aswini",
    schedule:"9.00-9.45"
    },
    {
        Subject:"English",
        teacher:"Hari shankar",
        schedule:"9.40-10.45"
    },
    {
        Subject:"Maths",
        teacher:"Devipriya",
        schedule:"11.00-11.45" 
    },
    {
        Subject:"Science",
        teacher:"Megha",
        schedule:"11.45-12.45" 
    },
    {
        Subject:"Social",
        teacher:"Megha",
        schedule:"11.45-12.45" 
    }
]
 }
 
]
}
// connectDB();
Timetable
const app=express();
app.use(express.json());



router.get('/',(req,res) =>
{
    try{
        res.status(200).send(timetable);
    }
    catch(error){
        res.json({message:"not available"});
    }
});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Timetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            timetable:result
            
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
router.post('/',async(req,res)=>{
    try{
        const timetable={
     timetable:req.body.timetable,
   
        }
        
        console.log(timetable);
        var create=new Timetable(timetable);
        var timetableCreated=await create.save();
      
        if(timetableCreated){
            console.log("created");
        res.status(201).json({message:"show details"});
        }
else{
    res.status(401);
    throw new error("not found");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Timetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            timetable:req.body.timetable
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_timetable:result       
         })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    })
    router.delete('/:id',(req,res)=>{
        console.log(req.params.id);
        Timetable.deleteOne({_id:req.params.id},{
            $set:{
                timetable:req.body.timetable
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_timetable:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        router.delete('/',(req,res)=>{
    
            Timetable.deleteMany({timetable},(err,result)=>{
            if(err) throw err
            res.send(timetable)
            })
        })
        export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(timetable);
   
//     console.log(timetable);
// });