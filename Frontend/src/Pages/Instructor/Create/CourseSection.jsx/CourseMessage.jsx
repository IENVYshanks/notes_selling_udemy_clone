import React from 'react';


export default function CourseMessage() {
    return (
        <div className='ml-[-25rem]'>
            <div className='mt-[-28rem] flex gap-[10rem] '></div>
            
            <h1 className='text-2xl text-gray-800  ml-[-35rem] font-serif font-bold pt-[2rem] m  '>Course Message </h1>
            

            <div className='whitespace-normal pt-[6rem] ml-[2rem] w-[50rem] text-wrap '>
    <p>Write messages to your students (optional) that will be sent automatically when they join or complete your course to encourage students to engage with course content. If you do not wish to send a welcome or congratulations message, leave the text box blank.</p>
</div>

<p className=' text-gray-800  ml-[-38rem] font-serif font-bold pt-[2rem] m  '>Welcome Message</p>
<textarea className='border border-gray-600 w-[50rem] row-span-2 mt-[1rem] ml-[2rem]'/>

<p className=' text-gray-800  ml-[-36rem] font-serif font-bold pt-[2rem] m  '>Congratulation Message</p>
<textarea className='border border-gray-600 w-[50rem] row-span-2 mt-[1rem] ml-[2rem]'/>
        </div>
    );
}

