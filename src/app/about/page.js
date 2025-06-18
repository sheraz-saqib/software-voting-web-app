import AboutSection from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import FreelanceCard from "@/components/FreelanceCard/FreelanceCard";
import Header from "@/components/Header/Header";
import RevenueSection from "@/components/RevenueSection/RevenueSection";
import WhyHasten from "@/components/WhyHasten/WhyHasten";
import React from "react";

const About = () => {
  return (
    <>
    <div className='bg-[#F2F9FE]'>

      <Header />
      <AboutSection />
      </div>
      <WhyHasten />
      <FreelanceCard />
      <RevenueSection/>
      <Footer />
    </>
  );
};

export default About;
