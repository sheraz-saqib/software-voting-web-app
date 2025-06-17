import React from 'react';

const FeedbackCard = ({text, authorName, className, authorDesc }) => {
  return (
    <div className={`bg-black text-white rounded-3xl p-4 min-h-56 cursor-pointer ${className}`}>
      {/* content */}
      <div className="flex justify-between items-start w-full h-full flex-col">
        {/* feedback text */}
        <div className="mt-6">
<p>{text}</p>
        </div>
        <div className="flex my-5 items-center space-x-2">
          <div className="w-10 h-10 bg-[#4975B5] rounded-full">
            <img src='/assets/images/Group.png' />
          </div>
          <div>
            <p className="text-white">{authorName}</p>
            <p className="text-gray-400 text-sm">{authorDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;