import React from 'react'
import HeroImage2 from '../images/hero-image-2.jpg';
import AboutUs1 from '../images/aboutus-1.jpg'
import AboutUs2 from '../images/aboutus-2.jpg'
import AboutUs3 from '../images/aboutus-3.png'
import AboutUs4 from '../images/aboutus-4.jpg'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={HeroImage2}
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
              About us
            </h1>
          </div>
        </div>
      </section>


      <section className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto md:px-32 py-28 md:py-28 px-5">
        {/* Image Right */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutUs1} // replace with your image path
            alt="Learning"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Left */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center md:pr-32">
          <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-4 text-center md:text-left">
            Who we are
          </h2>
          <p className="text-base md:text-base font-inter font-light text-black text-center md:text-left">
            Dar Al Huda Quran Academy is dedicated to bringing the wisdom of the Qur’an into the hearts of
            learners worldwide. We help students of all ages build a strong connection with Allah’s words,
            experience the joy of learning, and grow in faith and character through guided, compassionate teaching.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-32 py-12 flex flex-col items-center">
        {/* Landscape Image */}
        <div className="w-full flex justify-center">
          <img
            src={AboutUs2} // replace with your image path
            alt="Ustadha Huda Ashfaq"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-castoro text-customGreen text-center">
          Our Journey of Faith
        </h2>

        {/* Paragraph */}
        <p className="mt-4 text-base md:text-base font-inter font-light text-black text-center md:text-center md:max-w-3xl">
          Founded in 2021, Dar Al Huda Quran Academy began as a humble home-based initiative in Bahria Town, Rawalpindi. From those modest beginnings,
          we have grown into a trusted online academy, mentoring over 90 students across 15 countries. Our unique teaching approach blends the timeless
          beauty of classical Tajweed with Montessori-inspired techniques for children and thoughtful psychological methods for adult
          learners—making Quranic learning accessible, engaging, and transformative for every age.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-center max-w-7xl mx-auto md:px-32 py-0 md:py-12 px-5">
        {/* Image Left */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutUs3} // replace with your image path
            alt="Quran study"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col justify-center md:pl-32">
          <h2 className="text-3xl md:text-4xl font-castoro text-customGreen mb-4 text-center md:text-left">
            Qur’an and Arabic Learning with Personalized Guidance
          </h2>
          <p className="text-base md:text-base font-inter font-light text-black text-center md:text-left">
            Certified in Shariah Law and the Arabic language, with training in Montessori methods and educational psychology.
            Fluent in Arabic, Urdu, and English, ensuring students from all backgrounds can learn comfortably.
            Classes are interactive, student-centered, and tailored to each learner’s pace, with a strong focus on
            Arabic pronunciation, practical application, and spiritual development. A warm and encouraging approach is
            used, making the Qur’an a joy to learn rather than a burden.
          </p>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-6 md:px-32 py-12 flex flex-col items-center">
        {/* Landscape Image */}

        {/* Title */}
        <h2 className="mt-6 text-3xl md:text-4xl font-castoro text-customGreen text-center">
          Dar Al Huda Qura’n Academy: Our heart and soul
        </h2>

        <div className="w-full flex justify-center">
          <img
            src={AboutUs4} // replace with your image path
            alt="Ustadha Huda Ashfaq"
            className="w-full md:w-[80%] h-auto rounded-lg shadow-md"
          />
        </div>



        {/* Paragraph */}
        <p className="mt-4 text-base md:text-base font-inter font-light text-black text-center md:text-center md:max-w-3xl">
          Dar Al Huda is built on Ikhlaas (sincerity), where every lesson is taught solely for Allah’s pleasure and in the
          spirit of the Prophet’s ﷺ teaching methods. The focus extends beyond knowledge to Tarbiyah (character building),
          nurturing good manners and strong Islamic values. Great importance is placed on Tajweed and accuracy, ensuring
          correct pronunciation and authentic recitation of the Qur’an. To make learning accessible for all, high-quality
          Quranic education is offered both online and in person.
        </p>
      </section>


      <Footer />
    </>
  )
}

export default AboutUs
