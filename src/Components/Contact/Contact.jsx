import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ttvpzt", // ✅ your service ID
        "template_ejj4utf", // ✅ your template ID
        form.current,
        "0mWGmLY9PJOskg3Ty" // ✅ your public key
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
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
          Contact Us
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

export default Contact;
