import React from 'react'

const Income = () => {
  return (
    <div className='income-page'>
         <div className=" bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        INCOME CERTIFICATE APPLICATION 
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
        <li>Proof of Residence (Electricity Bill / Ration Card / Rent Agreement)</li>
        <li>Passport-size Photographs (2 copies)</li>
        <li>Self-Declaration / Affidavit (in some cases)</li>
        <li>For Government Servents Form 16</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
        Processing Time:
      </h3>
      <p className="text-gray-700">
        Usually takes <strong>2–3 working days</strong> depending on your
        local authority.
      </p>

    
     

      <div className="text-center mt-6">
        <a
          href="/conatct"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Apply Now
        </a>
      </div>
    </div>
      
    </div>
  )
}

export default Income
