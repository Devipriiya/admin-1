import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const fifthSchema=mongoose.Schema(
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

const Fifth =mongoose.model("Fifth",fifthSchema);
fifthSchema.plugin(Fifth);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const fifth={
fifthlist:[
    
    {
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/816/816572.png",
    contentType:"image/png"
        },
        name:"Aadhi",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/5027/5027043.png",
    contentType:"image/png"
        },
        name:"Durga",
        rollno:"2"
    }, 
    {
        image:{
         data:"https://cdn-icons-png.flaticon.com/128/3750/3750011.png",
    contentType:"image/png"
        },
        name:"Dhoni",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3750/3750015.png",
contentType:"image/png"
    },
    name:"Gabriella",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/3641/3641963.png",
contentType:"image/png"
    },
    name:"Hemnath",
    rollno:"5"
},
{
    image:{
        data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-34DfnBph_0uaK4j87S3x9BT9hyZg4WKceEl7xIQChgFGMxpcqByLWQFcvq1C5RgOJk&usqp=CAU",
contentType:"image/png"
    },
    name:"Haripriya",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/128/1785/1785918.png",
contentType:"image/png"
    },
    name:"Kalaipriya",
    rollno:"7"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1734/1734072.png",
contentType:"image/png"
    },
    name:"Mohan",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(fifth);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Fifth.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Fifthstandard:result
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
            const newImage = new Fifth({
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
            Fifth.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Fifthstandard:result       
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
            Fifth.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Fifthstandard:result       
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
    Fifth.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(fifth);
// });