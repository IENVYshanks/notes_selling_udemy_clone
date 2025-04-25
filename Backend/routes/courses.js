const express = require ('express')
const {createCourse,getCourses,getCourse,updateCourse,deleteCourse}=require('../controllers/courseController')

const router = express.Router()

//get all workouts
router.get('/',getCourses)

//get a single workout
router.get('/:id',getCourse)

//post a new workout
router.post('/',createCourse)

//delete a workout
router.delete('/:id',deleteCourse)

//update a workout
router.patch('/:id',updateCourse)


module.exports =router