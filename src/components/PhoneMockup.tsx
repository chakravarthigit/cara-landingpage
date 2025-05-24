import React, { useEffect, useState } from 'react';

export const PhoneMockup = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Small delay to ensure animation is visible
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Phone Frame */}
      <div 
        className={`relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl transform transition-all duration-1000 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Image Mockup */}
          <img 
            src="/assets/Hero section.png"
            alt="CARA App Mockup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Phone Reflection */}
      <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 rounded-[3rem] transition-opacity duration-1000 ${isVisible ? 'opacity-20' : 'opacity-0'}`}></div>
    </div>
  );
};
