import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <div className="space-y-6 text-indigo-900">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Introduction</h2>
          <p className="mb-4">
            At CARA, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
            and safeguard your information when you use our mobile application CARA: Your Legal Companion.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Information We Collect</h2>
          <p className="mb-2">We may collect information about you in various ways, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Personal Data:</strong> When you register an account, we may collect your name, email address, 
              and other contact information.
            </li>
            <li>
              <strong>Legal Queries:</strong> The questions and scenarios you submit to our AI-powered legal assistant.
            </li>
            <li>
              <strong>User Content:</strong> Any documents you upload for analysis.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our application, including frequency of use, 
              features accessed, and interactions with the interface.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">How We Use Your Information</h2>
          <p className="mb-2">We may use the information we collect about you to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and respond to your legal queries</li>
            <li>Analyze documents you upload</li>
            <li>Understand how users interact with our application</li>
            <li>Detect, prevent, and address technical issues</li>
            <li>Send you updates about our services, if you opt-in to communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. 
            While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
            that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
            can be guaranteed against any interception or other type of misuse.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: 
            <a href="mailto:privacy@caralegal.app" className="text-indigo-600 hover:underline ml-1">privacy@caralegal.app</a>
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
