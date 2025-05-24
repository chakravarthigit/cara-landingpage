import React from 'react';
import { LegalPageLayout } from '@/components/LegalPageLayout';

const LegalDisclaimer = () => {
  return (
    <LegalPageLayout title="Legal Disclaimer">
      <div className="space-y-6 text-indigo-900">
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Not Legal Advice</h2>
          <p className="mb-4">
            The information provided by CARA ("we," "us," or "our") on our mobile application is for general 
            informational and educational purposes only. All information on the application is provided in good faith, 
            however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, 
            adequacy, validity, reliability, availability, or completeness of any information on the application.
          </p>
          <p className="mb-4">
            <strong>CARA IS NOT A LAW FIRM AND DOES NOT PROVIDE LEGAL ADVICE.</strong> No attorney-client relationship 
            is created by using our application. The application is not a substitute for competent legal advice from a 
            licensed professional attorney in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">AI-Generated Information</h2>
          <p className="mb-4">
            CARA uses artificial intelligence to provide information about legal concepts and regulations. While we strive 
            to ensure the accuracy of this information, AI systems have limitations and may not always provide complete or 
            current information.
          </p>
          <p>
            Laws and regulations change frequently, and their application can vary widely based on specific circumstances. 
            The information provided by our AI may not reflect the most current legal developments or interpretations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Legal Information Varies by Jurisdiction</h2>
          <p>
            Legal information and interpretations vary by country, state, province, municipality, and other jurisdictions. 
            Information that is valid in one jurisdiction may not be applicable in another. You should always verify the 
            applicability of any information to your specific jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Consult a Professional</h2>
          <p>
            For specific legal advice applicable to your situation, please consult with a qualified attorney licensed to 
            practice in your jurisdiction. Only a licensed attorney who is informed of all the relevant facts of your situation 
            can provide personalized legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">No Liability</h2>
          <p>
            Under no circumstances shall we have any liability to you for any loss or damage of any kind incurred as a result 
            of the use of the application or reliance on any information provided on the application. Your use of the application 
            and your reliance on any information on the application is solely at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Contact Us</h2>
          <p>
            If you have any questions about this Legal Disclaimer, please contact us at: 
            <a href="mailto:legal@caralegal.app" className="text-indigo-600 hover:underline ml-1">legal@caralegal.app</a>
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default LegalDisclaimer;
