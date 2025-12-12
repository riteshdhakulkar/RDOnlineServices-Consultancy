import React from "react";

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>

      <p className="text-lg mb-6 text-center">
        Welcome to <span className="font-semibold">RD Online Services & Consultancy</span> — your trusted digital partner for fast and secure government document services.
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
          <p>
            We are a professional online consultancy service dedicated to helping citizens
            apply for essential <strong>government documents</strong> easily and accurately.
            Our goal is to make government services accessible, transparent, and
            stress-free for everyone.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Caste, Domicile & Income Certificates</li>
            <li>PAN and Aadhaar-related updates</li>
            <li>Birth, Death & Marriage Certificates</li>
            <li>Various government document assistance</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            To simplify the documentation process by providing accurate guidance, secure
            handling of data, and a smooth online experience for every user.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>✅ Transparent and affordable services</li>
            <li>✅ 100% data confidentiality</li>
            <li>✅ Quick processing and support</li>
            <li>✅ User-friendly online experience</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
