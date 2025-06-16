import React from "react";

const PeraContent = ({ text, className = "text-white", align = "center" }) => {
  return (
    <div className={`mt-3 flex  ${align === "left" ? "text-left justify-start" : align === "right" ? "text-right justify-end" : "text-center justify-center"}`}>
      <p
        className={`text-sm w-[75%] max-md:text-xs max-md:w-[90%] ${className}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default PeraContent;