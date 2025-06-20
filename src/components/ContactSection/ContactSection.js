import React from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";

const ContactSection = () => {
  const contactOptions = [
    {
      icon: "/assets/images/contact3.png",
      title: "Email us",
      description:
        "Email us for general queries, including marketing and partnership opportunities.",
      link: "mailto:hello@helpcenter.com",
      linkText: "hello@helpcenter.com",
    },
    {
      icon: "/assets/images/contact2.png",
      title: "Call us",
      description:
        "Call us to speak to a member of our team. We are always happy to help.",
      linkText: "+1 (646) 785-8050",
    },
    {
      icon: "/assets/images/contact1.png",
      title: "Support",
      description: "Check out helpful resources, FAQs and developer tools.",
      link: "#",
      linkText: "Support Center →",
    },
  ];

  return (
    <>
      <div className="relative bg-[#1565D8] rounded-b-[13rem] h-[50vh] flex items-center justify-center z-10">
        <img
          src="/assets/images/oval.png"
          alt="oval"
          className="absolute -top-48 -left-48 w-[25rem] h-[25rem]"
        />
        <img
          src="/assets/images/oval.png"
          alt="oval"
          className="absolute -bottom-36 -right-48 w-[25rem] h-[25rem]"
        />

        <div className="flex flex-col items-center justify-center px-4">
          <Heading
            className="text-white font-medium"
            fontSize="font-semibold"
            text="Contact Us"
          />
          <PeraContent
            className="text-white max-w-2xl mx-auto mt-2"
            text="If you need our help, have questions about how to use the platform or are experiencing technical difficulties, please do not hesitate to contact us."
          />
        </div>
      </div>

      <div className="relative z-30 flex justify-center -mt-16 mb-10 px-4">
        <form
          className="bg-white p-11 rounded-lg w-full max-w-4xl md:w-3/4"
          style={{
            boxShadow:
              "0 -4px 6px -4px rgba(0, 0, 0, 0.1), 4px 0 6px -4px rgba(0, 0, 0, 0.1), -4px 0 6px -4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label className="text-[#5A7184] font-semibold mb-2 block">
                Your name*
              </label>
              <input
                type="text"
                placeholder="Julia William"
                className="border border-[#C3CAD9] p-2 rounded w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-2 ">
              <label className="text-[#5A7184] font-semibold mb-2 block">
                Contact email*
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border border-[#C3CAD9] p-2 rounded w-full"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <label className="text-[#5A7184] font-semibold mb-2 block">
                Company name*
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="border border-[#C3CAD9] p-2 rounded w-full"
              />
            </div>
            <div className="w-full md:w-1/2 px-2">
              <label className="text-[#5A7184] font-semibold mb-2 block">
                Country*
              </label>
              <select
                placeholder="Indonesia"
                className="border border-[#C3CAD9] p-2 rounded w-full"
              >
                <option value="Indonesia">Indonesia</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="text-[#5A7184] font-semibold mb-2 block">
              Your message*
            </label>
            <textarea
              placeholder="Type your message..."
              className="border border-[#C3CAD9] p-2 rounded w-full h-24"
            ></textarea>
          </div>
          <p className="text-[#5A7184] text-sm mb-4">
            By submitting this form you agree to our terms and conditions and
            our Privacy Policy which explains how we may collect, use and
            disclose your personal information including to third parties.
          </p>
          <button
            type="submit"
            className="bg-[#075CD6] cursor-pointer text-white p-2 px-3 rounded w-fit"
          >
            Contact Us
          </button>
        </form>
      </div>

      <div className="w-full bg-white py-28">
        <div className="flex justify-between items-start gap-6 max-w-5xl mx-auto px-4 flex-wrap md:flex-nowrap">
          {contactOptions.map((option, index) => (
            <div key={index} className="text-center flex-1 min-w-[200px]">
              <div className="w-12 h-12 mx-auto mb-2 bg-[#EEF4FC] rounded-lg flex items-center justify-center">
                <img src={option.icon} className="w-8 h-8" alt="" />
              </div>
              <p className="font-semibold">{option.title}</p>
              <p className="text-[#5A7184] text-sm">{option.description}</p>
              {option.link ? (
                <a
                  href={option.link}
                  className="text-[#1565D8] font-semibold text-sm"
                >
                  {option.linkText}
                </a>
              ) : (
                <p className="text-[#1565D8] font-semibold text-sm">
                  {option.linkText}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactSection;
