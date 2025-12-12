// import React from "react";
// import { Link } from "react-router-dom";

// const Security = () => {
//   return (
//     <div className="bg-gray-50 py-12 px-6 md:px-20">
//       <div className="max-w-5xl mx-auto text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">
//           🛡 Professional Security Services
//         </h2>
//         <p className="text-gray-700 mb-8">
//           If you are looking for reliable and professional security services for your upcoming
//           requirements, we provide well-trained and disciplined security personnel tailored
//           to your needs. Our services are designed to ensure safety, vigilance, and peace of mind.
//         </p>

//         <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//           <h3 className="text-2xl font-semibold text-blue-700 mb-4">
//             Our Security Service Categories
//           </h3>
//           <ul className="text-left text-gray-700 space-y-3">
//             <li>
//               <span className="font-semibold">🏢 Commercial Security –</span> For office premises,
//               shops, and business establishments. Our guards are trained to manage visitor entries,
//               monitor CCTV, and handle emergencies efficiently.
//             </li>
//             <li>
//               <span className="font-semibold">🏠 Residential Security –</span> For housing complexes,
//               apartments, and individual houses. We ensure the safety of your family, property,
//               and residents through 24/7 monitoring and patrolling.
//             </li>
//             <li>
//               <span className="font-semibold">🎉 Event Security / Bouncer Services –</span> For
//               social functions, public gatherings, and VIP events. Our team maintains discipline,
//               manages crowds, and ensures the event runs smoothly.
//             </li>
//           </ul>
//         </div>

//         <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Why Choose Our Security Services?
//           </h3>
//           <ul className="text-gray-700 space-y-2">
//             <li>✅ Trained and verified security personnel</li>
//             <li>✅ 24x7 support and supervision</li>
//             <li>✅ Cost-effective and customizable solutions</li>
//             <li>✅ Professionalism and punctuality guaranteed</li>
//           </ul>
//         </div>

//         <div className="flex justify-center gap-4">
//           <Link
//             to="/about"
//             className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
//           >
//             Learn More
//           </Link>
//           <Link
//             to="/contact"
//             className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Security;
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Security = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uwli78y", // ✅ your EmailJS service ID
        "template_9e2h414", // ✅ your EmailJS template ID
        form.current,
        "KYYSSiriTKi0T5eEI" // ✅ your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20">
      {/* ---------- SECURITY SERVICE SECTION ---------- */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          🛡 Professional Security Services
        </h2>
        <p className="text-gray-700 mb-8">
          If you are looking for reliable and professional security services for your upcoming
          requirements, we provide well-trained and disciplined security personnel tailored
          to your needs. Our services are designed to ensure safety, vigilance, and peace of mind.
        </p>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Our Security Service Categories
          </h3>
          <ul className="text-left text-gray-700 space-y-3">
            <li>
              <span className="font-semibold">🏢 Commercial Security –</span> For office premises,
              shops, and business establishments. Our guards are trained to manage visitor entries,
              monitor CCTV, and handle emergencies efficiently.
            </li>
            <li>
              <span className="font-semibold">🏠 Residential Security –</span> For housing complexes,
              apartments, and individual houses. We ensure the safety of your family, property,
              and residents through 24/7 monitoring and patrolling.
            </li>
            <li>
              <span className="font-semibold">🎉 Event Security / Bouncer Services –</span> For
              social functions, public gatherings, and VIP events. Our team maintains discipline,
              manages crowds, and ensures the event runs smoothly.
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Why Choose Our Security Services?
          </h3>
          <ul className="text-gray-700 space-y-2">
            <li>✅ Trained and verified security personnel</li>
            <li>✅ 24x7 support and supervision</li>
            <li>✅ Cost-effective and customizable solutions</li>
            <li>✅ Professionalism and punctuality guaranteed</li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            to="/about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Learn More
          </Link>
          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* ---------- CONTACT FORM SECTION ---------- */}
      <div id="contact" className="bg-gray-100 py-10 px-4 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Contact Us for Security Services
        </h2>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Security;

