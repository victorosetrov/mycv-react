// components/LoadingSpinner.js
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const LoadingSpinner = () => {
  return (
    <div className="flex-center" style={{ height: '100vh' }}>
      <ClipLoader color="#e0b030" size={50} />
    </div>
  );
};

export default LoadingSpinner;
