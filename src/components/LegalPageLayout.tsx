import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Footer } from './Footer';
import { NavLink } from '@/components/ui/nav-link';

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-indigo-900 text-white py-4 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center space-x-4">
            <NavLink to="/" className="text-platinum-300 hover:text-white flex items-center transition-colors">
              <ChevronLeft size={20} />
              <span>Back to Homepage</span>
            </NavLink>
          </div>
        </div>
      </div>
      
      <div className="flex-1 py-12 px-4 bg-gradient-to-br from-platinum-300 via-white to-platinum-100">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8 text-center">{title}</h1>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {children}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};
