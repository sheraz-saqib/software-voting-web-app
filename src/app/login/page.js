import AuthLeftSection from "@/components/AuthLeftSection/AuthLeftSection";
import AuthRightSection from "@/components/LoginRightSection/LoginRightSection";

import React from "react";

const page = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col">
        <AuthLeftSection />
        <AuthRightSection />
      </div>
    </>
  );
};

export default page;
