// components/EmailSubscription.jsx
import React, { useState } from 'react';
import axios from 'axios';

const EmailSubscription = ({ isDarkMode }) => {
  const [email, setEmail] = useState(''); // State to hold email input value
  const [emailError, setEmailError] = useState(''); // State to hold email errors
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // Track email submission

  // Function to validate and send email
  const handleSubmit = async () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Clear error if email is valid
    setEmailError('');

    try {
      const response = await axios.post('https://mywebsite-server-72f4d98c3636.herokuapp.com/api/subscribe', { email });
      console.log(response.data); 
      setIsEmailSubmitted(true);
    } catch (error) {
      setEmailError('There was an error submitting the email.');
    }
  };

  return (
    <div className="form-section">
      {isEmailSubmitted ? (
        <div className={`rounded-md p-4 shadow-md text-center ${isDarkMode ? 'bg-yellow-400 text-white' : 'bg-green-500 text-white'}`}>
          You're already on the list! We'll be in touch soon.
        </div>
      ) : (
        <>
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
            className={`rounded-md font-bold shadow-md mt-2 p-3 
                ${isDarkMode ? 'bg-yellow-500 text-black hover:bg-yellow-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            onClick={handleSubmit}
            >
            Subscribe
        </button>


        </>
      )}
    </div>
  );
};

export default EmailSubscription;
