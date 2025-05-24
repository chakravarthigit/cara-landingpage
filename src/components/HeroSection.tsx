import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { PhoneMockup } from '@/components/PhoneMockup';
import { useToast } from '@/hooks/use-toast';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleIOSClick = () => {
    toast({
      title: "Coming Soon",
      description: "iOS version will be available soon!",
      duration: 3000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }} data-parallax="0.1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-indigo-700 leading-tight">
                CARA
                <span className="block text-3xl lg:text-4xl font-medium text-indigo-500 mt-2">
                  Your Legal Companion
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-indigo-600 font-medium">
                "Understand Your Rights. Instantly."
              </p>
              <p className="text-lg text-indigo-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                CARA is your AI-powered legal assistant that helps you navigate laws, rights, and regulations in plain language.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={handleIOSClick}
              >
                <img src="/assets/Apple-Logo.png" alt="Apple logo" className="mr-2 h-5 w-5 object-contain" />
                Download for iOS
              </Button>
              <a 
                href="https://drive.google.com/file/d/12drqHoxp5QPJIUJFZmSSHCOkBWA499Qh/view?usp=drivesdk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-indigo-700 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <img src="/assets/playstore.png" alt="Play Store logo" className="mr-2 h-5 w-5 object-contain" />
                  Get on Android
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-indigo-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Private & Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span>Plain Language</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '500ms' }} data-parallax="0.05">
            <PhoneMockup />
          </div>
        </div>
      </div>

      {/* Background Decoration with parallax effect */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-platinum-300 to-transparent rounded-full blur-3xl opacity-50" data-parallax="0.2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-indigo-200 to-transparent rounded-full blur-3xl opacity-50" data-parallax="-0.1"></div>
    </section>
  );
};
