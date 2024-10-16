import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 px-6 pt-4 pb-8 lg:py-10 min-h-screen text-center">
      <h1 className="heading-style text-yellow-400">
        Privacy Policy for Viktor Osetrov
      </h1>
      <p className="text-md leading-relaxed text-white">
        <strong>Effective Date:</strong> October 17, 2024
      </p>
      <p className="text-lg leading-relaxed text-white">
        Viktor Osetrov (<a href="https://viktorosetrov.com" className="text-yellow-400">https://viktorosetrov.com</a>) is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information in compliance with Irish data protection regulations, including the General Data Protection Regulation (GDPR).
      </p>

      <h2 className="text-yellow-400 text-xl">1. Information We Collect</h2>
      <p className="text-md leading-relaxed text-white">
        <strong>Personal Data:</strong> We collect personal information such as email addresses when you sign up for newsletters, waitlists, or other services. This information is used for account management, communication, and service delivery.
      </p>
      <p className="text-md leading-relaxed text-white">
        <strong>Non-Personal Data:</strong> We collect cookies, IP addresses, and other non-personal data through tracking technologies to improve website functionality and provide analytics.
      </p>

      <h2 className="text-yellow-400 text-xl">2. Use of Information</h2>
      <p className="text-md leading-relaxed text-white">
        <strong>Personal Data:</strong> Your email and any other provided personal information will be used for managing your account, sending service-related communications, and improving your experience on our platform.
      </p>
      <p className="text-md leading-relaxed text-white">
        <strong>Non-Personal Data:</strong> Cookies and IP addresses are used for website analytics, traffic monitoring, and user behavior tracking. This helps us improve the site’s functionality and enhance user experience.
      </p>

      <h2 className="text-yellow-400 text-xl">3. Sharing of Data</h2>
      <p className="text-md leading-relaxed text-white">
        We do not sell, trade, or share your personal information with third parties, except as necessary for service delivery (e.g., email services, analytics providers) or when required by law. We ensure that all third parties comply with GDPR and maintain appropriate safeguards.
      </p>

      <h2 className="text-yellow-400 text-xl">4. Cookies</h2>
      <p className="text-md leading-relaxed text-white">
        We use cookies to collect non-personal data such as user interactions, traffic patterns, and preferences. These cookies help us to understand how users interact with the site and improve its functionality. As per GDPR, you are responsible for obtaining consent from users before collecting cookies. You may manage cookie settings in your browser, but this may affect access to some features of our site.
      </p>

      <h2 className="text-yellow-400 text-xl">5. Security</h2>
      <p className="text-md leading-relaxed text-white">
        We take reasonable measures to protect personal data, including encryption, access control, and regular security assessments. While we strive to secure your data, please note that no internet transmission is 100% secure.
      </p>

      <h2 className="text-yellow-400 text-xl">6. Your Rights</h2>
      <p className="text-md leading-relaxed text-white">
        Under GDPR, you have the right to:
        <ul className="list-disc text-white text-left ml-6">
          <li>Access your personal data.</li>
          <li>Request correction or deletion of your personal data.</li>
          <li>Object to or restrict the processing of your personal data.</li>
          <li>Request data portability in a structured, commonly used format.</li>
        </ul>
      </p>
      <p className="text-md leading-relaxed text-white">
        To exercise these rights, please contact us at <a href="mailto:hi@viktorosetrov.com" className="text-yellow-400">hello@viktorosetrov.com</a>.
      </p>

      <h2 className="text-yellow-400 text-xl">7. Data Retention</h2>
      <p className="text-md leading-relaxed text-white">
        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Non-subscribers' personal data (e.g., emails) will be deleted upon request or when it is no longer needed for service delivery.
      </p>

      <h2 className="text-yellow-400 text-xl">8. Updates to Privacy Policy</h2>
      <p className="text-md leading-relaxed text-white">
        We may periodically update this policy to reflect legal or service changes. Any updates will be posted on this page, and you will be notified via email if significant changes occur.
      </p>

      <h2 className="text-yellow-400 text-xl">9. Governing Law</h2>
      <p className="text-md leading-relaxed text-white">
        This Privacy Policy is governed by the laws of the Republic of Ireland and complies with applicable European Union regulations, including the GDPR.
      </p>

      <h2 className="text-yellow-400 text-xl">10. Contact Information</h2>
      <p className="text-md leading-relaxed text-white">
        For any questions or concerns about this policy, please contact us at <a href="mailto:hello@viktorosetrov.com" className="text-yellow-400">hello@viktorosetrov.com</a>.
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

export default PrivacyPolicy;
