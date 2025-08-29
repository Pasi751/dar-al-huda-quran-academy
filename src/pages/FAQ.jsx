import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, BookOpen, Clock, Award, DollarSign, Phone } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "Enrollment & Eligibility",
      icon: <Users className="w-6 h-6" />,
      questions: [
        {
          question: "Who can enroll in your classes?",
          answer: (
            <div>
              <p className="mb-3">Our classes are designed for:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Children aged 4 and above</li>
                <li>Female adults and sisters of all ages</li>
                <li>Boys up to the age of 12</li>
              </ul>
              <p className="mt-3 text-sm">We aim to provide a comfortable and respectful learning environment for all students.</p>
            </div>
          )
        },
        {
          question: "How can I enroll?",
          answer: (
            <div>
              <p className="mb-3">Enrollment is simple:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Fill out the inquiry form on our website</li>
                <li>Schedule a trial class</li>
                <li>Confirm your enrollment after the trial session</li>
              </ul>
              <p className="mt-3 text-sm">Alternatively, you can contact us via WhatsApp or email for assistance.</p>
            </div>
          )
        }
      ]
    },
    {
      category: "Courses & Teaching",
      icon: <BookOpen className="w-6 h-6" />,
      questions: [
        {
          question: "What courses do you offer?",
          answer: (
            <div>
              <p className="mb-3">We offer a range of courses including:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Quran Recitation</strong></li>
                <li><strong>Tajweed</strong> (Pronunciation Rules)</li>
                <li><strong>Qaida</strong> (Basic Arabic Reading)</li>
                <li><strong>Salah</strong> (Prayer) Training</li>
                <li><strong>Duas</strong> (Supplications) Memorization</li>
              </ul>
              <p className="mt-3 text-sm">Each course is tailored to suit the student's age and proficiency level.</p>
            </div>
          )
        },
        {
          question: "How are the classes conducted?",
          answer: (
            <div>
              <p className="mb-3">Classes are available in two formats:</p>
              <div className="space-y-2 text-sm">
                <p><strong>Online:</strong> Via platforms like Zoom, offering one-on-one or small group sessions.</p>
                <p><strong>In-Person:</strong> At our home-based setup in Bahria Town Phase 8, Rawalpindi.</p>
              </div>
            </div>
          )
        },
        {
          question: "Are your teachers qualified?",
          answer: (
            <div>
              <p className="mb-3">Yes, our instructors are:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Certified in Quranic studies and Tajweed</li>
                <li>Experienced in teaching children and adults</li>
                <li>Fluent in Urdu and English</li>
                <li>They employ modern teaching methods to ensure effective learning</li>
              </ul>
            </div>
          )
        },
        {
          question: "Is there a trial class available?",
          answer: (
            <p className="text-sm">Absolutely! We offer a free trial class for new students to experience our teaching style and curriculum before committing.</p>
          )
        }
      ]
    },
    {
      category: "Schedule & Classes",
      icon: <Clock className="w-6 h-6" />,
      questions: [
        {
          question: "What are the class timings and durations?",
          answer: (
            <div>
              <p className="mb-3">We offer flexible scheduling to accommodate various needs:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Timings:</strong> Morning, Afternoon, and Evening slots</li>
                <li><strong>Durations:</strong> Sessions of 30 or 60 minutes, depending on the course and student preference</li>
              </ul>
            </div>
          )
        },
        {
          question: "What if I miss a class?",
          answer: (
            <div>
              <p className="mb-3">We understand that unforeseen circumstances occur. If you miss a class:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Notify us in advance, and we'll reschedule</li>
                <li>Make-up sessions can be arranged based on availability</li>
              </ul>
            </div>
          )
        },
        {
          question: "What materials or equipment do I need for online classes?",
          answer: (
            <div>
              <p className="mb-3">For online sessions, you'll need:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>A stable internet connection</li>
                <li>A device (computer, tablet, or smartphone)</li>
                <li>Zoom App installed</li>
                <li>A quiet environment for uninterrupted learning</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      category: "Certificates & Recognition",
      icon: <Award className="w-6 h-6" />,
      questions: [
        {
          question: "Do you offer certificates upon course completion?",
          answer: (
            <p className="text-sm">Yes, we provide certificates of completion for students who successfully finish their courses, recognizing their dedication and achievement.</p>
          )
        }
      ]
    },
    {
      category: "Fees & Discounts",
      icon: <DollarSign className="w-6 h-6" />,
      questions: [
        {
          question: "Do you offer any discounts?",
          answer: (
            <div>
              <p className="mb-3">Yes! We provide:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Sibling Discount:</strong> 10% off for the second child</li>
                <li><strong>Long-Term Commitment Discount:</strong> 5% off when paying for 3+ months upfront</li>
                <li><strong>Hifz Program Scholarships:</strong> Limited need-based aid for dedicated students</li>
              </ul>
            </div>
          )
        },
        {
          question: "Can I request a reduced fee if I'm facing financial hardship?",
          answer: (
            <div>
              <p className="mb-3">Absolutely. We believe Quran education should be accessible. Email us at info@daralhuda.com with:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>A brief explanation of your situation</li>
                <li>Your preferred course and schedule</li>
              </ul>
              <p className="mt-3 text-sm">We'll work together to find a feasible solution.</p>
            </div>
          )
        },
        {
          question: "How do fee negotiations work?",
          answer: (
            <div>
              <p className="mb-2 text-sm">Submit a request via email/WhatsApp.</p>
              <p className="mb-2 text-sm">We may adjust:</p>
              <ul className="list-disc list-inside space-y-1 text-sm mb-2">
                <li>Class frequency (e.g., 2/week instead of 3)</li>
                <li>Session length (e.g., 30 mins instead of 60)</li>
              </ul>
              <p className="text-sm">All agreements are confidential.</p>
            </div>
          )
        },
        {
          question: "Why don't you display all discounted prices on the website?",
          answer: (
            <p className="text-sm">To ensure fairness, personalized adjustments require direct communication. Published fees help us maintain quality teaching standards.</p>
          )
        }
      ]
    }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Check mandatory fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {

      const response = await fetch("https://formsubmit.co/ajax/daralhudaquranacademy@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(
          formData)
      })

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
        setErrors({});
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message.");
    }
  };


  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen font-inter font-light">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="FAQ Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-5xl">
              <h1 className="text-5xl md:text-7xl text-white font-castoro mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl font-inter font-thin text-white md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                Find answers to common questions about our Quran learning programs, enrollment process, and more.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <div className="space-y-8">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className="bg-customGreen text-white p-2">
                  <div className="flex items-center justify-center">
                    <div className="text-white mr-3">
                      {category.icon}
                    </div>
                    <h2 className="text-xl font-castoro text-center">{category.category}</h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, questionIndex) => {
                    const itemKey = `${categoryIndex}-${questionIndex}`;
                    return (
                      <div key={itemKey} className="border-b border-gray-100 last:border-b-0">
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                        >
                          <h3 className="text-base font-castoro text-customGreen pr-4">
                            {item.question}
                          </h3>
                          <div className="flex-shrink-0 text-customGreen">
                            {openItems[itemKey] ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </div>
                        </button>

                        {openItems[itemKey] && (
                          <div className="px-6 pb-4">
                            <div className="text-black font-inter leading-relaxed">
                              {item.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-customGreen py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <Phone className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-castoro text-white mb-6">Still Have Questions?</h2>
            <p className="text-white font-inter text-xl mb-8">
              Can't find the answer you're looking for? We're here to help!
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-castoro text-customGreen mb-4">Contact Us</h2>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block font-inter text-black mb-2">
                    First Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${errors.firstName ? 'border-red-500' : ''}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-inter text-black mb-2">
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${errors.lastName ? 'border-red-500' : ''}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block font-inter text-black mb-2">
                  Email Address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block font-inter text-black mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block font-inter text-black mb-2">
                  Subject<span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${errors.subject ? 'border-red-500' : ''}`}
                >
                  <option value="">Select a subject</option>
                  <option value="enrollment">Enrollment Inquiry</option>
                  <option value="courses">Course Information</option>
                  <option value="scheduling">Scheduling Questions</option>
                  <option value="fees">Fees & Discounts</option>
                  <option value="technical">Technical Support</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block font-inter text-black mb-2">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Please describe your question or inquiry in detail..."
                  className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-customGreen text-sm text-white px-8 py-2 rounded-tl-2xl rounded-br-2xl font-inter hover:bg-opacity-90 transition-colors duration-200 focus:ring-2 focus:ring-customGreen focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>



      </div>
      <Footer />
    </>
  );
};

export default FAQPage;