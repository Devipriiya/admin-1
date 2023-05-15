import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const tenSchema=mongoose.Schema(
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

const Ten =mongoose.model("Ten",tenSchema);
tenSchema.plugin(Ten);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const ten={
tenlist:[
    
    {
        image:{
            data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdlqECIwLBkUtLSY13a1imO_MzsDhh_y_sbEkNtwAuh1dROt1Le96j4qdL-bm02xFC8w&usqp=CAU",
    contentType:"image/png"
        },
        name:"Abhinaya",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/921/921000.png",
    contentType:"image/png"
        },
        name:"Aadvik",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/512/3576/3576955.png",
    contentType:"image/png"
        },
        name:"Bala",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1108/1108353.png",
contentType:"image/png"
    },
    name:"Diya",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/921/921024.png",
contentType:"image/png"
    },
    name:"Ganesh",
    rollno:"5"
},
{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4892/4892734.png",
contentType:"image/png"
    },
    name:"Nivetha",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/816/816563.png",
contentType:"image/png"
    },
    name:"Obuli",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/921/921135.png",
contentType:"image/png"
    },
    name:"Priyanka",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(ten);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
          Ten.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Tenstandard:result
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
            const newImage = new Ten({
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
            Ten.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Tenstandard:result       
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
            Ten.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_tenstandard:result       
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
    Ten.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(ten);
// });