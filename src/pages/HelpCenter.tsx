import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, BookOpen, Video, FileText, Search } from 'lucide-react';
import { NavLink } from '@/components/ui/nav-link';

const HelpCenter = () => {
  const helpCategories = [
    {
      icon: MessageCircle,
      title: "Getting Started",
      description: "Learn the basics of using CARA"
    },
    {
      icon: BookOpen,
      title: "Features & Tutorials",
      description: "Detailed guides on all CARA features"
    },
    {
      icon: FileText,
      title: "Legal Topics",
      description: "Help on specific legal areas"
    },
    {
      icon: Video,
      title: "Video Guides",
      description: "Watch tutorials and walkthroughs"
    }
  ];

  const commonQuestions = [
    {
      question: "How do I create an account?",
      answer: "Download the CARA app from the App Store or Google Play, open it, and tap 'Create Account'. Follow the prompts to enter your email, create a password, and set up your profile."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, all conversations and uploaded documents are encrypted. We use enterprise-grade security to protect your data, and we never share your personal information with third parties."
    },
    {
      question: "How accurate is CARA's legal information?",
      answer: "CARA is built on a foundation of verified legal databases and is regularly updated. However, it's designed as an educational tool and should not replace professional legal counsel for complex situations."
    },
    {
      question: "Can I use CARA for free?",
      answer: "CARA offers both free and premium features. Basic legal information and a limited number of queries are available for free. Advanced features like document analysis and unlimited questions require a subscription."
    },
    {
      question: "How do I upload a document for analysis?",
      answer: "In the CARA app, tap on the 'Upload' button in the bottom navigation. You can upload PDFs, images, or text files. Once uploaded, CARA will analyze the document and provide a summary and explanation."
    }
  ];

  return (
    <LegalPageLayout title="Help Center">
      <div className="space-y-10 text-indigo-900">
        {/* Search Section */}
        <section className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">How can we help you today?</h2>
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search for help articles..."
              className="pl-10 py-3 text-lg"
            />
            <Search className="absolute left-3 top-3 text-indigo-400" size={20} />
          </div>
        </section>

        {/* Help Categories */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-platinum-100 p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-platinum-200 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center mb-3">
                    <category.icon size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm text-indigo-600">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Questions */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {commonQuestions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-platinum-100 rounded-xl border border-platinum-200 px-6"
              >
                <AccordionTrigger className="text-left text-indigo-900 hover:text-indigo-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-indigo-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Contact Support */}
        <section className="text-center bg-indigo-100 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Still Need Help?</h2>
          <p className="mb-4 text-indigo-600">Our support team is ready to assist you with any questions or issues.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/contact-us">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Contact Support
              </Button>
            </NavLink>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default HelpCenter;
