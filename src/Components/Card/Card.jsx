import React from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Government Documents",
    description:
      "Apply for government-issued certificates like Caste, Domicile, Income, Birth, and Residence online — fast and securely.",
    image: "Images/firstBanner.jpg",
    link: "/Govdocument",
    buttonText: "Read more",
  },
  {
    title: "Investment & Insurance Services",
    description:
      "Access trusted investment plans and insurance policies designed to secure your future and maximize financial growth.",
    image: "Images/secondBanner.jpg",
    link: "/Insurence",
    buttonText: "Read more",
  },
  {
    title: "The Power Security Services",
    description:
      "We provide trained and verified security guards for residential, commercial, and industrial premises.",
    image: "Images/thirdBanner.jpg",
    link: "/Security",
    buttonText: "Read more",
  },
  {
    title: "Trusted Loan Services",
    description:
      "We help you find the right loan for every need — from education to business expansion. Fast approval, minimal paperwork, and secure digital processing.",
    image: "Images/fourthBanner.jpg",
    link: "/Loans",
    buttonText: "Read more",
  },
  {
    title: "RTO Services",
    description:
      "Driving License, Vehicle Registration, Transfer, NOC, Fitness, and all RTO related services available with smooth processing.",
    image: "Images/RtoBanner.jpg",
    link: "/Rtoservices",
    buttonText: "Read more",
  },
  {
    title: "Health Insurance Assessment",
    description:
      "Evaluate your family health coverage, calculate recommended sum insured, and generate an instant personalized needs report.",
    image: "Images/healthBanner.jpg",
    link: "/insurance-assessment",
    buttonText: "Explore",
    badge: "Interactive Assessment",
    isFeatured: true,
  },
];

const Card = () => {
  const handleCardClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Our Core Services
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Comprehensive consultancy, documentation, loan facilitation, and health insurance advisory services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`max-w-sm w-full bg-white border rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                card.isFeatured
                  ? "border-blue-300 ring-2 ring-blue-500/20"
                  : "border-gray-200"
              }`}
            >
              {card.badge && (
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                  {card.badge}
                </div>
              )}

              <div>
                <Link to={card.link} onClick={handleCardClick} className="block overflow-hidden">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    src={card.image}
                    alt={card.title}
                  />
                </Link>
                <div className="p-6">
                  <Link to={card.link} onClick={handleCardClick}>
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:text-blue-700 transition">
                      {card.title}
                    </h5>
                  </Link>
                  <p className="mb-4 font-normal text-gray-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <Link
                  to={card.link}
                  onClick={handleCardClick}
                  className={`inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white rounded-lg transition duration-200 shadow-sm ${
                    card.buttonText === "Explore"
                      ? "bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 shadow-blue-500/20"
                      : "bg-blue-700 hover:bg-blue-800"
                  }`}
                >
                  {card.buttonText || "Read more"}
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
