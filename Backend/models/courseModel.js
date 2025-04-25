const mongoose = require('mongoose')
const  Schema  = mongoose.Schema

const courseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{ timestamps:true })

//a model to apply the schema
module.exports=mongoose.model('Course',courseSchema)

