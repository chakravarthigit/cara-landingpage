import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavLink } from '@/components/ui/nav-link';
import { Button } from '@/components/ui/button';

export const FAQSection = () => {
  const faqs = [
    {
      question: "Is CARA's legal advice reliable?",
      answer: "CARA provides information based on verified legal databases and current regulations. However, CARA is an educational tool and should not replace professional legal counsel for complex matters."
    },
    {
      question: "How does CARA protect my privacy?",
      answer: "All conversations are encrypted and stored securely. We never share your personal information or legal queries with third parties. Your privacy is our top priority."
    },
    {
      question: "Which areas of law does CARA cover?",
      answer: "CARA covers traffic laws, consumer rights, employment law, cyber regulations, housing law, and many other common legal areas. We're constantly expanding our coverage."
    },
    {
      question: "Can I upload documents to CARA?",
      answer: "Yes! You can upload legal documents and CARA will provide summaries and explanations in plain language to help you understand key terms and implications."
    },
    {
      question: "Is CARA available in my region?",
      answer: "CARA supports multiple jurisdictions and regions. The app will automatically detect your location and provide relevant local legal information."
    },
    {
      question: "How much does CARA cost?",
      answer: "CARA offers both free and premium features. Basic legal information is free, while advanced features like document analysis require a subscription."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-platinum-300 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-indigo-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-indigo-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about CARA and how it can help you.
          </p>
        </div>

        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border border-platinum-200 px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-indigo-900 hover:text-indigo-600 py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-indigo-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-indigo-600 mb-4">
            Still have questions?
          </p>
          <NavLink to="/contact-us">
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300">
              Contact Support
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
