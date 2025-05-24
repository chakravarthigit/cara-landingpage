import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';

const TermsOfService = () => {
  return (
    <LegalPageLayout title="Terms of Service">
      <div className="space-y-6 text-indigo-900">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Agreement to Terms</h2>
          <p className="mb-4">
            These Terms of Service constitute a legally binding agreement made between you and CARA Legal Companion 
            ("we," "us," or "our"), concerning your access to and use of our mobile application.
          </p>
          <p>
            By accessing or using the CARA application, you agree to be bound by these Terms of Service. If you disagree 
            with any part of these terms, you may not access the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Not Legal Advice</h2>
          <p className="mb-4">
            CARA provides information about legal concepts and explanations of laws. However, this information is for 
            educational purposes only. CARA is not a substitute for professional legal advice.
          </p>
          <p>
            The information provided through our application does not constitute legal advice and does not create an 
            attorney-client relationship. You should always consult with a qualified attorney for specific legal advice 
            tailored to your situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">User Accounts</h2>
          <p>
            When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
            Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Intellectual Property</h2>
          <p>
            The CARA application and its original content, features, and functionality are and will remain the exclusive property 
            of CARA Legal Companion and its licensors. The application is protected by copyright, trademark, and other laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Limitation of Liability</h2>
          <p>
            In no event shall CARA Legal Companion, nor its directors, employees, partners, agents, suppliers, or affiliates, 
            be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
            loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability 
            to access or use the application.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material 
            we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at: 
            <a href="mailto:terms@caralegal.app" className="text-indigo-600 hover:underline ml-1">terms@caralegal.app</a>
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsOfService;
