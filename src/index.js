import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css'; // Import the global CSS to apply default styles across the app
import App from './App'; // Import the main App component

// Render the App component into the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* The root App component */}
  </React.StrictMode>,
  document.getElementById('root') // The root div element in public/index.html
);
