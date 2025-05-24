import React from 'react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      situation: "Tenant Dispute",
      quote: "CARA helped me understand my rights as a tenant when my landlord tried to increase rent illegally. The explanations were so clear and helpful!",
      avatar: "S"
    },
    {
      name: "James L.",
      situation: "Employment Contract",
      quote: "I was confused about my employment contract terms. CARA broke it down in simple language and helped me negotiate better conditions.",
      avatar: "J"
    },
    {
      name: "Maria R.",
      situation: "Consumer Rights",
      quote: "When a company refused my refund, CARA guided me through my consumer rights. I got my money back within a week!",
      avatar: "M"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-platinum-300 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            Real Stories, Real Results
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            See how CARA has helped people just like you navigate legal challenges with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Speech Bubble Arrow */}
              <div className="absolute -top-2 left-8 w-4 h-4 bg-indigo-500 rotate-45"></div>
              
              {/* Quote */}
              <div className="bg-indigo-500 p-4 rounded-xl mb-6 relative">
                <p className="text-white leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-platinum-300 rounded-full flex items-center justify-center">
                  <span className="text-indigo-800 font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-indigo-600">
                    {testimonial.situation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-indigo-600 mb-6">
            Join thousands of users who've found legal clarity with CARA
          </p>
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 bg-indigo-400 rounded-full text-white flex items-center justify-center text-sm">
                ★
              </div>
            ))}
          </div>
          <p className="text-sm text-indigo-500 mt-2">
            4.8/5 stars from 10,000+ users
          </p>
        </div>
      </div>
    </section>
  );
};
