import express from "express";
// import connectDB from "./librarydb.js";
// import Library from "./libraryModel.js";
const router = express.Router();
import mongoose from "mongoose";
const eventSchema=mongoose.Schema(
    {
   events:[
    {
        date:{
        type:String,
  
        },  
        day:{
         type:String,
  
     },
    function:{
        type:String,
 
    }, 
}
   ]              
})
const Event=mongoose.model("Event",eventSchema);
eventSchema.plugin(Event);
// connectDB();

const app=express();
app.use(express.json());

const event={
   events:[
   {
    date:"01-01-2023",
    day:"sunday",
    function:"New Year's day"
   },
   {
    date:"15-01-2023",
    day:"sunday",
    function:"Pongal,thiruvalluvar day"
   },
   {
    date:"16-01-2023",
    day:"monday",
    function:"uzhavar thirunal "
},
{
    date:"26-01-2023",
    day:"thursday",
    function:"Republic day"
},
{
    date:"22-03-2023",
    day:"wednesday",
    function:"Telugu New year"
},
{
    date:"15-08-2023",
    day:"tuesday",
    function:"independence day"
},
{   date:"20-11-2023",
    day:"Monday",
    function:"children's day"

}
   ]
}

router.get('/',(req,res) =>
{
    try{
        res.status(200).send(event);
    }
    catch(error){
        res.json({message:"not available"});
    }
});

router.post('/',async(req,res)=>{
    try{
        const event={
        
            events:req.body.events,
        }
      
        
        console.log(event);
       
        var create=new Event(event);
        var eventCreated=await create.save();

   if(eventCreated){
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
    Event.findOneAndUpdate({_id:req.params.id},{
        $set:{
          
            events:req.body.events,
        }
    })
    .then(result=>{
        res.status(200).json({
            updated_event:result       
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
        Event.deleteOne({_id:req.params.id},{
            $set:{
           
                events:req.body.events,
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_event:result       
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
    
            Event.deleteMany({event},(err,result)=>{
            if(err) throw err
            res.send(event)
            })
        })
        export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(event);
// });