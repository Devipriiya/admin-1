import express from 'express';

const app = express();
import multer from "multer";
import path from "path";
// connectDB();

const router =express.Router();

import mongoose from "mongoose"
// import connectDB from './appdb.js';
const thirdSchema=mongoose.Schema(
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

const Third =mongoose.model("Third",thirdSchema);
thirdSchema.plugin(Third);


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const third={
thirdlist:[
    
    {
        image:{
            data:"https://cdn3d.iconscout.com/3d/premium/thumb/employee-4722980-3930446.png",
    contentType:"image/png"
        },
        name:"Ajith",
        rollno:"1"
    },{
        image:{
            data:"https://cdn-icons-png.flaticon.com/512/4842/4842310.png",
    contentType:"image/png"
        },
        name:"Karthiga",
        rollno:"12"
    }, 
    {
        image:{
         data:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_uYBJUKkd7VXKMxH3RpXZzPgUrWti8QUN8FlQN6jBd-ag0YM5t-n5PLYPThyrTkJafk&usqp=CAU",
    contentType:"image/png"
        },
        name:"Kavin",
        rollno:"3"
    },
    
    {
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/1046/1046374.png",
contentType:"image/png"
    },
    name:"Preethi",
    rollno:"4"
},

{
    image:{
        data:"https://cdn-icons-png.flaticon.com/512/4842/4842343.png",
contentType:"image/png"
    },
    name:"Pavithra",
    rollno:"5"
},
{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/boss-4722988-3930454.png",
contentType:"image/png"
    },
    name:"Surya",
    rollno:"6"
}, 

{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/girl-student-4722972-3930438.png?f=webp",
contentType:"image/png"
    },
    name:"Sowmiya",
    rollno:"7"
},

{
    image:{
        data:"https://cdn3d.iconscout.com/3d/premium/thumb/student-5565610-4715116.png",
contentType:"image/png"
    },
    name:"Vijay",
    rollno:"8"
},
]
}
router.get('/',(req,res)=>{
    res.send(third);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            Third.findById({_id:req.params.id},{
            image:{
                data:req.file.filename,
                contentType:'image/png'
            },   
            name:req.body.name,
            rollno:req.body.rollno,
               
            })
          
            .then(result=>{
                res.status(200).json({
                    Thirdstandard:result
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
            const newImage = new Third({
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
            Third.findOneAndUpdate({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_Thirdstandard:result       
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
            Third.deleteOne({_id:req.params.id},{
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                },   
                name:req.body.name,
                rollno:req.body.rollno,
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_Thirdstandard:result       
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
    Third.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
    

export default router;
// const port=4000;
// app.listen(port,()=>{
//     console.log(`server is running at ${port}`);
//     console.log(third);
// });