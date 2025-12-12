import React from 'react'

const Aadhar = () => {
  return (
    <div className='udyam-page'>
      <div>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Udyam Aadhaar / MSME Registration
          </h2>

          <p className="text-gray-700 mb-6 text-center">
            Udyam Aadhaar is a government-recognized certificate that provides 
            MSMEs with various benefits including business loans, subsidies, 
            and taxation advantages.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Required Documents:
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Applicant Aadhaar Card</li>
            <li>PAN Card of Individual/Business</li>
            <li>Business Details (Name, Type & Category)</li>
            <li>Bank Account Number & IFSC Code</li>
            <li>Email ID & Mobile Number linked with Aadhaar</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Benefits of Udyam Registration:
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Eligibility for Government Subsidies</li>
            <li>Easy Access to Business Loans</li>
            <li>ISO Certification Assistance</li>
            <li>Low-Interest Bank Loans</li>
            <li>Priority in Government Tenders</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Processing Time:
          </h3>
          <p className="text-gray-700">
            Certificate is usually issued within <strong>15 working days</strong>.
          </p>

          <div className="text-center mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              Apply Now
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Aadhar
