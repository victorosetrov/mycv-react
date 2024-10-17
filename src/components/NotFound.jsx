import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 px-6 pt-4 pb-8 lg:py-10 min-h-screen text-center">
      <h1 className="heading-style text-yellow-400">
        Oops, you are very lucky! 🎉
      </h1>
      <p className="text-lg leading-relaxed">
        It looks like you've stumbled upon a page that doesn't exist. But don't worry, luck is on your side!
      </p>
      <p className="text-md leading-relaxed">
        Quickly click the button below to return to the safety of the main page before the internet monsters get you!
      </p>
      <Link to="/">
        <button
          className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-md shadow-md hover:bg-yellow-500 mt-4 transition duration-300"
        >
          Back to Main Page
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
