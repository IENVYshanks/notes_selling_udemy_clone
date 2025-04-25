import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function Curriculum() {
  const [divCount, setDivCount] = useState(0);
  const [content, setContent] = useState(false);
  const [divContent, setDivContent] = useState([]);
  const [isClicked, setIsClicked] = useState(false);


  const handleButtonClick = () => {
    setDivCount(prevCount => prevCount + 1);
  };
  const handleContent = () =>{
    setContent(prevContent => !prevContent)
      
    
  }
  const handleCourse = () =>{
    
    setIsClicked(prev => !prev);   
    
  }

  const handleContent2 = (index) => {
    setDivContent(prevContent => {
      const updatedContent = [...prevContent];
      updatedContent[index] = !updatedContent[index];
      return updatedContent;
    });
  };

  const renderDivs = () => {
    const divs = [];
    for (let i = 0; i < divCount; i++) {
      divs.push(
        <div key={i} className="border border-gray-600 bg-slate-50 ">
         {!divContent[i] ? (
        <div className='mt-[2rem] border p-[1rem] ml-[12rem] bg-gray-50 w-[50rem] flex'>
          <h1 className='text-gray-700'>
            Lecture {i + 2}:<InsertDriveFileIcon color="disabled" sx={{ fontSize: 20 }}/>Section {i+2}: 
          </h1>
          <button className = 'ml-[30rem] bg-gray-400 w-[5rem] border border-gray-700' onClick={() => handleContent2(i)}>Content</button>
        </div>
      ) : (
        <div className='mt-[2rem] border ml-[12rem] bg-gray-50 w-[50rem] h-[10rem] '>
          <div className='flex m-[1rem] '><h1 className='text-gray-700'>
            Lecture {i+2}: <InsertDriveFileIcon color="disabled" sx={{ fontSize: 20 }}/>
            Section {i+2}
          </h1>
          <button className = 'ml-[39rem] bg-gray-500 h-[1.5rem] w-[2rem] border border-gray-700'onClick={() => handleContent2(i)}>x</button>
          </div>
          
          <p className='text-xs text- text-gray-700'>Select the main type of content. Files and links can be added as resources. Learn about content types.</p>
          <div className='flex text-gray-500 text-sm gap-[5rem] '>
         <h1 className='hover:text-gray-800 '> <SlowMotionVideoIcon  color="disabled" sx={{ fontSize: 50 }}/> Video </h1>
          <h1 className='hover:text-gray-800 '><InsertDriveFileIcon color="disabled" sx={{ fontSize: 50 }}/>Video and slide</h1>
          <h1 className='hover:text-gray-800 '><OndemandVideoIcon color="disabled" sx={{ fontSize: 50 }}/> Article</h1></div>

          
        </div>
      )}
      <div className='bg-gray-50 flex mt-[1rem] ml-[12rem]'>
      <button
        onClick={handleCourse}
        style={{
          border: isClicked ? '1px dashed purple' : '1px solid black',
          width: '150px',
          height: '40px',
          color: isClicked ? 'purple' : 'black',
        }}
      >
        Curriculum Item
      </button>
      {isClicked && (
        <div style={{ marginTop: '10px', color: 'purple' }}>
          <ul className='flex gap-[2rem] pt-[1rem]'>
            <li>Lecture</li>
            <li>Quiz</li>
            <li>Assignment</li>
            <li>Coding Exercise</li>
          </ul>
        </div>
      )}
    </div>
    
      
        </div>
      );
    }
    return divs;
  };
 return( 
 <div className='ml-[-25rem]'> 
    <div className='mt-[-28rem] flex gap-[10rem] '>
        <h1 className='text-2xl text-gray-800  font-serif font-bold pt-[2rem]  '>Curriculum</h1>
        <button className='border font-bold border-gray-600 border-spacing-4 w-40 h-10 mt-6 ml-[30rem] hover:bg-gray-500 hover:w-[9rem]'>Bulk Uploader</button>
        
    </div>
    <br/>
<div className='whitespace-normal pt-[6rem]  w-[68rem] text-wrap '>
    <p>Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).<br/>
    <br/>

Start putting together your course by creating sections, lectures and practice activities (quizzes, coding exercises and assignments). Use your course outline to structure your content and label your sections and lectures clearly. If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.</p>
</div>
<div className='bg-slate-50 mt-[3rem] p-[1rem] border  border-gray-700 '>
    <h1 className='text-gray-700 pb-[1rem] '> Section 1: <InsertDriveFileIcon color="disabled" sx={{ fontSize: 20 }}/> <input className='placeholder:'/>Introduction</h1> 

    {!content ? (
        <div className='mt-[2rem] border p-[1rem] ml-[12rem] bg-gray-50 w-[50rem] flex'>
          <h1 className='text-gray-700'>
            Lecture 1:<InsertDriveFileIcon color="disabled" sx={{ fontSize: 20 }}/>Section 1: 
          </h1>
          <button className = 'ml-[30rem] bg-gray-400 w-[5rem] border border-gray-700' onClick={handleContent}>Content</button>
        </div>
      ) : (
        <div className='mt-[2rem] border ml-[12rem] bg-gray-50 w-[50rem] h-[10rem] '>
          <div className='flex m-[1rem]'><h1 className='text-gray-700'>
            Lecture 1: <InsertDriveFileIcon color="disabled" sx={{ fontSize: 20 }}/>
            Section 1
          </h1>
          <button className = 'ml-[39rem] bg-gray-500 h-[1.5rem] w-[2rem] border border-gray-700'onClick={handleContent}>x</button>
          </div>
          
          <p className='text-xs text- text-gray-700'>Select the main type of content. Files and links can be added as resources. Learn about content types.</p>
          <div className='flex text-gray-500 text-sm gap-[5rem] '>
         <h1 className='hover:text-gray-800 '> <SlowMotionVideoIcon  color="disabled" sx={{ fontSize: 50 }}/> Video </h1>
          <h1 className='hover:text-gray-800 '><InsertDriveFileIcon color="disabled" sx={{ fontSize: 50 }}/>Video and slide</h1>
          <h1 className='hover:text-gray-800 '><OndemandVideoIcon color="disabled" sx={{ fontSize: 50 }}/> Article</h1></div>

          
        </div>
      )}
     <div className='bg-gray-50 flex ml-[11rem] '>
      <button
        onClick={handleCourse}
        style={{
          border: isClicked ? '1px dashed purple' : '1px solid black',
          width: '150px',
          height: '40px',
          margin:'1rem',
          color: isClicked ? 'purple' : 'black',
        }}
      >
        Curriculum Item
      </button>
      {isClicked && (
        <div style={{ marginTop: '10px', color: 'purple' }}>
          <ul className='flex gap-[2rem] pt-[1rem]'>
            <li>Lecture</li>
            <li>Quiz</li>
            <li>Assignment</li>
            <li>Coding Exercise</li>
          </ul>
        </div>
      )}
    </div>
</div>
<button onClick={handleButtonClick}><AddIcon/> Section</button>
      {renderDivs()}
 </div>
 
    );
}

