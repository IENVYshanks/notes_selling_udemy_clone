import React from 'react'
import { Link } from 'react-router-dom'

export const Course2 = () => {
  return (
    <div>
        <div className='border border-gray-300 border-lg'>
        <img
          className='object-contain w-20 h-9 cursor-pointer ml-5 mt-[1rem]'
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy Logo'
        />
        <h1 className='ml-[7.5rem] mt-[-1.7rem] text-start text-xl'>Step 2 of 4</h1>
        <p className='text-end mr-[2rem] mt-[-0.5rem] text-xl text-purple-700 underline'>Exit</p>
      </div>
      <p className='m-[3rem] font-bold text-center text-4xl text-slate-800 font-serif'>
      How about a working title?
      </p>
      <p className='m-[3rem] font-light text-center  text-slate-800 font-serif'>It's ok if you can't think of a good title now. You can change it later.</p>
      <input placeholder=' e.g. Learn Photoshop CS6 from Scratch'className='border border-gray-600 w-[40rem] h-[3rem]'/>

      <div className='border border-double mt-20 flex justify-between'>
      <Link to='/Pages/Instructor/Courses/Create/Course1'><button className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 p w-40 '>
            Previous
        </button></Link>
    
      <Link to='/Pages/Instructor/Courses/Create/Course3'><button
        className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 w-40 px-4  '>
        Continue
      </button>
      </Link>
      </div>
    </div>
  )
}
