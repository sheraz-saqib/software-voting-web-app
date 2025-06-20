import React from "react";
import Heading from "../Common/Heading";

const PricingSection = () => {
  // Pricing data
  const pricingData = [
    {
      plan: "Basic Plan",
      price: "$0",
      noCreditCard: "No credit card required",
      features: [
        "Free 15 GB Sharko hosting projects",
        "80 GB download custome fonts",
        "Secure finance backup & support",
        "24/7 system monitoring facility",
        "Security management support",
        "Global switches & hosted projects"
      ],
      buttonText: "Free",
      isPopular: false,
      buttonClass: "bg-white text-black border-2 font-medium"
    },
    {
      plan: "Popular Plan",
      price: "$199",
      noCreditCard: "No credit card required",
      features: [
        "Free 300 GB Sharko hosting projects",
        "Unlimited download custome fonts",
        "Secure finance backup & support",
        "24/7 system monitoring facility",
        "Security management support",
        "Global switches & hosted projects"
      ],
      buttonText: "Purchase Now",
      isPopular: true,
      buttonClass: "bg-white text-black font-medium"
    },
    {
      plan: "Business Plan",
      price: "$49",
      noCreditCard: "No credit card required",
      features: [
        "Free 25 GB Sharko hosting projects",
        "100 GB download custome fonts",
        "Secure finance backup & support",
        "24/7 system monitoring facility",
        "Security management support",
        "Global switches & hosted projects"
      ],
      buttonText: "Purchase Now",
      isPopular: false,
      buttonClass: "bg-white text-black font-medium border-2"
    }
  ];

  return (
    <div className="bg-[#F3F8FE] px-3 md:px-12 py-8 w-full">
      <Heading
        fontSize="font-semibold"
        textSize="text-2xl md:text-4xl"
        className="mb-4"
        text="PRICING"
      />
      <div className="flex justify-center">
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm border border-gray-200 ${
                plan.isPopular ? "bg-[#075CD6] text-white" : "bg-white text-black"
              }`}
            >
              <h3 className="text-center text-xl font-semibold mb-2">{plan.plan}</h3>
              <div className="flex justify-center items-center gap-1">
                <p className="text-4xl text-center font-bold mb-2">{plan.price}</p>
                <span className="font-thin">/month</span>
              </div>
              <p
                className={`text-sm text-center mb-4 ${
                  plan.isPopular ? "text-white" : "text-gray-500"
                }`}
              >
                {plan.noCreditCard}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <span className="text-2xl mr-2">★</span>
                    <span
                      className={`${idx >= 3 ? "text-gray-400" : ""}`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;