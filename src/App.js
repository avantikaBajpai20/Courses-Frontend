import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import CreateCourse from './components/CreateCourse';
import CourseInstanceList from './components/CourseInstanceList';
import CourseInstanceDetail from './components/CourseInstanceDetail';
import CreateInstance from './components/CreateInstance';
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/instances" element={<CourseInstanceList />} />
          <Route path="/instances/:year/:semester/:id" element={<CourseInstanceDetail />} />
          <Route path="/create-instance" element={<CreateInstance />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
