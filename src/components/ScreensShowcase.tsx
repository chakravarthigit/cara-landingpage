import React from 'react';

export const ScreensShowcase = () => {
  const screens = [
    {
      title: "Home Interface",
      description: "Legal Dashboard Overview",
      image: "/assets/Screenshotone.png"
    },
    {
      title: "How to use CARA",
      description: "Easy to follow steps to use CARA",
      image: "/assets/Screenshottwo.png"
    },
    {
      title: "Chat Interface",
      description: "Chat with CARA to get legal advice ",
      image: "/assets/Screenshotthree.png"
    },
    {
      title: "Profile Interface",
      description: "Customize your profile and settings",
      image: "/assets/Screenshotfour.png"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            App Screenshots
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            Take a closer look at CARA's intuitive interface designed for easy legal navigation.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4 px-0">
          <div className="flex space-x-5 w-max pr-8">
            {screens.map((screen, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Phone Frame */}
                <div className="relative w-64 h-[520px] bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl hover:shadow-3xl transition duration-300 hover:scale-105">
                  {/* Screen Content */}
                  <div className="w-full h-full bg-gradient-to-b from-platinum-300 to-white rounded-[2rem] overflow-hidden relative">
                    {/* Screen Specific Content - Using Image */}
                    <img 
                      src={screen.image}
                      alt={`${screen.title} Screenshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Screen Description */}
                <div className="text-center mt-6">
                  <h3 className="font-semibold text-indigo-900 mb-2">
                    {screen.title}
                  </h3>
                  <p className="text-sm text-indigo-600">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
