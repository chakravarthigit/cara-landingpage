import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
    // Show success toast in a real app
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-platinum-300 to-indigo-100 rounded-3xl p-8 lg:p-12 text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-indigo-900 mb-4">
              Get Monthly Legal Tips
            </h2>
            
            <p className="text-lg text-indigo-600 max-w-2xl mx-auto leading-relaxed">
              Stay informed with our monthly newsletter featuring legal tips, updates, and insights that matter to you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-platinum-200 focus:border-indigo-500 bg-white text-indigo-900 placeholder-indigo-400"
                required
              />
              <Button 
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </Button>
            </div>
          </form>

          <p className="text-sm text-indigo-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>

          {/* Newsletter Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <span className="text-indigo-500 font-bold">📚</span>
              </div>
              <h3 className="font-semibold text-indigo-900 mb-1">Legal Updates</h3>
              <p className="text-sm text-indigo-600">Latest law changes that affect you</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <span className="text-indigo-500 font-bold">💡</span>
              </div>
              <h3 className="font-semibold text-indigo-900 mb-1">Practical Tips</h3>
              <p className="text-sm text-indigo-600">Real-world legal advice you can use</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
                <span className="text-indigo-500 font-bold">🔒</span>
              </div>
              <h3 className="font-semibold text-indigo-900 mb-1">Privacy First</h3>
              <p className="text-sm text-indigo-600">Your email stays secure with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
