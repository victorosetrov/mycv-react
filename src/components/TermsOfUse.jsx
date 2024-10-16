import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 px-6 pt-4 pb-8 lg:py-10 min-h-screen text-center">
      <h1 className="heading-style text-yellow-400">
        Terms of Use for Viktor Osetrov
      </h1>
      <p className="text-md leading-relaxed text-white">
        <strong>Effective Date:</strong> October 17, 2024
      </p>
      <p className="text-lg leading-relaxed text-white">
        Welcome to Viktor Osetrov (<a href="https://viktorosetrov.com" className="text-yellow-400">https://viktorosetrov.com</a>). By using our website and services, you agree to comply with the following terms.
      </p>

      <h2 className="text-yellow-400 text-xl">1. Overview</h2>
      <p className="text-md leading-relaxed text-white">
        Viktor Osetrov provides IT services and software to its users. By accessing the website, you agree to abide by these terms, which govern the use of the site and services.
      </p>

      <h2 className="text-yellow-400 text-xl">2. Accounts</h2>
      <p className="text-md leading-relaxed text-white">
        To access certain services, you may need to create an account by providing accurate and complete information. By subscribing or signing up, you agree to pay any applicable fees and charges.
      </p>

      <h2 className="text-yellow-400 text-xl">3. Free Trials & Subscriptions</h2>
      <p className="text-md leading-relaxed text-white">
        New users may be eligible for free trials. After the trial period ends, a subscription is required to continue using the services. If no subscription is activated after the free trial, any collected data will be deleted.
      </p>

      <h2 className="text-yellow-400 text-xl">4. Data Collection</h2>
      <p className="text-md leading-relaxed text-white">
        We collect non-personal data such as cookies and IP addresses to improve website functionality and enhance the user experience. Please refer to our <Link to="/privacy-policy" className="text-yellow-400">Privacy Policy</Link> for more details.
      </p>

      <h2 className="text-yellow-400 text-xl">5. Cookies, Data Usage, and GDPR Compliance</h2>
      <p className="text-md leading-relaxed text-white">
        We use cookies to enhance your experience and for analytics purposes. By using this website, you agree to our use of cookies as described in our Privacy Policy.
      </p>

      <h3 className="text-yellow-400 text-lg">GDPR Compliance</h3>
      <p className="text-md leading-relaxed text-white">
        Viktor Osetrov is fully compliant with GDPR regulations. As a user of our website, you are responsible for obtaining explicit consent from your visitors when required and providing necessary information on data collection. We process data based on your instructions and ensure the security of any collected data.
      </p>

      <h2 className="text-yellow-400 text-xl">6. Updates to Terms</h2>
      <p className="text-md leading-relaxed text-white">
        We may update these terms from time to time. Any changes will be posted on this page, and you will be notified via email if there are significant changes.
      </p>

      <h2 className="text-yellow-400 text-xl">7. Governing Law</h2>
      <p className="text-md leading-relaxed text-white">
        These Terms of Use are governed by the laws of the Republic of Ireland and comply with applicable European Union regulations.
      </p>

      <h2 className="text-yellow-400 text-xl">8. Contact</h2>
      <p className="text-md leading-relaxed text-white">
        For any questions or concerns about these terms, please contact us at <a href="mailto:hello@viktorosetrov.com" className="text-yellow-400">hello@viktorosetrov.com</a>.
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

export default TermsOfUse;
