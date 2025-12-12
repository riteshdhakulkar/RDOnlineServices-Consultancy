// import React from "react";
// import { Link } from "react-router-dom";

// const documents = [
//   {
//     title: "Caste Certificate",
//     description:
//       "Apply for your caste certificate required for government schemes, educational purposes, and reservation benefits.",
//     path: "/castcertificate",
//   },
//   {
//     title: "NCL Certificate",
//     description:
//       "Get your Non-Creamy Layer certificate to avail reservation benefits under OBC category.",
//     path: "/nclcertificate",
//   },
//   {
//     title: "Income Certificate",
//     description:
//       "Obtain income certificate to apply for scholarships, benefits, and subsidies offered by the government.",
//     path: "/income",
//   },
//   {
//     title: "Validity Certificate",
//     description:
//       "Verify and validate your caste certificate through official channels for legal authenticity.",
//     path: "/validity",
//   },
//   {
//     title: "Gumasta / Rajpatra",
//     description:
//       "Apply for business registration (Shop Act / Gumasta License) to start or run your business legally.",
//     path: "/gumastha",
//   },
//   {
//     title: "Domicile Certificate",
//     description:
//       "Get domicile certificate to prove your residence status for education, job, and legal documentation.",
//     path: "/domicile",
//   },
//   {
//     title: "PAN Card",
//     description:
//       "Apply for a new PAN card or update your details to ensure smooth financial and tax transactions.",
//     path: "/pancard",
//   },
//   {
//     title: "Online Forms",
//     description:
//       "Fill various government forms online quickly and easily with document assistance and guidance.",
//     path: "/onlineforms",
//   },
  
// ];

// const Govdocument = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-10 px-6">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
//         Government Document Services
//       </h2>
//       <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
//         Choose the certificate or service you wish to apply for and learn about the
//         required documents and process — all in one place.
//       </p>

//       <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {documents.map((doc, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
//           >
//             <div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {doc.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
//             </div>

//             <div className="flex justify-between mt-4">
//               <Link
//                 to={doc.path}
//                 className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
//               >
//                 Learn More
//               </Link>
//               <Link
//                 to="/contact"
//                 className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
//               >
//                 Contact
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Govdocument;
import React from "react";
import { Link } from "react-router-dom";

// 📌 ICONS IMPORT
import { FaIdCard, FaUsers, FaMoneyBillWave, FaStamp, FaStore, FaMapMarkerAlt, FaPassport, FaWpforms, FaBuilding } from "react-icons/fa";

const documents = [
  {
    title: "Caste Certificate",
    icon: <FaIdCard className="text-blue-600 text-3xl" />,
    description: "Apply for caste certificate for govt schemes, education & reservation benefits.",
    path: "/castcertificate",
  },
  {
    title: "NCL Certificate",
    icon: <FaUsers className="text-yellow-600 text-3xl" />,
    description: "Get Non-Creamy Layer certificate for OBC reservation benefits.",
    path: "/nclcertificate",
  },
  {
    title: "Income Certificate",
    icon: <FaMoneyBillWave className="text-green-600 text-3xl" />,
    description: "Required for scholarships, subsidy benefits & financial documentation.",
    path: "/income",
  },
  {
    title: "Validity Certificate",
    icon: <FaStamp className="text-purple-600 text-3xl" />,
    description: "Validation and legal verification of caste certificate.",
    path: "/validity",
  },
  {
    title: "Gumasta / Rajpatra",
    icon: <FaStore className="text-orange-600 text-3xl" />,
    description: "Shop Act / Gumasta license for legal business registration.",
    path: "/income",
  },
  {
    title: "Domicile Certificate",
    icon: <FaMapMarkerAlt className="text-red-600 text-3xl" />,
    description: "Proof of residence for education, job, and legal documentation.",
    path: "/domicile",
  },
  {
    title: "PAN Card",
    icon: <FaPassport className="text-teal-600 text-3xl" />,
    description: "New PAN card or details update for banking & tax transactions.",
    path: "/pancard",
  },
  {
    title: "Online Forms",
    icon: <FaWpforms className="text-indigo-600 text-3xl" />,
    description: "Fill government forms online with documentation support.",
    path: "/onlineforms",
  },

  // ⭐ NEW CARD
  {
    title: " Udyam Aadhaar",
    icon: <FaBuilding className="text-green-700 text-3xl" />,
    description: "Register MSME under Udyam .",
    path: "/aadhar",
  },
];

const Govdocument = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Government Document Services
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Choose the certificate you want to apply for — requirements, documents & process available in one click.
      </p>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white p-6 border shadow-md rounded-2xl 
             hover:shadow-2xl transform hover:-translate-y-2 hover:scale-[1.02] 
             transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="mb-3">{doc.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm mb-5">{doc.description}</p>

              <div className="flex gap-3">
                <Link
                  to={doc.path}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Govdocument;
