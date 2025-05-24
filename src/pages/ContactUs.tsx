import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  return (
    <LegalPageLayout title="Contact Us">
      <div className="space-y-10 text-indigo-900">
        {/* Contact Intro */}
        <section className="text-center">
          <p className="text-xl text-indigo-600 mb-6 max-w-2xl mx-auto">
            Have a question or need assistance? Our support team is here to help you get the most out of CARA.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-platinum-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail size={20} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-1">Email Us</h3>
              <p className="text-sm text-indigo-600">chakravarthideveloper1</p>
            </div>
            
            <div className="bg-platinum-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle size={20} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-1">Live Chat</h3>
              <p className="text-sm text-indigo-600">24/7</p>
            </div>
            
            <div className="bg-platinum-100 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={20} className="text-indigo-600" />
              </div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <p className="text-sm text-indigo-600">+91 8978048299 CARA</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-8 rounded-xl border border-platinum-200">
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Send Us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                <Input 
                  id="name" 
                  placeholder="Enter your name"
                  className="border-platinum-200 focus:border-indigo-500"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="Enter your email"
                  className="border-platinum-200 focus:border-indigo-500"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input 
                id="subject" 
                placeholder="What is your message about?"
                className="border-platinum-200 focus:border-indigo-500"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea 
                id="message"
                placeholder="How can we help you?"
                className="min-h-32 border-platinum-200 focus:border-indigo-500"
              />
            </div>
            
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
              Send Message
            </Button>
          </form>
        </section>

        {/* Office Location */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-indigo-700">Our Office</h2>
          <div className="bg-platinum-100 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6">
            <div className="bg-indigo-200 w-full md:w-1/2 h-64 rounded-lg flex items-center justify-center">
              <MapPin size={48} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">CARA Headquarters</h3>
              <p className="text-indigo-600 mb-4">123 Legal office Vijayawada<br />India, CA 521212</p>
              <p className="text-sm text-indigo-500">
                Hours: Monday-Friday, 9:00 AM - 5:00 PM PST<br />
                Visitors by appointment only
              </p>
            </div>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default ContactUs;
