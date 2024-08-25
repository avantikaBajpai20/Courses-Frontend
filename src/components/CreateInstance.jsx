import React, { useState, useEffect } from 'react';
import { createInstance, getCourses } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateInstance = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState('');
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courses from the API
    getCourses()
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const instanceData = {
      course: selectedCourseId,
      year: year,
      semester: semester
  } 

    console.log('Sending request with data:', instanceData);

    createInstance(instanceData)
      .then(() => {
        navigate('/instances');
      })
      .catch(error => {
        console.error('There was an error creating the course instance!', error);
      });
  };

  return (
    <div className = 'flex justify-center items-center flex-col my-10 '>
      <p className='text-2xl'>Create New Course Instance</p>
      <form onSubmit={handleSubmit}>
        
          <div className='m-5'>
          <select
            className='border rounded-lg'
            value={selectedCourseId}
            onChange={e => setSelectedCourseId(e.target.value)}
            required
          >
            <option value="">Select a course</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.title} {/* Assuming you have a `title` property */}
              </option>
            ))}
          </select>

          <a href="/" className="relative rounded mx-2 px-5 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
          <span class="relative"> Refresh</span>
          </a>

          </div>

        <div className='m-5'>
          
          <input
          placeholder='Year'
          className='p-2 w-full border border-black rounded-xl '
            type="text"
            value={year}
            onChange={e => setYear(e.target.value)}
            required
          />
        </div>
        <div className='m-5'>
    
          <input
            placeholder='Semester'
            type="text"
            className='p-2 w-full border border-black rounded-xl '
            value={semester}
            onChange={e => setSemester(e.target.value)}
            required
          />
        </div>
        <div className='m-10 flex flex-col justify-center'>
          <div className='m-2'>
          <button type="submit" className="relative rounded w-full px-5 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
            <span class="relative"> Create Instance</span>
          </button>
          </div>
          <div className='m-2 flex flex-col'>
          <a href = '/instances' className="relative rounded w-full px-16 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
            <span class="relative text-center">List Instances</span>
          </a>
          <a href = '/' className="relative rounded w-full px-16 my-2 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
            {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
            <span class="relative text-center"> Goto Course List</span>
          </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateInstance;
