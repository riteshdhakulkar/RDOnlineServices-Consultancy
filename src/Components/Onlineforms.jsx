// import React from 'react'

// function Onlineforms() {
//   return (
//         <div className='onlineforms-page'>
//       <div>
//          <div className=" castcertificate-page bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
//         Online Form Application
//       </h2>
//       <p className="text-gray-700 mb-6 text-center">
//         A caste certificate serves as proof of belonging to a specific
//         community, which helps avail various government benefits and schemes.
//       </p>

//       <h3 className="text-xl font-semibold text-gray-800 mb-3">
//         Required Documents:
//       </h3>
//       <ul className="list-disc list-inside text-gray-700 space-y-2">
//         <li>Application Form (filled and signed)</li>
//         <li>Applicant’s Aadhaar Card</li>
//         <li>Proof of Residence of 15 Years (Electricity Bill / Ration Card / Rent Agreement / Voting Card)</li>
//         <li>Passport-size Photographs (2 copies)</li>
//         <li>Self-Declaration / Affidavit (in some cases)</li>
//         <li>Beneficiary Aadhar Card</li>
//         <li>Beneficiary Birth Certificate</li>
//         <li>Beneficiary / Father School TC / Bonafide Certificate</li>
//       </ul>

//       <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
//         Processing Time:
//       </h3>
//       <p className="text-gray-700">
//         Usually takes <strong>8–15 working days</strong> depending on your
//         local authority.
//       </p>

    

//       <div className="text-center mt-6">
//         <a
//           href="/contact"
//           className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
//         >
//           Apply Now
//         </a>
//       </div>
//     </div>
      
//     </div>
//     </div>
//   )
// }

// export default Onlineforms
import React from 'react'

function Onlineforms() {
  return (
    <div className='onlineforms-page'>
      <div>
        <div className="castcertificate-page bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Online Form Application
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Apply online for competitive exams & scholarship forms easily with proper assistance.
          </p>

          {/* ---------------- REQUIREMENTS LIST UPDATED HERE ---------------- */}
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Required Documents:
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">

            {/* SCHOLARSHIP FORM */}
            <li><strong>Scholarship Form Documentation</strong></li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Student Aadhaar Card</li>
              <li>Bonafide Certificate</li>
              <li>Previous Year Marksheet</li>
              <li>Bank Passbook (Student)</li>
              <li>Income Certificate </li>
              <li>Domicile Certificate</li>
            </ul>

            {/* JEE FORM */}
            <li className="mt-3"><strong>JEE Form Requirements</strong></li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Aadhaar Card</li>
              <li>10th/12th Marksheet</li>
              <li>Passport Size Photo</li>
              <li>Scanned Signature</li>
              <li>Caste / EWS Certificate </li>
            </ul>

            {/* NEET FORM */}
            <li className="mt-3"><strong>NEET Form Requirements</strong></li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Aadhaar Card</li>
              <li>10th/12th Passing Certificate + Marksheet</li>
              <li>Recent Passport Photo</li>
              
              <li>Caste / EWS / PwD Certificate </li>
            </ul>

            {/* MHT-CET FORM */}
            <li className="mt-3"><strong>MHT-CET Form Requirements</strong></li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Aadhaar Card</li>
              <li>10th / 12th Marksheet</li>
              <li>Candidate Photo + Signature</li>
              <li>Domicile Certificate </li>
            </ul>

            {/* OTHER EXAM FORMS */}
            <li className="mt-3"><strong>Other Government Exam Forms (SSC / Railway / Police / Banking)</strong></li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>Aadhaar Card</li>
              <li>Educational Certificates</li>
              <li>Photo & Signature Scan</li>
              <li>Caste / Income Certificate </li>
              <li>Sports / NCC Certificate (optional benefits)</li>
            </ul>

          </ul>
          {/* --------------------------------------------------------------- */}

          <div className="text-center mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onlineforms
