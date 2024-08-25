import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseDetails } from '../api';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    getCourseDetails(id).then(response => {
      setCourse(response.data);
    }).catch(error => {
      console.error("There was an error fetching the course details!", error);
    });
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className='py-10 flex items-center justify-center flex-col'>
      <p className='my-2 text-2xl'>Course Detail</p>
      <table className='border border-black'>
        <tr>
          <th className = 'p-2'>Course Title</th>
          <th className = 'p-2'>Course ID</th>
          <th className = 'p-2'>Course Code</th>
          <th className = 'p-2'>Description</th>
        </tr>
        <tr>
          <td className = 'p-2 text-center'>{course.title}</td>
          <td className = 'p-2 text-center'>{course.id}</td>
          <td className = 'p-2 text-center'>{course.course_code}</td>
          <td className = 'p-2 text-center'>{course.description}</td>
        </tr>
      </table>
      <div className='m-10'>
        <a href="/" class="relative rounded mx-2 px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
        <span class="relative"> Goto Course List</span>
        </a>
      </div>
    </div>
  );
};

export default CourseDetail;
