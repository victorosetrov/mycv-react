import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for making API calls
import DonutChartSection from './DonutChartSection';

const chartData = [
  { label: "Intellync (AB Agri) - Senior Support Engineer", value: 6, color: "#9370db" },
  { label: "Zendesk - Technical Support Engineer", value: 31, color: "#f76c6c" },
  { label: "Accenture - Technical Support Analyst", value: 20, color: "#1bc98e" },
  { label: "Hewlett Packard - IT Roll-up/out Engineer", value: 2, color: "#5bc0de" },
  { label: "RealSpeaker LTD - IT Manager and web-developer", value: 32, color: "#f0ad4e" },
  { label: "RealSpeaker Lab - IT Manager and software-developer", value: 55, color: "#d9534f" },
];

const MainIntro = ({ isDarkMode }) => {
  const [email, setEmail] = useState(''); // State to hold email input value
  const [emailError, setEmailError] = useState(''); // State to hold email errors
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // Track email submission

  // Function to validate and send email
  const handleSubmit = async () => {
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    // Clear error if email is valid
    setEmailError('');

    // Send the email to the backend
    try {
      const response = await axios.post('https://mywebsite-server-72f4d98c3636.herokuapp.com/api/subscribe', { email });
      console.log(response.data); // Log the server response
      setIsEmailSubmitted(true); // Update state if email is successfully submitted
    } catch (error) {
      setEmailError('There was an error submitting the email.');
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-8 px-6 pt-4 pb-8 lg:py-10 min-h-screen">
      {/* Left Side */}
      <div className="flex flex-col gap-6 lg:gap-14 lg:w-1/2 min-w-[300px]">
        {/* Introduction Section */}
        <div className="flex flex-col gap-4 items-center text-center lg:text-left lg:items-start">
          <h1 className="heading-style">
            Hey. It's Viktor 👋
          </h1>
          <h1 className="text-lg leading-relaxed">
            I am a Senior Engineer with 13 years of IT expertise across startups and corporations.
          </h1>
          <p className="text-md leading-relaxed">
            Experienced with RealSpeaker, Google, Zendesk, Intellync.
          </p>
        </div>

        {/* Show either Email Input or Success Banner */}
        {isEmailSubmitted ? (
          <div className={`rounded-md p-4 shadow-md text-center ${isDarkMode ? 'bg-yellow-400 text-white' : 'bg-green-500 text-white'}`}>
            You're already on the list! We'll be in touch soon.
          </div>
        ) : (
          // Email input, button, and privacy policy text
          <div className="form-section">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: isDarkMode ? '#000' : '#000' }}
            />
            {emailError && <p className="text-red-500 mt-2">{emailError}</p>}

            <button
              className="bg-yellow-700 text-white rounded-md font-bold shadow-md hover:bg-yellow-800 mt-2"
              onClick={handleSubmit}
            >
              Subscribe
            </button>

          </div>
        )}
      </div>

      {/* Donut Chart Section */}
      <div className="lg:w-1/3 flex justify-center lg:justify-start min-w-[300px] donut-chart-wrapper">
        <DonutChartSection chartData={chartData} />
      </div>
    </section>
  );
};

export default MainIntro;
