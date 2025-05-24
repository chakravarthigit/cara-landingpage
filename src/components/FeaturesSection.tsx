import React from 'react';
import { Car, Shield, ShoppingBag, Users, Upload, Search } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Car,
      title: "Traffic Laws",
      description: "Navigate traffic violations, parking tickets, and driving regulations",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Cyber Laws",
      description: "Understand online privacy, data protection, and digital rights",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: ShoppingBag,
      title: "Consumer Rights",
      description: "Know your rights for returns, warranties, and fair trading",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Users,
      title: "Labor Laws",
      description: "Learn about workplace rights, contracts, and employee protections",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Upload,
      title: "Document Analysis",
      description: "Upload legal documents and get instant summaries and explanations",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Search,
      title: "Smart Law Search",
      description: "Search through laws and regulations with AI-powered insights",
      color: "from-indigo-400 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-platinum-300 to-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 opacity-0" data-animate>
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            Key Features
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            CARA covers all the legal areas you need, making complex law simple and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group opacity-0 border border-platinum-300"
              data-animate
              style={{ transitionDelay: `${index * 0.1}s` }}
              data-parallax={`0.0${(index % 3) + 1}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-indigo-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight with parallax effect */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-8 text-center opacity-0" data-animate data-parallax="-0.02">
          <h3 className="text-2xl font-bold text-white mb-4">
            Always Up-to-Date
          </h3>
          <p className="text-platinum-300 text-lg max-w-2xl mx-auto">
            Our AI is continuously updated with the latest legal changes and regulations, ensuring you always have access to current information.
          </p>
        </div>
      </div>

      {/* Background decoration with parallax */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-100 rounded-full opacity-50" data-parallax="0.05"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-platinum-200 rounded-full opacity-30" data-parallax="-0.05"></div>
    </section>
  );
};
