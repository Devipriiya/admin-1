import express from "express";
import mongoose from "mongoose";
// import connectDB from "./appdb.js";
// import connectDB from "./librarydb.js";

// connectDB();

const router =express.Router();
const teacherstimetableSchema=mongoose.Schema({
 
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
const Teacherstimetable=mongoose.model("Teacherstimetable",teacherstimetableSchema);
teacherstimetableSchema.plugin(Teacherstimetable);

const teacherstimetable={
 
    day:[
        {
    teacher:"Aswini",
    standard:"1st standard",
    subject:"Tamil",
    schedule:"10.00-10.30"
    },
    {
        teacher:"Aswini",
        standard:"2nd standard",
        subject:"Tamil",
        schedule:"11.30-12.00"
    },
    {
        teacher:"Aswini",
        standard:"3rd standard",
        subject:"Tamil",
        schedule:"1.30-2.00"
    },{
        teacher:"Aswini",
        standard:"4th standard",
        subject:"Tamil",
        schedule:"10.30-11.00" 
    },
    {
        teacher:"Megha",
        standard:"6th standard",
        subject:"Tamil",
        schedule:"11.30-12.15"
    },
    {
        teacher:"Megha",
        standard:"7th standard",
        subject:"Tamil",
        schedule:"3.30-4.15"
    },
    {
        teacher:"Megha",
        standard:"8th standard",
        subject:"Tamil",
        schedule:"12.15-1.00"
    },
    {
        teacher:"Megha",
        standard:"9th standard",
        subject:"Tamil",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Megha",
        standard:"10th standard",
        subject:"Tamil",
        schedule:"10.30-11.15"
    },
    
    {
        teacher:"Damodharan",
        standard:"11th standard",
        subject:"Tamil",
        schedule:"12.15.-1.00"    
    },
    
    {
        teacher:"Damodharan",
        standard:"12th standard",
        subject:"Tamil",
        schedule:"11.30.-12.15"    
    },
    {
        teacher:"Pavithra",
        standard:"1st standard",
        subject:"English",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Pavithra",
        standard:"2nd standard",
        subject:"English",
        schedule:"10.00-10.30"
    },
    {
        teacher:"Pavithra",
        standard:"3rd standard",
        subject:"English",
        schedule:"1.00-1.30"
    },
    {
        teacher:"Pavithra",
        standard:"4th standard",
        subject:"English",
        schedule:"11.00-11.30"
    },
    {
        teacher:"Pavithra",
        standard:"5th standard",
        subject:"English",
        schedule:"1.30-2.00"
    },
    {
        teacher:"Kalai",
        standard:"6th standard",
        subject:"English",
        schedule:"9.45-10.30"
    },
    {
        teacher:"Kalai",
        standard:"7th standard",
        subject:"English",
        schedule:"12.15-1.00"
    },
    {
        teacher:"Kalai",
        standard:"8th standard",
        subject:"English",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Kalai",
        standard:"9th standard",
        subject:"English",
        schedule:"11.30-12.15"
    },
    {
        teacher:"Kalai",
        standard:"10th standard",
        subject:"English",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Harish",
        standard:"11th standard",
        subject:"English",
        schedule:"11.30.45-12.15"
    },
    {
        teacher:"Harish",
        standard:"12th standard",
        subject:"English",
        schedule:"9.45-10.30"
    },

    {
        teacher:"Preethi",
        standard:"1st standard",
        subject:"Maths",
        schedule:"1.00-1.30"
    },
    
    {
        teacher:"Preethi",
        standard:"2nd standard",
        subject:"Maths",
        schedule:"10.30-11.00"
    },
    
    {
        teacher:"Preethi",
        standard:"3rd standard",
        subject:"Maths",
        schedule:"2.00-2.30"
    },
    
    {
        teacher:"Preethi",
        standard:"4th standard",
        subject:"Maths",
        schedule:"10.00-10.30"
    },
    
    {
        teacher:"Preethi",
        standard:"5th standard",
        subject:"Maths",
        schedule:"12.00-12.30"
    },
    
    {
        teacher:"Priya",
        standard:"6th standard",
        subject:"Maths",
        schedule:"12.15-1.00"
    },
 {
        teacher:"Preethi",
        standard:"7th standard",
        subject:"Maths",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Preethi",
        standard:"8th standard",
        subject:"Maths",
        schedule:"9.45-10.30"
    },
    {
        teacher:"Preethi",
        standard:"9th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
    
    {
        teacher:"Preethi",
        standard:"10th standard",
        subject:"Maths",
        schedule:"11.30-12.15"
    },
    
    {
        teacher:"Priyadharshini",
        standard:"11th standard",
        subject:"Maths",
        schedule:"11.30-12.15"
    },
    
    {
        teacher:"Priyadharshini",
        standard:"12th standard",
        subject:"Maths",
        schedule:"3.30-4.15"
    },
    {
        teacher:"Jothi",
        standard:"6th standard",
        subject:"Science",
        schedule:"2.00-2.45"
    },  {
        teacher:"Jothi",
        standard:"7th standard",
        subject:"Science",
        schedule:"9.45-10.30"
    },
    {
        teacher:"Jothi",
        standard:"8th standard",
        subject:"Science",
        schedule:"3.30-4.15"
    },
    {
        teacher:"Jothi",
        standard:"9th standard",
        subject:"Science",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Jothi",
        standard:"10th standard",
        subject:"Science",
        schedule:"12.15-1.00"
    },
    {
        teacher:"Hari",
        standard:"6th standard",
        subject:"Social",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Hari",
        standard:"7th standard",
        subject:"Social",
        schedule:"11.30-12.15"
    },
    {
        teacher:"Hari",
        standard:"8th standard",
        subject:"Social",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Hari",
        standard:"9th standard",
        subject:"Social",
        schedule:"9.45-10.30",
    },
    {
        teacher:"Hari",
        standard:"10th standard",
        subject:"Social",
        schedule:"3.30-4.15"
    },
    {
        teacher:"Karthiga",
        standard:"1st standard",
        subject:"Evs",
        schedule:"11.30-12.00"
    },
    {
        teacher:"Karthiga",
        standard:"3rd standard",
        subject:"Evs",
        schedule:"10.00-10.30"
    },
   
    {
        teacher:"Karthiga",
        standard:"5th standard",
        subject:"Evs",
        schedule:"10.30-11.00"
    },
    {
        teacher:"Naveen",
        standard:"2nd standard",
        subject:"Hindi",
        schedule:"1.00-1.30"
    },
    {
        teacher:"Naveen",
        standard:"3rd standard",
        subject:"Hindi",
        schedule:"11.30-12.00"
    },
    {
        teacher:"Naveen",
        standard:"5th standard",
        subject:"Hindi",
        schedule:"10.00-10.30"
    },
    {
        teacher:"Gowrishankar",
        standard:"11th standard",
        subject:"Chemistry",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Gowrishankar",
        standard:"12th standard",
        subject:"Chemistry",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Diya",
        standard:"11th standard",
        subject:"Physics",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Diya",
        standard:"12th standard",
        subject:"Physics",
        schedule:"12.15-1.00"   
    },{
        teacher:"Karthik",
        standard:"11th standard",
        subject:"Computer Science",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Karthik",
        standard:"12th standard",
        subject:"Computer Science",
        schedule:"10.30-11.15"
    },
    {
        teacher:"Divya",
        standard:"6th standard",
        subject:"PT",
        schedule:"2.45-2.30"
    },
    {
        teacher:"Divya",
        standard:"7th standard",
        subject:"PT",
        schedule:"2.00-2.45"
    },
    {
        teacher:"Divya",
        standard:"8th standard",
        subject:"PT",
        schedule:"11.30-12.15"
    },
    {
        teacher:"Divya",
        standard:"9th standard",
        subject:"PT",
        schedule:"12.15-1.00"
    },
    {
        teacher:"Divya",
        standard:"10th standard",
        subject:"PT",
        schedule:"9.45-10.30"
    },
    {
        teacher:"Dheeran",
        standard:"11th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },

    {
        teacher:"Dheeran",
        standard:"12th standard",
        subject:"PT",
        schedule:"2.45-3.30"
    },
    {
        teacher:"Sowmiya",
        standard:"2nd standard",
        subject:"GK",
        schedule:"1.30-2.00"
    },
    {
        teacher:"Sowmiya",
        standard:"4th standard",
        subject:"GK",
        schedule:"1.00-1.30"
    },
    {
        teacher:"Sowmiya",
        standard:"5th standard",
        subject:"GK",
        schedule:"11.30-12.00"
    }

]
 }


const app=express();
app.use(express.json());



router.get("/",(req,res)=>{
    try{
        res.status(200).send(teacherstimetable);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});

router.get('/:id',(req,res)=>{
    console.log(req.params.id);
  Teacherstimetable.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            teacherstimetable:result
            
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
        const teachers=new Teacherstimetable(details);
const teacherstimetableCreated=await teachers.save();
if(teacherstimetableCreated){
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
   Teacherstimetable.findOneAndUpdate({_id:req.params.id},{
        $set:{
            teacher:req.body.teacher,
            standard:req.body.standard,
            subject:req.body.subject,
            schedule:req.body.schedule
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_teacherstimetable:result       
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
      Teacherstimetable.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                teacher:req.body.teacher,
                standard:req.body.standard,
                subject:req.body.subject,
                schedule:req.body.schedule
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_teacherstimetable:result       
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
       Teacherstimetable.deleteMany({}).then((result) => {
                     res.send(result);
                 })
             });
            
        
        export default router;
        // const port=4000;
        // app.listen(port,()=>{
        //     console.log(`server is running at ${port}`);
        //     console.log(teacherstimetable);
        // });