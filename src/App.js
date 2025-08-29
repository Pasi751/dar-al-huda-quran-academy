import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage'
import About from './pages/AboutUs'
import Contact from './pages/ContactNow'
import Courses from './pages/Courses';
import FAQ from './pages/FAQ.jsx'
import CourseInfoPage from './pages/CourseInfoPage';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer';
import FeeStructure from './pages/FeeStructure.jsx';


function App() {
  return (


    <>
    
    <Router>
      <div className="App">
        {/* Your navigation/header component can go here */}
        
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />
          
          {/* Courses listing page */}
          <Route path="/courses" element={<Courses />} />
          
          {/* Individual course details page */}
          <Route path="/course/:courseId" element={<CourseInfoPage />} />
          
          {/* Add other routes as needed */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fee-structure" element={<FeeStructure />} />
          <Route path="/faq" element={<FAQ />} />

          
          {/* 404 Not Found route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Your footer component can go here */}
      </div>
    </Router>

    </>
  );
}

// Example NotFound component (you can create this separately)
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 mb-6">Page not found</p>
        <a 
          href="/" 
          className="bg-customGreen text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default App;