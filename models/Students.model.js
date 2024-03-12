const mongoose= require('mongoose')
const StudentSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter student name"]
    },
   
    rollNo:{
        type:Number,
        required:true,
        default:0
    },
    image:{
        type:String,
        requiured:false
    },
},
{
    timestamps:true,
}
)
const Student  =mongoose.model("Student",StudentSchema)
module.exports=Student