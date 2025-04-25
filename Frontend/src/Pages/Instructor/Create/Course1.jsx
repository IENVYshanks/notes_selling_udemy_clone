import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ListAltIcon from '@mui/icons-material/ListAlt';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export const Course1 = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (divId) => {
    setSelectedDiv(divId);
  };

  return (
    <div>
      <div className='border border-gray-300 border-lg'>
        <img
          className='object-contain w-20 h-9 cursor-pointer ml-5 mt-[1rem]'
          src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
          alt='Udemy Logo'
        />
        <h1 className='ml-[7.5rem] mt-[-1.7rem] text-start text-xl'>Step 1 of 4</h1>
        <p className='text-end mr-[2rem] mt-[-0.5rem] text-xl text-purple-700 underline'>Exit</p>
      </div>
      <p className='m-[3rem] font-semibold text-center text-4xl text-slate-800 font-serif'>
        First, let's find out what type of course you're making.
      </p>
      <div className='flex justify-center gap-[1rem] font-serif'>
        <div
          className={`border ${
            selectedDiv === 'course' ? 'border-black' : 'border-gray-400'
          } hover:bg-gray-200 hover:border-gray-900 h-[17rem] w-[13rem] border-lg cursor-pointer`}
          onClick={() => handleDivClick('course')}
        >
          <ListAltIcon className='mt-6' sx={{ fontSize: 30 }} />
          <p className='text-lg mt-7 font-semibold'>Course</p>
          <p className='whitespace-normal font-extralight p-4 text-sm'>
            Create rich learning experiences with the help of video lectures, quizzes, coding exercises, etc.
          </p>
        </div>
        <div
          className={`border ${
            selectedDiv === 'practiceTest' ? 'border-black' : 'border-gray-400'
          } hover:bg-gray-200 hover:border-gray-900 h-[17rem] w-[13rem] border-lg cursor-pointer`}
          onClick={() => handleDivClick('practiceTest')}
        >
          <OndemandVideoIcon className='mt-6' sx={{ fontSize: 30 }} />
          <p className='text-lg mt-7 font-semibold'>Practice Test</p>
          <p className='whitespace-normal font-extralight p-4 text-sm'>
            Help students prepare for certification exams by providing practice questions.
          </p>
        </div>
      </div>
      <div className='border border-double mt-20 flex'>
    
      <Link to='/Pages/Instructor/Courses/Create/Course2'><button
        className={`mt-5 ml-4 bg-gray-400 hover:bg-gray-700 text-white w-40 font-bold py-2 px-4 rounded ${
          selectedDiv ? 'bg-gray-500' : 'bg-gray-300 opacity-30 pointer-events-none'
        }`}
        disabled={!selectedDiv}
      >
        Continue
      </button>
      </Link>
      </div>
    </div>
  );
};