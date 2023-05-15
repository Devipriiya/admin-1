import express from "express";
// import connectDB from "./teachersdb.js";
import multer from "multer";
import mongoose from "mongoose";
const router = express.Router();
const teachersSchema=mongoose.Schema(
    {
        teacherslist:[{
            image:{
                data:String,
             contentType: String
            },
    name:{
        type:String,
     
        },
    id:{
         type:String,
        
     },
    }]
            
           
     })

var Teachers = mongoose.model('Teachers', teachersSchema);
teachersSchema.plugin(Teachers);

const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
// connectDB();
const app=express();
app.use(express.json());

const teachers={
 teacherslist:[   {
     image:{
        data:"https://cdn-icons-png.flaticon.com/512/3429/3429440.png",
contentType:"image/png"
    },
    name:"Damodaran",
    id:"101",
},
{   image:{
    data:"https://cdn-icons-png.flaticon.com/512/2310/2310277.png",
contentType:"image/png"
},
    name:"aswini",
    id:"102",
},
{
    image:{
        data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-q-g9thNFU0NzIQiSVSpKv9YGlllVtZdJhSJeziNS6JNlO3sM-ROSO3gCUh1ofqzgL0&usqp=CAU",
    contentType:"image/png"
    },
    name:"rathiga",
    id:"103",
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4664/4664514.png",
    contentType:"image/png"
    },
    name:"megha",
    id:"104",
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/7556/7556377.png",
    contentType:"image/png"
    },
    name:"hari",
    id:"105",
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1597/1597312.png",
    contentType:"image/png"
    },
    name:"vinodhini",
    id:"106",
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3471/3471246.png",
    contentType:"image/png"
    },
    name:"pavithra",
    id:"107",
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/5488/5488920.png",
    contentType:"image/png"
    },
    name:"priya",
    id:"108",
},
]
}


router.get('/',(req,res) =>
{
    try{
        res.status(200).send(teachers);
    }
    catch(error){
        res.json({message:"not available"});
    }
});


router.get('/:id',(req,res)=>{
    console.log(req.params.id);
   Teachers.findById(req.params.id)
    
    .then(result=>{
        res.status(200).json({
            teachers:result
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
router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new Teachers({
                teacherslist:req.body.teacherslist
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
router.put('/:id',(req,res)=>{
    console.log(req.params.id);
    Teachers.findOneAndUpdate({_id:req.params.id},{
        $set:{
           
            teacherslist:req.body.teacherslist

        }
    })
    .then(result=>{
        res.status(200).json({
            updated_teachers:result       
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
        Teachers.deleteOne({_id:req.params.id},{
            $set:{
               
                teacherslist:req.body.teacherslist
    
            }
        })
        .then(result=>{
            res.status(200).json({
                deleted_teachers:result       
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
    
            Teachers.deleteMany({teachers},(err,result)=>{
            if(err) throw err
            res.send(teachers)
            })
        })
        export default router;
// const port=3000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(teachers);
// });