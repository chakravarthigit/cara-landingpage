import React from 'react';
import { MessageCircle, Zap, BookOpen } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Ask a Legal Question",
      description: "Simply type your legal question in natural language - no legal jargon required."
    },
    {
      icon: Zap,
      title: "Get Instant AI Answers",
      description: "Our AI analyzes your question and provides accurate, relevant legal information instantly."
    },
    {
      icon: BookOpen,
      title: "Learn Your Rights Clearly",
      description: "Receive easy-to-understand explanations that help you make informed decisions."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 opacity-0" data-animate>
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            How CARA Works
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            Getting legal help has never been easier. Just three simple steps to understand your rights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300 opacity-0" 
              data-animate
              style={{ transitionDelay: `${index * 0.1}s` }}
              data-parallax={`0.0${index + 1}`}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-platinum-300 rounded-full flex items-center justify-center text-indigo-800 font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-indigo-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-indigo-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Illustration with parallax effect */}
        <div className="mt-16 flex justify-center opacity-0" data-animate data-parallax="-0.05">
          <div className="relative">
            <div className="w-64 h-64 bg-gradient-to-br from-platinum-300 to-indigo-100 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-indigo-500" />
              </div>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-indigo-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-8 left-8 w-8 h-8 bg-indigo-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Background decoration with parallax */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-platinum-200 rounded-full opacity-50" data-parallax="0.1"></div>
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-indigo-100 rounded-full opacity-30" data-parallax="-0.05"></div>
    </section>
  );
};
