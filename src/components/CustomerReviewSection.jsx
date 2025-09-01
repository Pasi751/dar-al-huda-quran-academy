import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function CustomerReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Sana, Mother of Momin (Age 5)",
      location: "Islamabad, Pakistan",
      rating: 5,
      review: "I’m delighted with my son’s Quranic journey. The teacher is patient, knowledgeable, and emphasizes Tajweed in every lesson—exactly what I was looking for. My son enjoys his classes and is improving day by day. I also really appreciate the monthly progress updates. Communication is always smooth. I'm highly satisfied!"

    },
    {
      id: 2,
      name: "Shabeena, Mother of Hania (Age 11)",
      location: "Islamabad, Pakistan",
      rating: 5,
      review: "I’m extremely pleased with my daughter’s Tajweed progress—she has learned all the rules, Alhamdulillah. The teacher not only ensures correct recitation but also nurtures a love for Islam through engaging lessons. We appreciate the regular updates and month-end progress reports, which give us clear insight into her learning. Highly recommended!"
    },
    {
      id: 3,
      name: "Anum, Mother of Zainab (Age 7)",
      location: "Islamabad, Pakistan",
      rating: 5,
      review: "Alhamdulillah, I’ve seen great improvement in my daughter’s recitation and her interest in the Quran since joining. The learning environment is positive, and the teaching style is gentle yet effective. The teacher is hardworking and dedicated — we’re very happy with her progress."
    },
    {
      id: 4,
      name: "Maha, Mother of Adn (Age 8)",
      location: "(Islamabad, Pakistan)",
      rating: 5,
      review: "My daughter started from scratch and completed 3 Paras in just a year and a half — a big achievement, especially with her now-fluent Arabic pronunciation. She also learned how to pray, which she practices at home. The peaceful learning environment, your soft and encouraging nature, and your creative teaching methods have made a real difference. I’m so glad I chose your academy!"
    },
    {
      id: 5,
      name: "Shagufta, Mother of Alveena (Age 7)",
      location: "(Islamabad, Pakistan)",
      rating: 5,
      review: "My daughter has made amazing progress since joining the Quran classes. She has developed a love for learning and looks forward to each session. The teacher is kind, patient, and explains everything in a way that's easy for young children to understand. I'm truly grateful for the positive impact these classes have had on her recitation and connection with the Quran."
    },
    {
      id: 6,
      name: "Sister Asma",
      location: "(London, United Kingdom)",
      rating: 5,
      review: "These classes have helped me regain my confidence in reading Arabic, Alhamdulillah. The teaching is clear, informative, and enjoyable. I’ve tried learning before but never felt this comfortable. I look forward to every class and truly feel it has benefited me. May Allah reward you and allow your Quran Academy to flourish."
    },
    {
      id: 7,
      name: "Saadia, Mother of Eshaal (Age 10)",
      location: "(Islamabad, Pakistan)",
      rating: 5,
      review: "My experience with Mam Huda has been wonderful. She is hardworking, dedicated, and truly cares about her students. My daughter loves her classes and feels very comfortable because of her friendly and cooperative nature. Alhamdulillah, we’re highly satisfied — highly recommended!"
    },
    {
      id: 8,
      name: "Polly, Mother of Isa (Age 9)",
      location: "(London, United Kingdom)",
      rating: 5,
      review: "Since my son started learning the Qur’an with Sister Huda, I have noticed remarkable progress in his recitation and understanding. He has gained confidence and clarity in reading the Qur’an. Sister Huda has an excellent teaching style that makes learning fun and simple to understand. She is patient, soft-spoken, and always encouraging, which has helped my son develop a genuine love for learning the Qur’an. I am truly grateful to have such a dedicated and well-mannered Quran teacher guiding my child on this journey."
    },
    {
      id: 8,
      name: "Shaida, Mother of Nisa (Age 11)",
      location: "(London, United Kingdom)",
      rating: 5,
      review: "My daughter has been studying Qur’an with Sister Huda, and the experience has been amazing. She feels very comfortable in her classes and enjoys every lesson. Sister Huda’s unique style of teaching has made Quran easy to understand and enjoyable for my daughter. The bond she has built with her teacher is healthy and encouraging, which motivates her to continue learning with happiness. I have found Sister Huda to be one of the best Quran teachers kind, caring, and always going above and beyond to ensure high-quality teaching."
    },

  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index) => {
    setCurrentReview(index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-32">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl mb-4" 
            style={{ fontFamily: 'Castoro Titling', color: '#005243' }}
          >
            Love from our clients around the world
          </h2>
        </div>

        {/* Review Container */}
        <div className="relative">
          {/* Elegant Card */}
          <div className="relative bg-white rounded-lg overflow-hidden bg-gray-100">
            
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 border border-gray-100"
              style={{ color: '#005243' }}
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>

            <button
              onClick={nextReview}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-4 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10 border border-gray-100"
              style={{ color: '#005243' }}
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>

            {/* Review Content */}
            <div className="px-12 md:px-16 py-8 text-center">
              {/* Stars */}
              <div className="flex justify-center mt-6 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={32}
                    className="mx-0.5"
                    fill={star <= reviews[currentReview].rating ? "#fbbf24" : "#d1d5db"}
                    color={star <= reviews[currentReview].rating ? "#fbbf24" : "#d1d5db"}
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote 
                className="text-sm md:text-lg text-gray-700 mb-8 leading-relaxed md:max-w-3xl mx-auto font-light"
                style={{ fontFamily: 'Inter' }}
              >
                {reviews[currentReview].review}
              </blockquote>

              {/* Divider */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-6"></div>

              {/* Reviewer Info */}
              <div className="text-center">
                <h4 
                  className="text-xl font-normal mb-0" 
                  style={{ fontFamily: 'Inter', color: '#005243' }}
                >
                  {reviews[currentReview].name}
                </h4>
                <p 
                  className="text-gray-500 text-base font-light" 
                  style={{ fontFamily: 'Inter' }}
                >
                  {reviews[currentReview].location}
                </p>
              </div>

              {/* Navigation Dots - Moved Inside */}
              <div className="flex justify-center space-x-3 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? 'opacity-100'
                        : 'opacity-50 hover:opacity-75 hover:scale-110'
                    }`}
                    style={{ 
                      backgroundColor: '#005243'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}