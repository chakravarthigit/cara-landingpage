import React from 'react';
import { CheckCircle, Lock, Heart, Globe } from 'lucide-react';

export const TrustSection = () => {
  const trustPoints = [
    {
      icon: CheckCircle,
      title: "Built with Verified Legal Data",
      description: "Our AI is trained on verified legal databases and authoritative sources to ensure accuracy."
    },
    {
      icon: Lock,
      title: "Always Private and Secure",
      description: "Your conversations are encrypted and private. We never store or share your personal legal queries."
    },
    {
      icon: Heart,
      title: "Friendly and Non-Intimidating",
      description: "Legal help shouldn't be scary. CARA explains complex laws in simple, friendly language."
    },
    {
      icon: Globe,
      title: "Multiple Regions & Topics",
      description: "Comprehensive coverage across different jurisdictions and areas of law to serve diverse needs."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 opacity-0" data-animate>
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            Why Trust CARA?
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            We've built CARA with your needs and privacy in mind, ensuring reliable legal guidance you can count on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
          {trustPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start space-x-5 group opacity-0"
              data-animate
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-indigo-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-0" data-animate>
          <div className="flex items-center space-x-2 text-indigo-600">
            <Lock className="w-5 h-5" />
            <span className="font-medium">256-bit Encryption</span>
          </div>
          <div className="flex items-center space-x-2 text-indigo-600">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center space-x-2 text-indigo-600">
            <Heart className="w-5 h-5" />
            <span className="font-medium">User Privacy First</span>
          </div>
        </div>
      </div>

      {/* Static background decoration instead of parallax */}
      <div className="absolute top-1/4 -right-16 w-32 h-32 bg-indigo-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 -left-16 w-32 h-32 bg-platinum-200 rounded-full opacity-30"></div>
    </section>
  );
};
