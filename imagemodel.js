import mongoose from "mongoose"
const ImageSchema=mongoose.Schema(
    {
  
   
image:{
    data:String,
    contentType: String
}
            
           
     })
// module.exports = ImageModel = mongoose.model('imageModel',ImageSchema)
// export default ImageModel;
const ImageModel =mongoose.model("ImageModel ",ImageSchema);
export default ImageModel ;