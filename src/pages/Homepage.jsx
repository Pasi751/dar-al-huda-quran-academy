import React from 'react';
import HeroImage from '../images/Hero image.jpg'
import Image1 from '../images/Homepage1.jpeg'
import Image2 from '../images/Homepage2.jpg'
import Image3 from '../images/Homepage3.jpg'
import ScheduleIcon from '../images/schedule-icon.png'
import LanguagesIcon from '../images/languages-icon.png'
import KidIcon from '../images/kid-icon.png'
import LearningIcon from '../images/learning-icon.png'
import ProgressTracking from '../images/progress-tracking-icon.png'
import QuranRecitation from '../images/quran-recitation.jpg'
import Tajweed from '../images/tajweed.jpg'
import Qaida from '../images/qaida.jpg'
import CustomerReviewSection from '../components/CustomerReviewSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';


const Homepage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const goToCourses = () => {
    navigate('/courses');
    window.scrollTo(0,0);
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


  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={HeroImage} // <-- replace with your hero image path
          alt="Quran"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center 
                  items-center md:items-start 
                  px-8 md:px-16 lg:px-24 
                  text-white text-center md:text-left">
          <h1 className="font-castoro text-4xl md:text-5xl font-light">
            Learn Quran with Perfect Tajweed
          </h1>
          <p className="font-castoro mt-2 text-lg sm:text-xl md:text-xl md:max-w-3xl">
            Online and In-Person Classes for Kids and Adults
          </p>
          <button onClick={goToEnrollment} className="mt-4 px-10 py-2.5 rounded-tl-2xl rounded-br-2xl bg-customGreen hover:bg-green-900 font-semibold shadow-lg transition">
            START FREE TRIAL
          </button>
        </div>
      </section>


      <section className="py-20 bg-white text-center px-4 md:px-32">
        <h2 className="text-5xl md:text-7xl font-castoro text-customGreen mb-4">
          Welcome to Dar Al Huda Quran Academy
        </h2>
        <p className="text-2xl md:text-4xl font-inter font-extralight text-black">
          "Bismillah-ir-Rahman-ir-Raheem"
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto md:px-32 py-0 md:py-12 px-5">
        {/* Image Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image1} // replace with your image path
            alt="Quran study"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center md:pl-32">
          <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-4 text-center md:text-left">
            Illuminating Hearts with the Light of the Qur’an.
          </h2>
          <p className="text-base md:text-base font-inter font-light text-black text-center md:text-left">
            At Dar Al Huda Quran Academy, we lovingly kindle the eternal light of the Qur’an in every heart
            and soul—nurturing not only the art of Tajweed but also a lifelong, unbreakable bond with the
            divine words of Allah. Through personalized teaching, patient guidance, and soulful learning,
            we strive to create a sanctuary where faith, wisdom, and spiritual growth flourish together,
            inspiring a journey of devotion that lasts for a lifetime.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-32 py-12 flex flex-col items-center">
        {/* Landscape Image */}
        <div className="w-full flex justify-center">
          <img
            src={Image2} // replace with your image path
            alt="Ustadha Huda Ashfaq"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-castoro text-customGreen text-center">
          Founded by Ustadha Huda Ashfaq,
          <br /> a Certified Quran and Arabic Instructor
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-base md:text-base font-inter font-light text-black text-center md:text-center md:max-w-3xl">
          With expertise in Sharia Law & Islamic Studies, Educational Psychology (using Montessori-inspired methods for children),
          and Multilingual Instruction (Arabic, Urdu, and English), Ustadha Huda has mentored over 90 students across 15+ countries
          in the past 4+ years. We offer online classes worldwide via Zoom as well as in-person learning at our center in Bahria
          Town Phase 8, Rawalpindi. Whether you are a child starting with Qaida, an adult perfecting Tajweed or memorization, or
          a revert learning Quranic Arabic, we ensure your journey is transformative, not transactional.
        </p>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto md:px-32 py-0 md:py-12 px-5">
        {/* Image Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image3} // replace with your image path
            alt="Learning"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Left */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center md:pr-32">
          <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-4 text-center md:text-left">
            Making Learning <br /> Enjoyable for <br /> Everyone.
          </h2>
          <p className="text-base md:text-base font-inter font-light text-black text-center md:text-left">
            Learn with certified teachers holding Ijazah in Tajweed & Arabic, enjoy engaging Montessori-inspired
            lessons for kids, and receive personalized 1-on-1 guidance. With flexible timings and bilingual instruction
            in Urdu, English, and Arabic, learning is easy, accessible, and effective.
          </p>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-castoro text-customGreen mb-0">
            Dar Al Huda Quran Academy
          </h1>

          {/* Subheadline */}
          <p className="max-w-7xl text-xl font-light font-inter text-black mb-9">
            "Nurtures hearts and minds through authentic Quranic knowledge, serving students in every corner of the world"
          </p>

          {/* Exclusive Member Benefits */}
          <h2 className="text-2xl font-castoro text-black mb-2 relative inline-block">
            Exclusive Member benefits
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black mt-1"></span>
          </h2>

          {/* Features Icons */}
          <div className="w-full mt-8">
            {/* Desktop Layout - Horizontal */}
            <div className="hidden md:flex md:justify-evenly space-x-12">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <img src={ScheduleIcon} alt="Flexible scheduling" className="w-12 h-12 mb-2" />
                <p className="text-sm font-light font-inter text-customGreen">Flexible scheduling</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <img src={LanguagesIcon} alt="Multilingual support" className="w-12 h-12 mb-2" />
                <p className="text-sm font-light font-inter text-customGreen">Multilingual support</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <img src={KidIcon} alt="Kids Friendly" className="w-12 h-12 mb-2" />
                <p className="text-sm font-light font-inter text-customGreen">Kids friendly</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <img src={LearningIcon} alt="Interactive learning" className="w-12 h-12 mb-2" />
                <p className="text-sm font-light font-inter text-customGreen">Interactive learning</p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center">
                <img src={ProgressTracking} alt="Progress Tracking" className="w-12 h-12 mb-2" />
                <p className="text-sm font-light font-inter text-customGreen">Progress Tracking</p>
              </div>
            </div>

            {/* Mobile Layout - 2-2-1 Grid */}
            <div className="md:hidden flex flex-col items-center space-y-6">
              {/* First Row - 2 icons */}
              <div className="flex justify-center space-x-16">
                <div className="flex flex-col items-center">
                  <img src={ScheduleIcon} alt="Flexible scheduling" className="w-12 h-12 mb-2" />
                  <p className="text-sm font-light font-inter text-customGreen">Flexible scheduling</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={LanguagesIcon} alt="Multilingual support" className="w-12 h-12 mb-2" />
                  <p className="text-sm font-light font-inter text-customGreen">Multilingual support</p>
                </div>
              </div>

              {/* Second Row - 2 icons */}
              <div className="flex justify-center space-x-16">
                <div className="flex flex-col items-center">
                  <img src={KidIcon} alt="Kids Friendly" className="w-12 h-12 mb-2" />
                  <p className="text-sm font-light font-inter text-customGreen">Kids friendly</p>
                </div>
                <div className="flex flex-col items-center">
                  <img src={LearningIcon} alt="Interactive learning" className="w-12 h-12 mb-2" />
                  <p className="text-sm font-light font-inter text-customGreen">Interactive learning</p>
                </div>
              </div>

              {/* Third Row - 1 icon centered */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <img src={ProgressTracking} alt="Progress Tracking" className="w-12 h-12 mb-2" />
                  <p className="text-sm font-light font-inter text-customGreen">Progress Tracking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <button onClick={goToEnrollment} className="mt-10 bg-customGreen text-sm text-white font-inter px-8 py-2 rounded-tl-xl rounded-br-xl shadow-md hover:bg-green-900 transition">
            Join Now
          </button>
        </div>
      </section>

      <section className="w-full py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-12">
      Featured Courses and Services
    </h2>
    
    {/* Cards Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 md:px-16">
      <div
        className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden hover:cursor-pointer h-96"
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
        onClick={goToCourses}
      >
        <img
          src={QuranRecitation}
          alt="Quran Recitation"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
        />
        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-5">
          <p className="text-white font-castoro text-lg">Quran Recitation</p>
        </div>
      </div>

      <div
        className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden hover:cursor-pointer h-96"
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
        onClick={goToCourses}
      >
        <img
          src={Tajweed}
          alt="Tajweed"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-5">
          <p className="text-white font-castoro text-lg">
            Tajweed
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="relative rounded-tl-3xl rounded-br-3xl overflow-hidden hover:cursor-pointer h-96"
        onMouseEnter={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          const img = e.currentTarget.querySelector('img');
          if (img) img.style.transform = 'scale(1)';
        }}
        onClick={goToCourses}
      >
        <img
          src={Qaida}
          alt="Qaida"
          className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 py-5">
          <p className="text-white font-castoro text-lg">
            Qaida
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      <CustomerReviewSection />

      <Footer />







    </>
  );
}

export default Homepage;
