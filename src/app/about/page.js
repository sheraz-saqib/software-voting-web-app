import AboutSection from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import FreelanceCard from "@/components/FreelanceCard/FreelanceCard";
import Header from "@/components/Header/Header";
import WhyHasten from "@/components/WhyHasten/WhyHasten";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <AboutSection />
      <WhyHasten />
      <FreelanceCard />
      <Footer />
    </>
  );
};

export default About;
