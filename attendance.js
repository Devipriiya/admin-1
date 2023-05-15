import express from "express";
import Attendance from "./attendanceModel.js";
const router = express.Router();
// import connectDB from "./teachersdb.js";
// connectDB();
Attendance
const app=express();
app.use(express.json());

const attendance=[{
   
studentstotal:"525",
teacherstotal:"20",
staffstotal:"15"


}]

router.get('/',(req,res) =>
{
    try{
        res.status(200).send(attendance);
    }
    catch(error){
        res.json({message:"not available"});
    }
});
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    Attendance.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            attendance:result
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
        const attendance={
            studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
           
        }
        console.log(attendance);
        var create=new Attendance(attendance);
        var attendanceCreated=await create.save();
      
        if(attendanceCreated){
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
    Attendance.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_attendancedetails:result       
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
      Attendance.deleteOne({_id:req.params.id},{
            $set:{
               
                studentstotal:req.body.studentstotal,
            teacherstotal:req.body.teacherstotal,
            staffstotal:req.body.staffstotal
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_attendance:result       
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
    
            Attendance.deleteMany({attendance},(err,result)=>{
            if(err) throw err
            res.send(attendance)
            })
        })
        export default router;
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(attendance);
// });