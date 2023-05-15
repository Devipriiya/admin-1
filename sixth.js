import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const sixthSchema=mongoose.Schema(
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

const Sixth =mongoose.model("Sixth",sixthSchema);
sixthSchema.plugin(Sixth);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const sixth={
sixthlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/5220/5220658.png",
    contentType:"image/png"
        },
        name:"Anika",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/5027/5027028.png",
    contentType:"image/png"
        },
        name:"Badriprasad",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/512/3750/3750024.png",
    contentType:"image/png"
        },
        name:"Divyadharshini",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/5027/5027043.png",
contentType:"image/png"
    },
    name:"Hema",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1439/1439696.png",
contentType:"image/png"
    },
    name:"Haripriyan",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1876/1876943.png",
contentType:"image/png"
    },
    name:"Monika",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/706/706830.png",
contentType:"image/png"
    },
    name:"Neha",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/475/475277.png",
contentType:"image/png"
    },
    name:"Prakash",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(sixth);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Sixth.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Sixthstandard:result
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
            const newImage = new Sixth({
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
            Sixth.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Sixthstandard:result       
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
            Sixth.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_sixthstandard:result       
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
    Sixth.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(sixth);
// });