import mongoose from "mongoose"
const gallerySchema=mongoose.Schema(
    {
        image:{
            data:String,
            contentType: String
        },
           
        day:{
            type:String,
           
            },
  name:{
    type:String,
   
    },
    description:{
        type:String,
       
        },
   
         
           
     })
// module.exports = ImageModel = mongoose.model('imageModel',ImageSchema)
// export default ImageModel;
const Gallery =mongoose.model("Gallery ",gallerySchema);
export default Gallery ;