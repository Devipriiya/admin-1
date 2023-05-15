import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const eleventhSchema=mongoose.Schema(
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

const Eleventh =mongoose.model("Eleventh",eleventhSchema);
eleventhSchema.plugin(Eleventh);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const eleventh={
eleventhlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/128/7013/7013622.png",
    contentType:"image/png"
        },
        name:"Aadarsh",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/4892/4892735.png",
    contentType:"image/png"
        },
        name:"Abi",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/128/7223/7223771.png",
    contentType:"image/png"
        },
        name:"Balaji",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/2422/2422540.png",
contentType:"image/png"
    },
    name:"dhinesh",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/702/702020.png",
contentType:"image/png"
    },
    name:"Gayathri",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/1785/1785918.png",
contentType:"image/png"
    },
    name:"Hanshika",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/3667/3667249.png",
contentType:"image/png"
    },
    name:"Ishwarya",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4842/4842456.png",
contentType:"image/png"
    },
    name:"Kalaipriya",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(eleventh);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
         Eleventh.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    eleventhstandard:result
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
            const newImage = new Eleventh({
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
            Eleventh.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Eleventhstandard:result       
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
            Eleventh.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Eleventhstandard:result       
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
    Eleventh.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(eleventh);
// });