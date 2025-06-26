'use client'
import React from "react";
import Heading from "../Common/Heading";

const PricingSection = () => {
  // Updated pricing data with trial duration
  const pricingData = [
    {
      plan: "Free Trial",
      price: "$0",
      noCreditCard: "No credit card required",
      trialDuration: "14 days",
      features: [
        "10 GB Sharko hosting projects",
        "50 GB download custom fonts",
        "Basic backup & support",
        "Limited system monitoring",
        "Basic security management",
        "Local switches & hosted projects"
      ],
      buttonText: "Start Free Trial",
      isPopular: false,
      buttonClass: "bg-white text-black border-2 font-medium"
    },
    {
      plan: "Freemium",
      price: "$0",
      noCreditCard: "No credit card required",
      trialDuration: null,
      features: [
        "25 GB Sharko hosting projects",
        "100 GB download custom fonts",
        "Standard backup & support",
        "24/7 system monitoring",
        "Standard security management",
        "Global switches & hosted projects"
      ],
      buttonText: "Get Freemium",
      isPopular: true,
      buttonClass: "bg-white text-black font-medium"
    },
    {
      plan: "Paid",
      price: "$99",
      noCreditCard: "30-day money-back guarantee",
      trialDuration: "30 days",
      features: [
        "Unlimited Sharko hosting projects",
        "Unlimited download custom fonts",
        "Premium backup & support",
        "24/7 advanced monitoring",
        "Advanced security management",
        "Global switches & hosted projects"
      ],
      buttonText: "Purchase Now",
      isPopular: false,
      buttonClass: "bg-white text-black font-medium border-2"
    }
  ];

  return (
    <div id="pricing" className="bg-[#F3F8FE] px-3 md:px-12 py-8 w-full">
      <Heading
        fontSize="font-semibold"
        textSize="text-2xl md:text-4xl"
        className="mb-4"
        text="PRICING PLANS"
      />

      {/* Free Trial Highlight Section */}
      <div className="max-w-5xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-2xl font-semibold text-[#075CD6] mb-3">
            Try Our Tools for Free!
          </h3>
          <p className="text-gray-600 mb-4">
            Explore our powerful tools with a free trial. No credit card required!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {pricingData
              .filter((plan) => plan.trialDuration)
              .map((plan, index) => (
                <div
                  key={index}
                  className="bg-[#E6F0FA] rounded-md px-4 py-2 text-sm md:text-base"
                >
                  <span className="font-medium">{plan.plan}</span>: {plan.trialDuration} Free Trial
                </div>
              ))}
          </div>
          <button
            className="mt-6 bg-[#075CD6] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            onClick={() => document.getElementById("pricing-plans")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Plans
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div id="pricing-plans" className="flex justify-center">
        <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm border border-gray-200 ${
                plan.isPopular ? "bg-[#075CD6] text-white" : "bg-white text-black"
              } relative`}
            >
              {plan.isPopular && (
                <span className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded-bl rounded-tr">
                  Most Popular
                </span>
              )}
              <h3 className="text-center text-xl font-semibold mb-2">{plan.plan}</h3>
              <div className="flex justify-center items-center gap-1">
                <p className="text-4xl text-center font-bold mb-2">{plan.price}</p>
                {plan.price !== "$0" && <span className="font-thin">/month</span>}
              </div>
              <p
                className={`text-sm text-center mb-4 ${
                  plan.isPopular ? "text-white" : "text-gray-500"
                }`}
              >
                {plan.trialDuration
                  ? `${plan.trialDuration} Free Trial`
                  : plan.noCreditCard}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start mb-2">
                    <span className="text-2xl mr-2">★</span>
                    <span className={`${idx >= 3 ? "text-gray-400" : ""}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded ${plan.buttonClass} hover:bg-[#075CD6] hover:text-white transition-colors duration-200`}
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