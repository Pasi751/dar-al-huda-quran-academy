import React from 'react';
import { useParams, useNavigate,useLocation } from 'react-router-dom';
import Qaida from '../images/qaida2.jpg'
import RecitingQuran from '../images/reciting-quran.jpeg';
import Hifz from '../images/hifz.jpg';
import Duas from '../images/duas.jpg';
import Salah from '../images/salah.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CourseInfoPage = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Course data - this matches your courses array from the Courses component
  const coursesData = {
    1: {
      id: 1,
      title: "Noor al-Huruf (Qaida Course)",
      image: Qaida,
      description: "Learn the fundamentals of Arabic letters and basic Quranic reading. This foundational course is perfect for beginners who want to start their Quranic journey with proper letter recognition and pronunciation.",
      duration: "11 months",
      level: "Beginner",
      features: [
        "Arabic letter recognition and pronunciation",
        "Basic reading skills development",
        "Interactive learning methodology",
        "Progress tracking and assessments"
      ],
      whatYouLearn: [
        "Read Arabic letters with proper pronunciation",
        "Recognize harakat (Fatha, Kasra, Damma) confidently",
        "Blend letters to form complete words",
        "Transition smoothly to Quran recitation"
      ],
      prerequisites: "No prior knowledge required",
      price: "£255"
    },
    2: {
      id: 2,
      title: "Saut al-Quran (Recitation and Tajweed Course)",
      image: RecitingQuran,
      description: "From fluent reading to perfect pronunciation - a complete journey.",
      duration: "3.5 years",
      level: "Intermediate",
      features: [
        "Comprehensive Tajweed rules instruction",
        "Voice training and modulation",
        "Classical recitation styles",
        "Audio practice sessions",
        "Performance evaluations"
      ],
      whatYouLearn: [
        "All essential Tajweed rules",
        "Proper articulation points (Makhraj)",
        "Beautiful recitation techniques",
        "Different Qira'at styles",
        "Melodious voice development"
      ],
      prerequisites: "Basic Arabic reading ability (Qaida completion recommended)",
      price: "£1,255"
    },
    3: {
      id: 3,
      title: "Hifz al-Nur (Memorization Course)",
      image: Hifz,
      description: "Embark on the noble journey of memorizing the Holy Quran. Our structured approach makes memorization achievable while maintaining strong retention and understanding.",
      duration: "3 Years",
      level: "Advanced",
      features: [
        "Systematic memorization methodology",
        "Daily revision schedules",
        "Memory retention techniques",
        "Progress tracking system",
        "Peer motivation groups"
      ],
      whatYouLearn: [
        "Complete Quran memorization",
        "Strong retention techniques",
        "Regular revision methods",
        "Confidence in recitation",
        "Deep spiritual connection"
      ],
      prerequisites: "Strong Arabic reading skills and Tajweed knowledge",
      price: "£1540"
    },
    4: {
      id: 4,
      title: "Duas for Daily Life (Practical Duas Mini Course)",
      image: Duas,
      description: "Learn essential daily duas that every Muslim should know. This practical course covers prayers for various situations and daily activities with proper pronunciation and meanings.",
      duration: "3 months",
      level: "Beginner to Intermediate",
      features: [
        "Essential daily duas collection",
        "Meaning and context explanation",
        "Pronunciation guidance",
        "Practical application tips"
      ],
      whatYouLearn: [
        "Morning and evening duas",
        "Mealtime and travel prayers",
        "Sleeping and waking duas",
        "Protection and blessing prayers",
        "Proper pronunciation and etiquette"
      ],
      prerequisites: "None - suitable for all levels",
      price: "£105"
    },
    5: {
      id: 5,
      title: "Learn Salah with meaning, posture, and etiquette",
      image: Salah,
      description: "Master the complete art of Salah (Islamic prayer) with proper postures, recitations, and spiritual understanding. Learn both the physical and spiritual aspects of this fundamental pillar of Islam.",
      duration: "2.5 months",
      level: "Beginner",
      features: [
        "Step-by-step Salah instruction",
        "Proper posture and movement training",
        "Arabic recitations with meanings",
        "Prayer etiquette and Sunnah practices",
        "Common mistakes correction"
      ],
      whatYouLearn: [
        "All Salah positions and transitions",
        "Required and recommended recitations",
        "Spiritual significance of each action",
        "Prayer timing and conditions",
        "Advanced Sunnah practices"
      ],
      prerequisites: "None (ideal for children, new learners, and reverts who want to learn the correct Salah)",
      price: "£90"
    }
  };

  const course = coursesData[parseInt(courseId)];

  if (!course) {
    return ( 
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-customGreen text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  

  const goToEnrollment = () => {
    // If we're already on the fee-structure page, just scroll to enrollment
    if (location.pathname === '/fee-structure') {
      const enrollmentSection = document.getElementById('enrollment-form');
      if (enrollmentSection) {
        enrollmentSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on a different page, navigate to fee-structure and then scroll
      navigate('/fee-structure');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const enrollmentSection = document.getElementById('enrollment-form');
        if (enrollmentSection) {
          enrollmentSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }

  const handleContactClick = (e) => {
    e.preventDefault();
    
    // If we're already on the FAQ page, just scroll to the contact form
    if (location.pathname === '/faq') {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on a different page, navigate to FAQ and then scroll
      navigate('/faq');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }}

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <img 
          src={course.image}
          alt={course.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl text-white font-castoro mb-4">
              {course.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {course.duration}
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {course.level}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Course Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-castoro text-customGreen mb-4">Course Overview</h2>
              <p className="font-inter text-black text-sm font-light leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-castoro text-customGreen mb-4">What You'll Learn</h3>
              <ul>
                {course.whatYouLearn.map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* <div className="w-2 h-2 bg-customGreen rounded-full mt-3 mr-4 flex-shrink-0"></div> */}
                    <span className="font-inter text-black text-sm font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-castoro text-customGreen mb-4">Course Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center rounded-lg">
                    {/* <div className="w-3 h-3 bg-customGreen rounded-full mr-3"></div> */}
                    <span className="font-inter text-black text-sm font-light leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Course Details Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-8">
              <h3 className="text-2xl font-castoro text-customGreen mb-4">Course Details</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-inter text-black text-base font-medium">Duration:</span>
                  <span className="font-inter text-black text-base font-light">{course.duration}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-inter text-black text-base font-medium">Level:</span>
                  <span className="font-inter text-black text-base font-light">{course.level}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-inter text-black text-base font-medium">Price:</span>
                  <span className="font-inter text-black text-base font-light">{course.price}</span>
                </div>
                
                <div className="flex flex-col justify-between py-3">
                  <span className="font-inter text-black text-base font-medium">Prerequisites:</span>
                  <span className="font-inter text-black text-base font-light">{course.prerequisites}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <button onClick={goToEnrollment} className="w-full bg-customGreen text-white py-2 px-4 rounded-xl font-medium text-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
                
                <button onClick={handleContactClick} className="w-full border-2 border-customGreen text-customGreen py-2 px-4 rounded-xl font-medium hover:bg-customGreen hover:text-white transition-all duration-300">
                  Contact for Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default CourseInfoPage;