import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';

const CookiePolicy = () => {
  return (
    <LegalPageLayout title="Cookie Policy">
      <div className="space-y-6 text-indigo-900">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small pieces of text sent to your browser by a website you visit. They help that website 
            remember information about your visit, like your preferred language and other settings. This can make 
            your next visit easier and the site more useful to you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">How We Use Cookies</h2>
          <p className="mb-2">CARA uses cookies for several purposes, including:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Authentication:</strong> We use cookies to identify you when you visit our application 
              and as you navigate through different sections.
            </li>
            <li>
              <strong>Status:</strong> We use cookies to determine if you are logged in to our application.
            </li>
            <li>
              <strong>Personalization:</strong> We use cookies to store information about your preferences 
              and to personalize the application for you.
            </li>
            <li>
              <strong>Security:</strong> We use cookies as an element of the security measures used to protect 
              user accounts and our application in general.
            </li>
            <li>
              <strong>Analysis:</strong> We use cookies to help us analyze the use and performance of our application.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Types of Cookies We Use</h2>
          <p className="mb-2">We use the following types of cookies:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <strong>Essential cookies:</strong> These are cookies that are required for the operation of our 
              application. They include, for example, cookies that enable you to log into secure areas.
            </li>
            <li>
              <strong>Analytical/performance cookies:</strong> These allow us to recognize and count the number 
              of visitors and to see how visitors move around our application when they are using it.
            </li>
            <li>
              <strong>Functionality cookies:</strong> These are used to recognize you when you return to our application. 
              This enables us to personalize our content for you and remember your preferences.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Managing Cookies</h2>
          <p>
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary 
            from browser to browser, and from version to version. You can however obtain up-to-date information about 
            blocking and deleting cookies via the support pages of your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at: 
            <a href="mailto:privacy@caralegal.app" className="text-indigo-600 hover:underline ml-1">privacy@caralegal.app</a>
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default CookiePolicy;
