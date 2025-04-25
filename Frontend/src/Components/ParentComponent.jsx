import { useEffect, useState } from 'react';
import CourseDetails from './CourseDetails';

const ParentComponent = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/courses');
        const json = await response.json();

        if (response.ok) {
          setCourses(json);
        }else{
          console.error('Error fetching courses:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
      <div className="w-full max-w-[1200px] mx-auto mt-[50px]">
      <h1 className="text-2xl font-bold mb-6">Top Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {courses.map((course) => (
          <CourseDetails key={course._id} course={course} />
        ))}
      </div>
    </div>

  );
};

export default ParentComponent;