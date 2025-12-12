import React from 'react'

const Gumastha = () => {
  return (
        <div className='gumastha-page'>
      <div className='income-page'>
         <div className=" castcertificate-page bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Gumastha / Rajpatra  Certificate Application
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        A caste certificate serves as proof of belonging to a specific
        community, which helps avail various government benefits and schemes.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Required Documents:
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Application Form (filled and signed)</li>
        <li>Applicant’s Aadhaar Card</li>
        <li>Proof of Residence of 15 Years (Electricity Bill / Ration Card / Rent Agreement / Voting Card)</li>
        <li>Passport-size Photographs (2 copies)</li>
        <li>Self-Declaration / Affidavit (in some cases)</li>
        <li>Beneficiary Aadhar Card</li>
        <li>Beneficiary Birth Certificate</li>
        <li>Beneficiary / Father School TC / Bonafide Certificate</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        Processing Time:
      </h3>
      <p className="text-gray-700">
        Usually takes <strong>15 working days</strong> depending on your
        local authority.
      </p>

     

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

export default Gumastha
