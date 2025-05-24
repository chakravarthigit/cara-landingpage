import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TrustSection } from '@/components/TrustSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ScreensShowcase } from '@/components/ScreensShowcase';
import { FAQSection } from '@/components/FAQSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  // Add parallax effect on scroll with smooth scrolling
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax to elements with data-parallax attribute
      document.querySelectorAll('[data-parallax]').forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.1');
        const yPos = -scrollY * speed;
        // Use transform property safely with type checking
        const htmlElement = element as HTMLElement;
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });

      // Add animation classes to elements when they come into view
      document.querySelectorAll('[data-animate]').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('animate-fade-in');
          element.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset scroll behavior on component unmount
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-300 via-white to-platinum-100">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="trust">
        <TrustSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="screens">
        <ScreensShowcase />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="newsletter">
        <NewsletterSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
    