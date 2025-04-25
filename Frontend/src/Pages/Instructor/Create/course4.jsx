import React from 'react'
import {Link} from 'react-router-dom'

export const Course4 = () => {
  return (
    <div>
        <div className='border border-gray-300 border-lg'>
        <img
          className='object-contain w-20 h-9 cursor-pointer ml-5 mt-[1rem]'
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy Logo'
        />
        <h1 className='ml-[7.5rem] mt-[-1.7rem] text-start text-xl'>Step 4 of 4</h1>
        <p className='text-end mr-[2rem] mt-[-0.5rem] text-xl text-purple-700 underline'>Exit</p>
      </div>
      <div>
        <p className='m-[3rem] font-bold text-center text-4xl text-slate-800 font-serif'>
        How much time can you spend creating your course per week?
        </p>
        <p className='m-[3rem] font-light text-center  text-slate-800 font-serif'>There's no wrong answer. We can help you achieve your goals even if you don't have much time.
      </p>
      </div>
       <div className=' flex-row'>
       
        <p className='text-xl m-4 '><input
          name = "hours"
          type="checkbox"
          value = "0-2"
          className='size-5'
        />
        I'm verybusy right now(0-2 hours)</p> 
        <p className='text-xl m-4 '><input 
          name = "hours"
          type="checkbox"
          value = "0-2"
          className='size-5'
        />
         I'll work on this on the side (2-4 hours)</p>
         <p className='text-xl m-4 '><input 
          name = "hours"
          type="checkbox"
          value = "0-2"
          className='size-5'
        />
         I have lots of flexibility(5+ hours)</p>
         <p className='text-xl m-4 '><input 
          name = "hours"
          type="checkbox"
          value = "0-2"
          className='size-5'
        />
        I haven't yet decided if I have time
       </p>  
         
       </div>

      <div className='border border-double mt-20 flex justify-between'>
        <Link to='/Pages/Instructor/Courses/Create/Course3'><button className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 p w-40 '>
                Previous
            </button></Link>
        
        <Link to='/Pages/Instructor/Courses/Create/Upload'><button
            className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 w-40 px-4  '>
            Create Course 
        </button>
        </Link>
      </div>

      
    </div>
  )
}
