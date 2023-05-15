import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const sevenSchema=mongoose.Schema(
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

const Seven =mongoose.model("Seven",sevenSchema);
sevenSchema.plugin(Seven);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const seven={
sevenlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/128/3884/3884913.png",
    contentType:"image/png"
        },
        name:"Aadrika",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/5256/5256533.png",
    contentType:"image/png"
        },
        name:"Balu",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/512/1876/1876779.png",
    contentType:"image/png"
        },
        name:"Dev",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/257/257651.png",
contentType:"image/png"
    },
    name:"Geetha",
    rollno:"4"
},

{
    image:{
        data:"https://cdn2.iconfinder.com/data/icons/character-line-color/512/character_person_user_manager_man-512.png",
contentType:"image/png"
    },
    name:"Harikarthik",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/4297/4297911.png",
contentType:"image/png"
    },
    name:"Hashini",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/5336/5336657.png",
contentType:"image/png"
    },
    name:"Narmada",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/5556/5556468.png",
contentType:"image/png"
    },
    name:"Paavan",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(seven);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Seven.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Sevenstandard:result
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
            const newImage = new Seven({
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
            Seven.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Sevenstandard:result       
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
            Seven.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_sevenstandard:result       
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
    Seven.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(seven);
// });