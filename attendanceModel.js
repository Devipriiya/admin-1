import mongoose from "mongoose";
const attendanceSchema=mongoose.Schema(
    {
        studentstotal:{
            type:Number,
            required:true,
            },
        
        teacherstotal:{
            type:Number,
            required:true,
            },
        staffstotal:{
            type:Number,
            required:true,
            }
       
            
           
     })
const Attendance=mongoose.model('Attendance',attendanceSchema);
export default Attendance;