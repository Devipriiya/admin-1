import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const ninthSchema=mongoose.Schema(
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

const Ninth =mongoose.model("Ninth",ninthSchema);
ninthSchema.plugin(Ninth);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const ninth={
ninthlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/3884/3884857.png",
    contentType:"image/png"
        },
        name:"Aarna",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/145/145852.png",
    contentType:"image/png"
        },
        name:"Aadhya",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9m5D1nBUUSC0tBkJyCYLT4HT226f1u-tWRuByiZtvbg7irKSsTkMyZZo4j9aP4SkA8s&usqp=CAU",
    contentType:"image/png"
        },
        name:"Deepak",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/921/921000.png",
contentType:"image/png"
    },
    name:"Gugan",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3532/3532678.png",
contentType:"image/png"
    },
    name:"Harini",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/949/949661.png",
contentType:"image/png"
    },
    name:"Nivetha",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3576/3576955.png",
contentType:"image/png"
    },
    name:"Nirmal",
    rollno:"7"
},

{
    image:{
        data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcsl5YLo1deqFKQDfsBVtpX7JHa7fOXHITIAFsBTZ3xDFfefeC1xg-n1SW1iMD54t4k44&usqp=CAU",
contentType:"image/png"
    },
    name:"Preethi",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(ninth);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Ninth.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Ninthstandard:result
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
            const newImage = new Ninth({
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
            Ninth.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Ninthstandard:result       
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
            Ninth.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_ninthstandard:result       
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
    Ninth.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(ninth);
// });