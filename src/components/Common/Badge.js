import React from 'react';

const Badge = ({ text, className = '', type }) => {
  const badgeConfig = {
    freemium: { text: 'Freemium', color: '#00BA00' }, // Green
    paid: { text: 'Paid', color: '#EF4444' }, // Red
    free_trial: { text: 'Free Trial', color: '#FFAE00' }, // Yellow
    free: { text: 'Free', color: '#0095FF' } // Blue
  };

  // Determine badge text and color based on type
  const badgeText = type && badgeConfig[type] ? badgeConfig[type].text : text || 'Default';
  const badgeColor = type && badgeConfig[type] ? badgeConfig[type].color : '#DEE8F6';

  return (
    <div className="flex justify-center items-center">
      <span
        className={`rounded-full uppercase text-[#084DB3] font-semibold text-[.75rem] px-5 py-1 max-md:px-4 max-md:text-[.6rem] ${className}`}
        style={{ backgroundColor: badgeColor }}
      >
        {badgeText}
      </span>
    </div>
  );
};

export default Badge;