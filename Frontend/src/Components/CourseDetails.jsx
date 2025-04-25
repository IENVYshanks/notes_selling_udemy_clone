import { useEffect, useState } from 'react';

const CourseDetails = ({ course }) => {
  return (
    
       <div className="flex justify-center">
      <div className="w-[800px]">
        <div className="flex flex-col items-start mt-[100px]">
          <img src={course.image} alt="" className="h-[150px] w-[250px] object-cover" />
          <p key={course._id} className="font-bold text-lg w-[230px] whitespace-normal mt-3">
            {course.name}
          </p>
          <p className="w-[230px] whitespace-normal mt-2">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="w-[230px] whitespace-normal mt-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="w-[230px] whitespace-normal mt-2">
            <strong>Category:</strong> {course.category}
          </p>
        </div>
      </div>
    </div>
   
  );
};

export default CourseDetails;