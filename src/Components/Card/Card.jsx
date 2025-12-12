// import React from "react";

// const cards = [
//   {
//     title: "Government Documents",
//     description:
//       "Apply for government-issued certificates like Caste, Domicile, Income, Birth, and Residence online — fast and securely.",
//     image: "Images/firstBanner.jpg",
//     link: "/Govdocument",
//   },
//   {
//     title: "Investment & Insurance Services",
//     description:
//       "Access trusted investment plans and insurance policies designed to secure your future and maximize financial growth.",
//     image: "Images/secondBanner.jpg",
//     link: "/Insurence",
//   },
//   {
//     title: "The Power Security Services",
//     description:
//       "We provide trained and verified security guards for residential, commercial, and industrial premises.",
//     image: "Images/thirdBanner.jpg",
//     link: "/Security",
//   },
//   {
//     title: "Trusted Loan Services",
//     description:
//       "We help you find the right loan for every need — from education to business expansion. Fast approval, minimal paperwork, and secure digital processing.",
//     image: "Images/fourthBanner.jpg",
//     link: "/Loans",
//   },
// ];

// const Card = () => {
//   return (
//     <div className="bg-gray-50 py-10 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Our Core Services
//       </h2>

//       <div className="flex flex-wrap justify-center gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
//           >
//             <a href={card.link}>
//               <img
//                 className="rounded-t-lg w-full h-48 object-cover"
//                 src={card.image}
//                 alt={card.title}
//               />
//             </a>
//             <div className="p-5">
//               <a href={card.link}>
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   {card.title}
//                 </h5>
//               </a>
//               <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
//                 {card.description}
//               </p>
//               <a
//                 href={card.link}
//                 className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-200"
//               >
//                 Read more
//                 <svg
//                   className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 14 10"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M1 5h12m0 0L9 1m4 4L9 9"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;
import React from "react";

const cards = [
  {
    title: "Government Documents",
    description:
      "Apply for government-issued certificates like Caste, Domicile, Income, Birth, and Residence online — fast and securely.",
    image: "Images/firstBanner.jpg",
    link: "/Govdocument",
  },
  {
    title: "Investment & Insurance Services",
    description:
      "Access trusted investment plans and insurance policies designed to secure your future and maximize financial growth.",
    image: "Images/secondBanner.jpg",
    link: "/Insurence",
  },
  {
    title: "The Power Security Services",
    description:
      "We provide trained and verified security guards for residential, commercial, and industrial premises.",
    image: "Images/thirdBanner.jpg",
    link: "/Security",
  },
  {
    title: "Trusted Loan Services",
    description:
      "We help you find the right loan for every need — from education to business expansion. Fast approval, minimal paperwork, and secure digital processing.",
    image: "Images/fourthBanner.jpg",
    link: "/Loans",
  },

 
  {
    title: "RTO Services",
    description:
      "Driving License, Vehicle Registration, Transfer, NOC, Fitness, and all RTO related services available with smooth processing.",
    image: "Images/RtoBanner.jpg",
    link: "/Rtoservices",
  },
];

const Card = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Core Services
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300"
          >
            <a href={card.link}>
              <img
                className="rounded-t-lg w-full h-48 object-cover"
                src={card.image}
                alt={card.title}
              />
            </a>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <a
                href={card.link}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-200"
              >
                Read more
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
