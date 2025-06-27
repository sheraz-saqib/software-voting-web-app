import AnalyticsSection from "@/components/AnalyticsSection/AnalyticsSection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PricingSection from "@/components/PricingSection/PricingSection";
import ProductAndFeatureCard from "@/components/ProductAndFeatureCard/ProductAndFeatureCard";
import ProductBanner from "@/components/ProductBanner/ProductBanner";
import ProductInfo from "@/components/ProductInfo/ProductInfo";
import ProductReview from "@/components/ProductReview/ProductReview";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <ProductBanner />
      <ProductInfo />
      <ProductReview/>
      {/* <PricingSection/> */}
      <ProductAndFeatureCard/>


      {/* <AnalyticsSection /> */}

      <Footer />
    </>
  );
};

export default page;
