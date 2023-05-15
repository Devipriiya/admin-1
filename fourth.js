import express from 'express';

const app = express();
import multer from "multer";
import path from "path";


const router =express.Router();

import mongoose from "mongoose"

const fourthSchema=mongoose.Schema(
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

const Fourth =mongoose.model("Fourth",fourthSchema);
fourthSchema.plugin(Fourth);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const fourth={
fourthlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/3248/3248676.png",
    contentType:"image/png"
        },
        name:"Arya",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/128/1046/1046270.png",
    contentType:"image/png"
        },
        name:"Boopalan",
        rollno:"12"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/512/3650/3650045.png",
    contentType:"image/png"
        },
        name:"Divya",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4832/4832947.png",
contentType:"image/png"
    },
    name:"Gayathri",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1876/1876779.png",
contentType:"image/png"
    },
    name:"Hrithik",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1876/1876900.png",
contentType:"image/png"
    },
    name:"Janani",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4892/4892735.png",
contentType:"image/png"
    },
    name:"Kalaipriya",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1439/1439696.png",
contentType:"image/png"
    },
    name:"Mohan",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(fourth);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Fourth.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Fourthstandard:result
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
            const newImage = new  Fourth({
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
            Fourth.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Fourthstandard:result       
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
            Fourth.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Fourthstandard:result       
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
    Fourth.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(fourth);
// });