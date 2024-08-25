import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInstanceDetails } from '../api';

const CourseInstanceDetail = () => {
  const { year, semester, id } = useParams();
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    getInstanceDetails(year, semester, id)
      .then(response => {
        setInstance(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the instance details!', error);
      });
  }, [year, semester, id]);

  if (!instance) return <div>Loading...</div>;

  return (
    <div>

<div className='py-10 flex items-center justify-center flex-col'>
      <p className='my-2 text-2xl'>Course Instance Detail</p>
      <table className='border border-black'>
        <tr>
          <th className = 'p-2'>Instance ID</th>
          <th className = 'p-2'>Course ID</th>
          <th className = 'p-2'>Course Year</th>
          <th className = 'p-2'>Semester</th>
        </tr>
        <tr>
          <td className = 'p-2 text-center'>{instance.id}</td>
          <td className = 'p-2 text-center'>{instance.course}</td>
          <td className = 'p-2 text-center'>{instance.year}</td>
          <td className = 'p-2 text-center'>Sem-{instance.semester}</td>
        </tr>
      </table>
      <div className='m-10'>
        <a href="/" class="relative rounded mx-2 px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
        <span class="relative"> Goto Course List</span>
        </a>
        <a href="/instances" class="relative rounded mx-2 px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
        <span class="relative"> Goto Instance List</span>
        </a>
      </div>
    </div>
    </div>
  );
};

export default CourseInstanceDetail;
