import React from 'react'
import HeroCourses from '../images/courses-hero.jpg'
import Qaida from '../images/qaida2.jpg'
import RecitingQuran from '../images/reciting-quran.jpeg'
import Hifz from '../images/hifz.jpg'
import Duas from '../images/duas.jpg'
import Salah from '../images/salah.jpg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CourseCard = ({ image, title, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 backdrop-blur-sm"
      onClick={onClick}
      style={{ 
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: '0 20px 40px rgba(0, 82, 67, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)'
      }}
    >
      {/* Course Image with Overlay */}
      <div className="relative w-full h-56 md:h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
        {/* Elegant overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Premium corner accent */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0"></div>
      </div>
      
      {/* Course Title with Enhanced Typography */}
      <div className="p-8 relative">
        {/* Subtle decorative line */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-customGreen to-transparent mx-auto mb-4 opacity-60"></div>
        
        <h3 className="text-xl md:text-2xl font-castoro text-customGreen text-center leading-relaxed tracking-wide group-hover:text-[#003a2f] transition-colors duration-300">
          {title}
        </h3>
        
        {/* Elegant bottom accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-customGreen to-transparent group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Noor al-Huruf (Qaida Course)",
      image: Qaida
    },
    {
      id: 2,
      title: "Saut al-Quran (Recitation and Tajweed Course) ",
      image: RecitingQuran
    },
    {
      id: 3,
      title: "Hifz al-Nur (Memorization Course) ",
      image: Hifz
    },
    {
      id: 4,
      title: "Duas for Daily Life (Practical Duas Mini Course)",
      image: Duas
    },
    {
      id: 5,
      title: "Learn Salah with meaning, posture, and etiquette.",
      image: Salah
    }
  ];

  const handleCourseClick = (courseId, courseTitle) => {
    // Navigate to course information page
    window.location.href = `/course/${courseId}`;
    
    // Alternative: If using React Router, you can use:
    // navigate(`/course/${courseId}`);
    
    // Or if you prefer using course name in URL:
    // const courseSlug = courseTitle.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
    // window.location.href = `/course/${courseSlug}`;
    
    console.log(`Redirecting to course: ${courseTitle} (ID: ${courseId})`);
  };

  return (
    <>
    <Navbar />
    <div>
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img 
          src={HeroCourses}
          alt="Student in library"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Content - Bottom Center */}
        <div className="relative h-full flex items-end justify-center">
          <div className="text-center px-6 mb-16 md:mb-24">
            <h1 
              className="text-5xl font-castoro md:text-9xl lg:text-8xl text-white font-normal tracking-wide"
            >
              Our Courses
            </h1>
          </div>
        </div>
        
        
      </section>

      {/* Course Cards Section */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-32 py-12 md:py-28">
        {/* Section Title with Enhanced Styling */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-6 relative">
              I'm seeking all Qur'an courses in all levels
              {/* Elegant underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-customGreen to-transparent"></div>
            </h2>
          </div>
        </div>

        {/* Course Cards Grid with Enhanced Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16"
             style={{ perspective: '1000px' }}>
          {courses.map((course, index) => (
            <div 
              key={course.id}
              className="transform transition-all duration-500"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <CourseCard
                image={course.image}
                title={course.title}
                onClick={() => handleCourseClick(course.id, course.title)}
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Courses