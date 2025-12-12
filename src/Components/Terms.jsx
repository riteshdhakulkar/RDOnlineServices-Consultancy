import React from "react";

const Terms = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Terms & Conditions</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            By using <strong>RD Online Services & Consultancy</strong>, you agree to abide
            by these Terms and Conditions. Please read them carefully before using our
            website or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Service Nature</h2>
          <p>
            We are an independent online consultancy and not a government department. We
            provide form-filling assistance, document support, and submission guidance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide accurate and complete details</li>
            <li>Keep your credentials secure</li>
            <li>Review your application before submission</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Payments & Refunds</h2>
          <p>
            Payments made are non-refundable once the application process begins, except in
            case of technical errors on our side.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            We are not responsible for government portal delays or rejections caused by
            incorrect user data. However, we ensure proper guidance and accurate submission
            assistance.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">6. Contact</h2>
          <ul className="pl-5 list-disc">
            <li>Email: 
rdonlineservicesconsultancy@gmail.com</li>
            <li>Phone: +91-9823058351</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Terms;
