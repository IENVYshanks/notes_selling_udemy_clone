const Course= require('../models/courseModel')
const mongoose = require ('mongoose')

//get all workouts
const getCourses =async(req,res)=>{
    const courses=await Course.find({}).sort({createdAt: -1}) //inorder of recents

    res.status(200).json(courses)
}

//get a single workout
const getCourse =async(req,res)=>{
    const {id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such course exists"})
    }
    const course=await Course.findById(id)

    if(!course){
        return res.status(404).json({error: 'Course not found'})
    }
    res.status(200).json(Course)

}


//create a new workout
const createCourse = async(req,res) =>{
     const {name,instructor,duration,category,image} =req.body
    
    //add doc to db
    try{
     const course= await Course.create({name,instructor,duration,category,image})
     res.status(200).json(course)
    }catch(error){
      res.status(400).json({error: error.message})
    }
}


//delete a workout
const deleteCourse = async(req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Course Not Found'})
    }
    const course=await Course.findOneAndDelete({_id: id})
    if(!course){
        return res.status(404).json({error: 'Course not found'})
    }
    res.status(200).json(course)
}
//update a workout
const updateCourse= async(req,res)=>{
    const {id}=req.params
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Course Not Found'})
    }
    const course=await Course.findOneAndUpdate({_id: id},{
        ...req.body
    })
    if(!course){
        return res.status(404).json({error: 'Course not found'})
    }
    res.status(200).json(course)
}

module.exports={
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}