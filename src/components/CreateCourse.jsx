import React, { useState } from 'react';
import { createCourse } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('')
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createCourse({ 
      title :title, 
      course_code :code,
      description: description }).then(() => {
      navigate('/');
    }).catch(error => {
      console.error("There was an error creating the course!", error);
    });
  };

  return (
    <div className=' h-screen flex justify-center items-center flex-col'>
      {/* <div className='pl-10'>
          <h2>Create New Course</h2>
      </div> */}
      <p className='text-2xl m-10'>Course New Course</p>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
        <div className='pb-5'>
          <input placeholder='Course title' type="text" value={title} className='border border-black h-10 w-96 p-2 rounded-md' onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className='pb-5'>
          <input placeholder='Course code' type="text" value={code} className='border border-black h-10 w-96 p-2 rounded-md' onChange={(e) => setCode(e.target.value)} required />
        </div>
        <div className='pb-5'>
          <input placeholder='Course description' type="text" value={description} className='border border-black h-10 p-2 w-96 rounded-md' onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className='mx-8'>
        {/* <button type="submit" className='border bg-blue-700 font-thin text-white p-2 rounded-md w-40'>Add course</button> */}
        <button type="submit" class="relative rounded px-5 mx-2 py-2 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
{/* <span class="absolute right-0 w-8 h-30 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
<span class="relative"> Add course</span>
</button>
        <a href="/" class="relative rounded mx-2 px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
{/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
<span class="relative"> Goto Course List</span>
</a>
        </div>
      </form>
    </div>
  );
};

export default CreateCourse;
