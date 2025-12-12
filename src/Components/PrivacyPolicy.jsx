import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
        Effective Date: <strong>November 2025</strong>
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
          <p>
            We may collect your personal details such as name, contact information, identity
            details (Aadhaar, PAN, etc.), and payment-related information necessary for
            processing government document applications.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Data</h2>
          <p>
            Your information is used only to process your applications, communicate service
            updates, and enhance our platform experience. We never sell or share your data
            with third parties without consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Data Protection</h2>
          <p>
            We use secure servers, encryption, and access controls to protect your data from
            unauthorized access or misuse.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Cookies</h2>
          <p>
            Cookies help improve your browsing experience. You can disable them anytime in
            your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Contact Us</h2>
          <p>
            For privacy-related concerns or requests, contact us at:
          </p>
          <ul className="pl-5 list-disc">
            <li>Email: 
rdonlineservicesconsultancy@gmail.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
