
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        {/* Column 1 - Brand Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            RD Online Services & Consultancy
          </h2>
          <p className="text-gray-400 text-sm">
            Your trusted platform for applying government documents such as Caste, Domicile,
            Income Certificates, and more — quick, simple, and reliable.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍 <span className="text-gray-400">Nagpur, Maharashtra, India</span>
            </li>
            <li>
              📧{" "}
              <a
                href="rohitdhakulkar29@gmail.com"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                
rdonlineservicesconsultancy@gmail.com
              </a>
            </li>
            <li>📞 +91-9823058351</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} RD Online Services & Consultancy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
