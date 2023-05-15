import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const eightSchema=mongoose.Schema(
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

const Eight =mongoose.model("Eight",eightSchema);
eightSchema.plugin(Eight);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const eight={
eightlist:[
    
    {
        image:{
            data:"https://freeiconshop.com/wp-content/uploads/edd/person-girl-outline-filled.png",
    contentType:"image/png"
        },
        name:"Aditi",
        rollno:"1"
    },{
        image:{
            data:"https://freeiconshop.com/wp-content/uploads/edd/person-outline-filled.png",
    contentType:"image/png"
        },
        name:"Aadhi",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/128/4439/4439947.png",
    contentType:"image/png"
        },
        name:"Dhruv",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/3449/3449550.png",
contentType:"image/png"
    },
    name:"Gautam",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/2534/2534028.png",
contentType:"image/png"
    },
    name:"Haritha",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/3233/3233486.png",
contentType:"image/png"
    },
    name:"Nithya",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1876/1876781.png",
contentType:"image/png"
    },
    name:"Nirmal",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/2335/2335114.png",
contentType:"image/png"
    },
    name:"Preethi",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(eight);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Eight.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Eightstandard:result
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
            const newImage = new Eight({
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
            Eight.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Eightstandard:result       
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
            Eight.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_eightstandard:result       
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
    Eight.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(eight);
// });