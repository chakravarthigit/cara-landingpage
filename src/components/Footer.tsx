import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';
import { useToast } from '@/hooks/use-toast';

export const Footer = () => {
  const { toast } = useToast();

  const handleIOSClick = () => {
    toast({
      title: "Coming Soon",
      description: "iOS version will be available soon!",
      duration: 3000,
    });
  };

  return (
    <footer className="bg-indigo-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Final CTA */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Download CARA now and take control of your legal knowledge.
          </h2>
          <p className="text-xl text-platinum-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who've found clarity in the complex world of law.
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={handleIOSClick}
            >
              <img src="/assets/Apple-Logo.png" alt="Apple logo" className="mr-2 h-5 w-5 object-contain" />
              App Store
            </Button>
            <a 
              href="https://drive.google.com/file/d/12drqHoxp5QPJIUJFZmSSHCOkBWA499Qh/view?usp=drivesdk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white hover:bg-gray-100 text-indigo-900 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img src="/assets/playstore.png" alt="Play Store logo" className="mr-2 h-5 w-5 object-contain" />
                Google Play
              </Button>
            </a>
          </div>

          {/* Rating */}
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-indigo-400 rounded-full text-white flex items-center justify-center text-sm">
                ★
              </div>
            ))}
          </div>
          <p className="text-platinum-300">
            4.8/5 stars • 10,000+ downloads
          </p>
        </div>

        {/* Footer Links */}
        <div className="border-t border-indigo-700 pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">CARA</h3>
              <p className="text-platinum-300 leading-relaxed">
                Your AI-powered legal companion for understanding rights and regulations in plain language.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Product</h4>
              <ul className="space-y-2 text-platinum-300">
                <li><NavLink to="/#features" className="hover:text-white transition-colors">Features</NavLink></li>
                <li><NavLink to="/#how-it-works" className="hover:text-white transition-colors">How it Works</NavLink></li>
                <li><NavLink to="/#pricing" className="hover:text-white transition-colors">Pricing</NavLink></li>
                <li><NavLink to="/#faq" className="hover:text-white transition-colors">FAQ</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Legal</h4>
              <ul className="space-y-2 text-platinum-300">
                <li><NavLink to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</NavLink></li>
                <li><NavLink to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</NavLink></li>
                <li><NavLink to="/legal-disclaimer" className="hover:text-white transition-colors">Legal Disclaimer</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-indigo-400">Support</h4>
              <ul className="space-y-2 text-platinum-300">
                <li><NavLink to="/contact-us" className="hover:text-white transition-colors flex items-center"><Mail className="w-4 h-4 mr-2" />Contact Us</NavLink></li>
                <li><NavLink to="/help-center" className="hover:text-white transition-colors">Help Center</NavLink></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-indigo-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-platinum-300 text-sm">
              © 2024 CARA Legal Companion. All rights reserved.
            </p>
            <p className="text-platinum-300 text-sm mt-4 md:mt-0">
              Made with ❤️ for legal clarity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
