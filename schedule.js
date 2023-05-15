import express from "express";
// import Attendance from "./attendanceModel.js";
const router = express.Router();
// import connectDB from "./teachersdb.js";
// connectDB();
import mongoose from "mongoose";
const app=express();
app.use(express.json());
const scheduleSchema=mongoose.Schema(
    {
    
            month:{
                type:String,
               
                },
            lab:[{
             lab:{
                type:String,
               
                },
            time:{
                type:String,
               
                },
            },{
             lab:{
                type:String,
               
                },
             time:{
                type:String,
               
                },
            }]
         
        
                
            
           
     })

var Schedule = mongoose.model('Schedule', scheduleSchema);
scheduleSchema.plugin( Schedule);
const schedule={
   month:"march",
   lab:[{
    lab:"science lab",
   time:"9.00 AM-11.00 AM"
   },{
    lab:"math lab",
    time:"9.00 AM-11.00 AM"
   }]

}

router.get('/',(req,res) =>
{
    try{
        res.status(200).send(schedule);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    Schedule.findById(req.params.id)

    .then(result=>{
        res.status(200).json({
            schedule:result
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
       const schedule={
            month:req.body.month,
            lab:req.body.lab
       }
        console.log(schedule);
        var create=new Schedule(schedule);
        var scheduleCreated=await create.save();
      
        if(scheduleCreated){
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
    Schedule.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            month:req.body.month,
            lab:req.body.lab
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_scheduledetails:result       
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
    Schedule.deleteOne({_id:req.params.id},{
            $set:{
               
                
            month:req.body.month,
            lab:req.body.lab
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_schedule:result       
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
    
            Schedule.deleteMany({schedule},(err,result)=>{
            if(err) throw err
            res.send(schedule)
            })
        })
        export default router;
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(attendance);
// });