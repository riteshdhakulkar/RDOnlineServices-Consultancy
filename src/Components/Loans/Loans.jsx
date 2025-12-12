import React from "react";
import { Link } from "react-router-dom";

const loans = [
  {
    title: "Home Loan (Mortgage)",
    description:
      "For purchase or construction of a house or flat. The property usually acts as collateral.",
    provider: "Bank of Baroda",
  },
  {
    title: "Education Loan",
    description:
      "For higher studies in India or abroad. Repayment usually starts after course completion or moratorium period.",
    provider: "Bank of Baroda",
  },
  {
    title: "Vehicle Loan",
    description:
      "For purchase of a car, bike, or commercial vehicle. The vehicle often acts as collateral.",
    provider: "Creditt+",
  },
  {
    title: "Gold Loan",
    description:
      "You pledge gold jewellery or coins; the loan amount is a percentage of the gold's value. Ideal for short-term financial needs.",
    provider: "Creditt+",
  },
  {
    title: "Loan Against Property (LAP)",
    description:
      "You can pledge your residential or commercial property and raise a loan against its value.",
    provider: "Jaagruk Bharat",
  },
  {
    title: "Loan Against Fixed Deposits / Securities / Insurance",
    description:
      "If you have a fixed deposit, insurance policy with surrender value, or mutual funds/shares, you can get a loan against these without liquidating your assets.",
    provider: "The Economic Times",
  },
  {
    title: "Personal Loan",
    description:
      "A multi-purpose unsecured loan used for weddings, travel, medical emergencies, or home renovation.",
    provider: "Creditt+",
  },
  {
    title: "Business Loan / Working Capital Loan",
    description:
      "For entrepreneurs and businesses to expand operations or meet working capital requirements.",
    provider: "Jaagruk Bharat",
  },
];

const Loan = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Loan & Financial Services
      </h2>

      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loans.map((loan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {loan.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{loan.description}</p>
              <p className="text-blue-600 text-sm font-medium mb-4">
                Source: {loan.provider}
              </p>
            </div>

            <div className="flex justify-between mt-4">
              {/* <Link
                to="/loan-details"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
              >
                Learn More
              </Link> */}
              <Link
                to="/contact"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan;
