import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

// Axios instance with default configuration
const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Get all courses
export const getCourses = () => axiosInstance.get('/courses');

// Get course details by ID
export const getCourseDetails = (id) => axiosInstance.get(`/courses/${id}`);

// Create a new course
export const createCourse = (courseData) => axiosInstance.post('/courses/', courseData);

// Delete a course by ID
export const deleteCourse = async (id) => {
    try {
        await axiosInstance.delete(`/courses/${id}/`);
    } catch (error) {
        console.error('There was an error deleting the course!', error);
        throw error;
    }
};

// Create a new instance
export const createInstance = (instanceData) => axiosInstance.post('/add-instance/', instanceData);

// Get instances by year and semester
export const getInstances = (year, semester) => axiosInstance.get(`/instances/${year}/${semester}`);

export const getAllInstances = () => axiosInstance.get('/instances/all/');

// Get instance details by year, semester, and ID
export const getInstanceDetails = (year, semester, id) => axiosInstance.get(`/instances/${year}/${semester}/${id}`);

// Delete an instance by year, semester, and ID
export const deleteInstance = (year, semester, id) => axiosInstance.delete(`/instances/${year}/${semester}/${id}`);
