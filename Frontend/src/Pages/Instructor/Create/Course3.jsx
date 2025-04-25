import React from 'react'
import { Link } from 'react-router-dom'
import { Select} from '@mantine/core';


export function ContainedInputs() {
  return (
    <>
      <Select
        mt="md"
        justify='center'
        comboboxProps={{ withinPortal: true }}
        data={['Development', 'Business', 'Finance & Accounting', 'IT & Software', 'Office Productivity', 'Personal Development', 'Design', 'Marketing', 'Photography & Video', 'Health & Fitness', 'Music']}
        placeholder="Choose a catagory"
        classNames='w-[30] flex justify-center '
      />
    </>
  );
}


export const Course3 = () => {
  return (
    <div>
      <div className='border border-gray-300 border-lg'>
        <img
          className='object-contain w-20 h-9 cursor-pointer ml-5 mt-[1rem]'
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy Logo'
        />
        <h1 className='ml-[7.5rem] mt-[-1.7rem] text-start text-xl'>Step 3 of 4</h1>
        <p className='text-end mr-[2rem] mt-[-0.5rem] text-xl text-purple-700 underline'>Exit</p>
      </div>

      <p className='m-[3rem] font-bold text-center text-4xl text-slate-800 font-serif'>
      What category best fits the knowledge you'll share?
      </p>
      <p className='m-[3rem] font-light text-center  text-slate-800 font-serif'>If you're not sure about the right category, you can change it later.
      </p>

      <ContainedInputs/>

      <div className='border border-double mt-20 flex justify-between'>
      <Link to='/Pages/Instructor/Courses/Create/Course2'><button className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 p w-40 '>
            Previous
        </button></Link>
    
      <Link to='/Pages/Instructor/Courses/Create/Course4'><button
        className= 'mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 w-40 px-4  '>
        Continue
      </button>
      </Link>
      </div>
    </div>
  )
}
