import React, { useState, useEffect } from 'react';
import { getInstances, deleteInstance, getAllInstances } from '../api';
import { Link } from 'react-router-dom';

const CourseInstanceList = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [instances, setInstances] = useState([]);

  

  useEffect(() => {
    const handleFetchInstances = () => {
        if (year && semester) {
          getInstances(year, semester)
            .then(response => {
              setInstances(response.data);
              console.log(response);
            })
            .catch(error => {
              console.error('There was an error fetching the course instances!', error);
            });
        }
        else{
            getAllInstances().then(response => {
              setInstances(response.data);
              console.log(response);
            })
            .catch(error => {
              console.error('There was an error fetching the course instances!', error);
            });
        }
      };
     handleFetchInstances();
  }, [year, semester]);

  const handleDelete = (year,semester,id  ) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      deleteInstance(year,semester,id)
        .then(() => {
          // Remove the deleted course from the state
          setInstances(instances.filter(instance => instance.id  !== id  ));
        })
        .catch(error => {
          console.error('There was an error deleting the course!', error);
        });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-2xl'>Course Instances</p>
      <div className='p-2 m-2'>
        <input
        className='border border-black rounded-xl p-2'
          type="text"
          placeholder='Year'
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </div>
      <div className='p-2 mx-2 '>
        <input
          className='border border-black rounded-xl p-2'
          placeholder='Semester'
          type="text"
          value={semester}
          onChange={e => setSemester(e.target.value)}
        />
      </div>
      
      <div className='m-4'>

      <button onClick={() => getInstances(year, semester)} className="relative rounded mx-2 px-5 py-1 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
          {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
          <span class="relative"> Fetch Instances</span>
          </button>
      
       </div>
       {/*
      <ul>
        {instances.map(instance => (
          <li key={instance.id}>
            <Link to={`/instances/${instance.year}/${instance.semester}/${instance.id}`}>
              Course ID: {instance.course } | Year: {instance.year} | Semester: {instance.semester}
            </Link>
          </li>
        ))}
      </ul> */}

      <div className = 'w-screen'>
          <table className="w-screen text-sm text-left rtl:text-right text-black dark:text-blue-900">
                <thead class="text-xs text-gray-700 uppercase bg-blue-600 dark:text-white">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                          Course ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Year
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Semester
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {instances.map(instance => (
                      <tr className = "odd:bg-black odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-300 border-b dark:border-gray-700"key={instance.id}>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">{instance.course }</th>
                        <td className="px-6 py-4">{instance.year} </td> 
                        <td className="px-6 py-4">Sem {instance.semester} </td> 
                        <td className="flex items-center justify-center px-4 py-4">

                          <Link to={`/instances/${instance.year}/${instance.semester}/${instance.id}`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                              <path d="M8 10a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                              <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm5 5a3 3 0 1 0 1.524 5.585l1.196 1.195a.75.75 0 1 0 1.06-1.06l-1.195-1.196A3 3 0 0 0 9.5 7Z" clipRule="evenodd" />
                            </svg>
                            </Link> / 
                          <button onClick={() => handleDelete(instance.year,instance.semester,instance.id )}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                          </svg>
                          </button>
                        </td>
                      </tr>
                    ))}  
                </tbody>
            </table>
        </div>
        <div className='m-10'>
        <a href="/" class="relative rounded mx-2 px-5 py-2.5 overflow-hidden group bg-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
        {/* <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span> */}
        <span class="relative"> Goto Course List</span>
        </a>
      </div>



    </div>
  );
};

export default CourseInstanceList;
