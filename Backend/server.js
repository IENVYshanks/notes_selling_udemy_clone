require('dotenv').config()


const express = require('express')
const cors = require('cors');
const port = 4001;
const courseRoutes = require ('./routes/courses')
const mongoose = require ('mongoose')

const app = express() //express app

//middleware
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//routes
app.use('/api/courses',courseRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for request
    app.listen(process.env.PORT,()=>{
    console.log('connected to db and listening on port 4001!!')
            })
    })
  .catch((error)=>{
    console.log(error)
  })

