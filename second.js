import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const secondSchema=mongoose.Schema(
    {

   
image:{
    data:String,
    contentType: String
},
name:{
    type:String,
   required:true,
},
     
rollno:{
    type:String,
   required:true,
},
           
     })

const Second =mongoose.model("Second ",secondSchema);
secondSchema.plugin(Second);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const second={
secondlist:[{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3750/3750024.png",
contentType:"image/png"
    },
    name:"Arthi",
    rollno:"1"
},
{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/student-5796558-4841557.png",
contentType:"image/png"
    },
    name:"Balaji",
    rollno:"2"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4936/4936120.png",
contentType:"image/png"
    },
    name:"Deepika",
    rollno:"3"
},
{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/student-5565610-4715116.png",
contentType:"image/png"
    },
    name:"Haridharsan",
    rollno:"4"
}, 

{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/student-girl-5565708-4715098.png",
contentType:"image/png"
    },
    name:"Ishwarya",
    rollno:"5"
},
{
    image:{
        data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRDxLoqVSWvmZbo2hmyNYi-rZk5NIT7qKPASHby9YKJugZUZOAbG_7fcaGd_WHl7GcWI&usqp=CAU",
contentType:"image/png"
    },
    name:"Jothika",
    rollno:"6"
},
{
    image:{
     data:"https://cdn-icons-png.flaticon.com/128/9686/9686348.png",
contentType:"image/png"
    },
    name:"Karthik",
    rollno:"7"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/9686/9686358.png",
contentType:"image/png"
    },
    name:"Nandhini",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(second);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Second.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Secondstandard:result
                })
            })
            .catch(err=> {
            console.log(err);
            res.status(505).json({
                error:err
            })
            }
          )
        }
    })
    
})

router.post('/',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new  Second({
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
            newImage.save()
        .then(()=>res.send('successfully uploaded')).catch(err=>console.log(err))
        }
    })
    
})
router.put('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Second.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Secondstandard:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })
    
})
router.delete('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Second.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_second:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        
        }
    })

    
})


router.delete("/",async(req,res)=>{
   Second.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(second);
// });