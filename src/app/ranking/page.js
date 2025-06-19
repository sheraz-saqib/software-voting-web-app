import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RankingSection from "@/components/RankingSection/RankingSection";
import React from "react";

const Ranking = () => {
  return (
    <>
      <div className="bg-[#F2F9FE]">
        <Header />
        <RankingSection />
      </div>
      <Footer />
    </>
  );
};

export default Ranking;
