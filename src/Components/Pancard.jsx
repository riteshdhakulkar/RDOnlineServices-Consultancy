import React from 'react'

const Pancard = () => {
  return (
    <div className='pancard-page'>
      <div>
         <div className=" castcertificate-page bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        PAN Card Application
      </h2>
      <p className="text-gray-700 mb-6 text-center">
        A caste certificate serves as proof of belonging to a specific
        community, which helps avail various government benefits and schemes.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Required Documents:
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Applicant’s Aadhaar Card</li>
        <li>Passport-size Photographs (2 copies)</li>
        <li>Self-Declaration / Affidavit for correction if any (in some cases)</li>
        <li>For Correction & More Details Contact on such Number</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        Processing Time:
      </h3>
      <p className="text-gray-700">
        Usually takes <strong>7 working days</strong> depending on your
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

export default Pancard
