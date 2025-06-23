import React from "react";
import Heading from "../Common/Heading";
import PeraContent from "../Common/PeraContent";

const WhyHasten = () => {
  return (
    <div className="px-5 md:px-16 flex flex-col bg-[#F2F9FE]">
      <Heading 
textSize='text-2xl md:text-5xl'
      
      className="text-left" text={"Why Hasten"} />
      <PeraContent
      align="left"
        className=" text-black"
        text={`
Lorem ipsum dolor sit amet consectetur. Eget ullamcorper ultricies dictum nulla volutpat mi cras libero nunc. Ut consectetur etiam pellentesque id nunc. Nunc quisque at eu urna tempus nam porttitor tellus. Sem pretium quis urna tincidunt.
<br /><br />
Lorem ipsum dolor sit amet consectetur. Mauris porta vel tortor netus nisl ultrices consequat hac. Risus dictumst aliquet sit diam leo et sit. Amet aenean ac vulputate amet dictum sit. Elementum purus ornare et est lacinia. Felis commodo leo nunc odio senectus euismod lobortis. Imperdiet adipiscing sed aenean facilisis dis neque quis elit. Tristique morbi eu suscipit turpis magnis. `}
      />

  <Heading
textSize='text-2xl md:text-5xl'
  
  className="mt-6 text-left" text={"Privacy-focused"} />
      <PeraContent
      align="left"
        className=" text-black"
        text={`
Lorem ipsum dolor sit amet consectetur. Mauris porta vel tortor netus nisl ultrices consequat hac. Risus dictumst aliquet sit diam leo et sit. Amet aenean ac vulputate amet dictum sit. Elementum purus ornare et est lacinia. Felis commodo leo nunc odio senectus euismod lobortis. Imperdiet adipiscing sed aenean facilisis dis neque quis elit. Tristique morbi eu suscipit turpis magnis.
            `}
      />


    </div>
  );
};

export default WhyHasten;
