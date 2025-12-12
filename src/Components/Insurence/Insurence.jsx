import React from "react";

const Income = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        🩺🛡 Health & Life Insurance Services
      </h2>

      {/* LIFE INSURANCE SECTION */}
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          💙 1. Life Insurance Services
        </h3>
        <p className="text-gray-700 mb-4">
          <strong>Purpose:</strong> To provide financial security for your family
          in case of death, disability, or retirement.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Main Plans:
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
            <thead className="bg-blue-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Term Insurance</td>
                <td className="border px-4 py-2">Fixed-period life cover</td>
                <td className="border px-4 py-2">High cover at low premium</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Endowment Plan</td>
                <td className="border px-4 py-2">Life cover + savings</td>
                <td className="border px-4 py-2">Maturity amount + bonus</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Money Back Policy</td>
                <td className="border px-4 py-2">Periodic returns + life cover</td>
                <td className="border px-4 py-2">Regular payouts during policy</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Whole Life Policy</td>
                <td className="border px-4 py-2">Lifetime cover (till age 99–100)</td>
                <td className="border px-4 py-2">Long-term family security</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Child Plan</td>
                <td className="border px-4 py-2">For child’s education & future</td>
                <td className="border px-4 py-2">Lump sum for education/wedding</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Pension / Retirement Plan</td>
                <td className="border px-4 py-2">Income after retirement</td>
                <td className="border px-4 py-2">Monthly pension</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">ULIP (Investment Plan)</td>
                <td className="border px-4 py-2">Life cover + market investment</td>
                <td className="border px-4 py-2">Dual benefit: protection + growth</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">Add-ons:</h4>
          <ul className="list-disc list-inside text-gray-700">
            <li>Accidental Death Benefit</li>
            <li>Critical Illness Rider</li>
            <li>Premium Waiver Option</li>
          </ul>
        </div>
      </section>

      {/* HEALTH INSURANCE SECTION */}
      <section className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">
          ❤ 2. Health Insurance Services
        </h3>
        <p className="text-gray-700 mb-4">
          <strong>Purpose:</strong> To cover hospital and medical expenses for
          you and your family.
        </p>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Main Plans:
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
            <thead className="bg-green-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 border">Type</th>
                <th className="px-4 py-2 border">Description</th>
                <th className="px-4 py-2 border">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Individual Health Plan</td>
                <td className="border px-4 py-2">For a single person</td>
                <td className="border px-4 py-2">Covers hospitalization bills</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Family Floater Plan</td>
                <td className="border px-4 py-2">One policy for entire family</td>
                <td className="border px-4 py-2">Shared sum insured for all</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Senior Citizen Plan</td>
                <td className="border px-4 py-2">For people above 60 years</td>
                <td className="border px-4 py-2">Pre & post hospitalization cover</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Critical Illness Plan</td>
                <td className="border px-4 py-2">For diseases like cancer or heart issues</td>
                <td className="border px-4 py-2">Lump sum on diagnosis</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Maternity Plan</td>
                <td className="border px-4 py-2">For pregnancy & newborn expenses</td>
                <td className="border px-4 py-2">Covers delivery & baby care</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Top-up / Super Top-up Plan</td>
                <td className="border px-4 py-2">Extra cover beyond existing policy</td>
                <td className="border px-4 py-2">Increases total sum insured</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Cashless Mediclaim</td>
                <td className="border px-4 py-2">Treatment without paying upfront</td>
                <td className="border px-4 py-2">Available at network hospitals</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* COMBINED BENEFITS */}
      <section className="max-w-4xl mx-auto bg-blue-50 border border-blue-200 shadow-lg rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          🧾 3. Benefits of Taking Both (Life + Health Insurance)
        </h3>
        <ul className="list-none text-gray-700 text-left md:text-center space-y-2">
          <li>✅ Life cover for family’s future security</li>
          <li>✅ Medical expense coverage for any emergency</li>
          <li>✅ Tax benefits under Section 80C & 80D</li>
          <li>✅ Peace of mind for you and your loved ones</li>
          <li>✅ Helps in financial planning and risk management</li>
        </ul>
      </section>
      <div className="text-center mt-6">
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Income;
