import React, { useState } from 'react';
import { CreditCard, Globe, Clock, DollarSign } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FeePage = () => {
  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    gender: '',
    whatsapp: '',
    email: '',
    course: '',
    classType: '',
    preferredDays: [],
    frequency: '',
    timeAvailability: '',
    notes: ''
  });

  // Error state
  const [errors, setErrors] = useState({});
  const [showErrors, setShowErrors] = useState(false);

  const courseData = [
    {
      name: "Qaida Course",
      schedules: [
        { weekly: "2 classes/week", monthly: "8/month", gbp: "16", usd: "21" },
        { weekly: "3 classes/week", monthly: "12/month", gbp: "24", usd: "32" },
      ]
    },
    {
      name: "Recitation And Tajweed Course",
      schedules: [
        { weekly: "2 classes/week", monthly: "8/month", gbp: "20", usd: "30" },
        { weekly: "3 classes/week", monthly: "12/month", gbp: "30", usd: "45" },
      ]
    },
    {
      name: "Hifz Course",
      schedules: [
        { weekly: "2 classes/week", monthly: "8/month", gbp: "28", usd: "39" },
        { weekly: "3 classes/week", monthly: "12/month", gbp: "43", usd: "59" },
      ]
    },
    {
      name: "Salah & Duas Course",
      schedules: [
        { weekly: "2 classes/week", monthly: "8/month", gbp: "25", usd: "34" },
        { weekly: "3 classes/week", monthly: "12/month", gbp: "37", usd: "50" },
      ]
    }
  ];

  // Handle input changes
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

  // Handle checkbox changes for preferred days
  const handleDayChange = (day) => {
    setFormData(prev => ({
      ...prev,
      preferredDays: prev.preferredDays.includes(day)
        ? prev.preferredDays.filter(d => d !== day)
        : [...prev.preferredDays, day]
    }));
    
    // Clear error for preferred days when user makes a selection
    if (errors.preferredDays) {
      setErrors(prev => ({
        ...prev,
        preferredDays: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 1 || formData.age > 100) {
      newErrors.age = 'Please enter a valid age';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender selection is required';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'WhatsApp number is required';
    }

    if (!formData.course) {
      newErrors.course = 'Please select a preferred course';
    }

    if (!formData.classType) {
      newErrors.classType = 'Please select a class type';
    }

    if (formData.preferredDays.length === 0) {
      newErrors.preferredDays = 'Please select at least one preferred day';
    }

    if (!formData.frequency) {
      newErrors.frequency = 'Please select frequency of classes';
    }

    if (!formData.timeAvailability) {
      newErrors.timeAvailability = 'Please select your time availability';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setShowErrors(true);
      
      // Scroll to first error
      setTimeout(() => {
        const firstErrorField = document.querySelector('.border-red-500');
        if (firstErrorField) {
          firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      return;
    }

    // If validation passes
    setErrors({});
    setShowErrors(false);

    const response = await fetch("https://formsubmit.co/ajax/daralhudaquranacademy@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(
          formData)
      })
    
    // Here you would typically submit the form data
    console.log('Form submitted successfully:', formData);
    alert('Enrollment form submitted successfully! We will contact you soon.');
    
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      gender: '',
      whatsapp: '',
      email: '',
      course: '',
      classType: '',
      preferredDays: [],
      frequency: '',
      timeAvailability: '',
      notes: ''
    });
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen font-inter font-light">
        {/* Hero Section */}
        <section className="relative w-full h-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Quran Learning"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-6 max-w-5xl">
              <h1 className="text-5xl md:text-7xl text-white font-castoro mb-6">
                Course Fees & Payment Information
              </h1>
              <p className="text-xl font-inter font-thin text-white md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
                At Dar Al Huda Quran Academy, we strive to make Quran learning accessible to students internationally.
              </p>
            </div>
          </div>
        </section>

        {/* Key Information Cards */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Clock className="w-12 h-12 text-customGreen mx-auto mb-4" />
              <h3 className="font-castoro text-xl text-customGreen mb-2">Class Duration</h3>
              <p className="text-black font-inter font-base">Each class is approximately 30-45 minutes</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <Globe className="w-12 h-12 text-customGreen mx-auto mb-4" />
              <h3 className="font-castoro text-xl text-customGreen mb-2">International Fees</h3>
              <p className="text-black font-inter font-base">Fees displayed in USD and GBP</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <DollarSign className="w-12 h-12 text-customGreen mx-auto mb-4" />
              <h3 className="font-castoro text-xl text-customGreen mb-2">Other Currencies</h3>
              <p className="text-black font-inter font-base">We provide fees in other currencies upon request</p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <h2 className="text-3xl font-castoro text-customGreen text-center mb-12">Course Fee Structure</h2>

          <div className="space-y-12">
            {courseData.map((course, courseIndex) => (
              <div key={courseIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-customGreen text-white p-2">
                  <h3 className="text-xl font-castoro text-center">{course.name}</h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left font-castoro text-base text-customGreen">Schedule/week</th>
                        <th className="px-6 py-4 text-left font-castoro text-base text-customGreen">Classes/month</th>
                        <th className="px-6 py-4 text-center font-castoro text-base text-customGreen">GBP (£)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.schedules.map((schedule, scheduleIndex) => (
                        <tr key={scheduleIndex} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4 text-black text-sm">{schedule.weekly}</td>
                          <td className="px-6 py-4 text-black text-sm">{schedule.monthly}</td>
                          <td className="px-6 py-4 text-center text-black font-medium text-sm">£{schedule.gbp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-castoro text-customGreen text-center mb-12">Payment Methods</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {/* International Students */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-customGreen mr-3" />
                  <h3 className="text-2xl font-castoro text-customGreen">International Students</h3>
                </div>
                <p className="text-black mb-4 font-medium">International students can pay securely via:</p>
                <ul className="space-y-3 text-black text-sm">
                  <li className="flex items-center">
                    Payoneer (GBP)
                  </li>
                  <li className="flex items-center">
                    PayPal
                  </li>
                  <li className="flex items-center">
                    Bank Transfer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-castoro text-customGreen text-center mb-12">Important Notes</h2>

            <div className="bg-gray-50 rounded-2xl p-8 ">
              <div className="space-y-1 text-black text-sm">

                <div className="flex items-start">
                  <p>Fees are due on the <strong>1st of each month</strong>, payable in advance, for the upcoming month's services.</p>
                </div>

                <div className="flex items-start">
                  <p>The fee for each course is payable either in full at the time of enrollment or through 2–3 convenient installments.</p>
                </div>

                <div className="flex items-start">
                  <p>Please <strong>contact us directly</strong> for any questions regarding fees or payment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-customGreen py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl font-castoro text-white mb-6">Ready to Start Your Quranic Journey?</h2>
            <p className="text-white font-inter text-xl mb-8">Enroll now and embrace the light of the Qur'an</p>
          </div>
        </section>

        {/* Enrollment Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-castoro text-customGreen text-center mb-12">Enrollment Form</h2>

            {/* Error Summary */}
            {showErrors && Object.keys(errors).length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <p className="text-red-800 font-medium">Please fill in all required fields to submit the form.</p>
              </div>
            )}

            <form id="enrollment-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Student Details */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-castoro text-customGreen mb-6">Student Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-black mb-2">Full Name<span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block font-inter text-black font-sm font-base mb-2">Age<span className="text-red-500">*</span></label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${
                        errors.age ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter age"
                      min="1"
                      max="100"
                    />
                    {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
                  </div>
                  <div className="md:col-span-1">
                    <label className="block font-inter text-black font-base mb-2">Gender<span className="text-red-500">*</span></label>
                    <select 
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-inter text-sm ${
                        errors.gender ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="" className="text-sm">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-castoro text-customGreen mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-black font-base mb-2">WhatsApp Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal ${
                        errors.whatsapp ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter WhatsApp number"
                    />
                    {errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                  </div>
                  <div>
                    <label className="block font-inter text-black font-base mb-2">Email (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen text-sm placeholder:text-sm placeholder:font-normal"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
              </div>

              {/* Course Preferences */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-castoro text-customGreen mb-6">Course Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter text-black font-base mb-2">Preferred Course<span className="text-red-500">*</span></label>
                    <select 
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-inter text-sm ${
                        errors.course ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="" className="text-sm">Select Course</option>
                      <option value="qaida">Qaida</option>
                      <option value="recitation">Recitation & Tajweed</option>
                      <option value="hifz">Hifz</option>
                      <option value="salah">Salah</option>
                      <option value="duas">Duas</option>
                    </select>
                    {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                  </div>
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-castoro text-customGreen mb-6">Schedule Preferences</h3>

                <div className="space-y-6">
                  {/* Preferred Days */}
                  <div>
                    <label className="block font-inter text-black font-base mb-4">Preferred Days<span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <label key={day} className="flex items-center">
                          <input 
                            type="checkbox" 
                            checked={formData.preferredDays.includes(day)}
                            onChange={() => handleDayChange(day)}
                            className="mr-2 text-customGreen focus:ring-customGreen" 
                          />
                          <span className="text-black text-sm">{day}</span>
                        </label>
                      ))}
                    </div>
                    {errors.preferredDays && <p className="text-red-500 text-xs mt-1">{errors.preferredDays}</p>}
                  </div>

                  {/* Frequency and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-black font-base mb-2">Frequency of Classes<span className="text-red-500">*</span></label>
                      <select 
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-inter text-sm ${
                          errors.frequency ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="" className="text-sm">Select frequency</option>
                        <option value="2">2 Days a week</option>
                        <option value="3">3 Days a week</option>
                        <option value="4">4 Days a week</option>
                        <option value="5">5 Days a week</option>
                      </select>
                      {errors.frequency && <p className="text-red-500 text-xs mt-1">{errors.frequency}</p>}
                    </div>
                    <div>
                      <label className="block font-inter text-black font-base mb-2">Time Availability<span className="text-red-500">*</span></label>
                      <select 
                        name="timeAvailability"
                        value={formData.timeAvailability}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-inter text-sm ${
                          errors.timeAvailability ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="" className="text-sm">Select time</option>
                        <option value="morning">Morning</option>
                        <option value="afternoon">Afternoon</option>
                        <option value="evening">Evening</option>
                      </select>
                      {errors.timeAvailability && <p className="text-red-500 text-xs mt-1">{errors.timeAvailability}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-castoro text-customGreen mb-6">Additional Notes (Optional)</h3>
                <div>
                  <label className="block font-inter text-black font-base mb-2">Any learning goals or special requests?</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customGreen focus:border-customGreen font-inter text-sm"
                    placeholder="Please share any specific learning goals, preferences, or special requirements..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-customGreen text-white px-8 py-2 rounded-tl-2xl rounded-br-2xl  font-normal text-base hover:bg-green-700 transition-colors duration-300 transform hover:scale-105"
                >
                  Submit Enrollment
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

export default FeePage;