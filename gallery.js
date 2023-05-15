import express from 'express';

const app = express();
import multer from "multer";
import path from "path";

const router =express.Router();

import ImageModel from './imagemodel.js';


const Storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
     cb(null,file.originalname);
    },
});

const upload = multer({
    storage: Storage,
   
}).single('testImage')
const image={
image:[{

    image:{
        
data:"https://www.mountpleasantjuniors.co.uk/_images/1445100_l.png",
contentType:"image/png"
    }
},
{

        image:{
            
    data:"https://w7.pngwing.com/pngs/4/364/png-transparent-culture-day-cultural-day-2018-cultural-diversity-cultures-culture-globe-world.png",
    contentType:"image/png"
        
    }  
},
{
  
    image:{
        
data:"https://www.citypng.com/public/uploads/preview/first-day-of-school-back-to-school-cartoon-png-316295863040lf5ls6il9.png",
contentType:"image/png"
    }
},
{
  
    image:{
        
data:"https://png.pngtree.com/png-clipart/20220120/ourmid/pngtree-celebration-of-happy-republic-day-of-india-balloon-flag-png-image_4342227.png",
contentType:"image/png"
    }
},{
    image:{
        
        data:"https://w7.pngwing.com/pngs/537/592/png-transparent-children-s-day-banner-childrens-day-child-lovely.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://e7.pngegg.com/pngimages/610/226/png-clipart-blue-green-and-orange-illustration-indian-independence-day-august-15-flag-of-india-independence-day-bubble-wish-culture.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://toppng.com/uploads/preview/happy-teachers-day-transparent-happy-teachers-day-11563045098jkhxonw803.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://w7.pngwing.com/pngs/841/26/png-transparent-pongal-festival-thumbnail.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://e7.pngegg.com/pngimages/76/991/png-clipart-silhouette-of-people-dancing-silhouette-celebrate-carnival-holidays-text-thumbnail.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://www.hindugirlscollege.com/wp-content/uploads/2021/10/Founders-Day.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://w7.pngwing.com/pngs/853/610/png-transparent-christmas-and-holiday-season-merry-christmas-food-holidays-decor-thumbnail.png",
        contentType:"image/png"
            } 
},
{
    image:{
        
        data:"https://img.lovepik.com/element/45000/9387.png_860.png",
        contentType:"image/png"
            } 
},
]
}
router.get('/',(req,res)=>{
    res.send(image);
})



router.get('/:id',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            ImageModel.findById({_id:req.params.id},{
           
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
          
            .then(result=>{
                res.status(200).json({
                   images:result
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
            const newImage = new ImageModel({
            
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
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
            ImageModel.findOneAndUpdate({_id:req.params.id},{
             
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
          
            .then(result=>{
                res.status(200).json({
                    updated_image:result       
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
            ImageModel.deleteOne({_id:req.params.id},{
            
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }
            })
          
            .then(result=>{
                res.status(200).json({
                   deleted_image:result       
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

router.delete('/',async(req,res)=>{
    ImageModel.deleteMany({}).then((result) => {
             res.send(result);
         })
     });
export default router;

