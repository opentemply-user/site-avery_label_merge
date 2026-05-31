import { useEffect } from 'react';
import { LINKS } from '../constants';
import { Link } from 'react-router-dom';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p className="lead text-lg text-slate-600 mb-6">
          Effective Date: May 18, 2026
        </p>
        <p className="mb-4">
          Welcome to Avery Label Merge for Google Docs & Sheets (“Avery Label Merge”), a product operated by OpenTemply (“OpenTemply”, “we”, “our”, or “us”).
        </p>
        <p className="mb-4">
          These Terms of Service (“Terms”) govern your access to and use of the Avery Label Merge add-on, website, and related services (collectively, the “Service”).
        </p>
        <p className="mb-4">
          By installing, accessing, or using the Service, you agree to these Terms. If you do not agree, you may not use the Service.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Description of the Service</h2>
        <p className="mb-4">
          Avery Label Merge is a Google Docs & Sheets add-on that enables users to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Create and format labels</li>
          <li>Generate barcodes and QR codes</li>
          <li>Perform merge operations using user-provided data</li>
          <li>Design printable layouts within Google Docs & Sheets</li>
        </ul>
        <p className="mb-4">
          The Service is available through Google Workspace Marketplace and hosted at:
        </p>
        <p className="mb-4 font-semibold text-slate-800">
          labelmaker.opentemply.com
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Eligibility</h2>
        <p className="mb-4">
          You may use the Service only if:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>You are legally capable of entering into a binding agreement</li>
          <li>You comply with these Terms</li>
          <li>You comply with applicable laws and regulations</li>
          <li>You have a valid Google account where required</li>
        </ul>
        <p className="mb-4">
          If you use the Service on behalf of an organization, you represent that you are authorized to accept these Terms on behalf of that organization.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Google Account and Permissions</h2>
        <p className="mb-4">
          The Service integrates with Google Workspace services and may require access to certain Google account data and Google Docs & Sheets content to function.
        </p>
        <p className="mb-4">
          By using the Service, you authorize OpenTemply to access and process data strictly as necessary to provide the Service functionality.
        </p>
        <p className="mb-4">
          Your use of Google services is also governed by Google’s own terms and privacy policies.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Acceptable Use</h2>
        <p className="mb-4">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Use the Service for unlawful, fraudulent, or harmful purposes</li>
          <li>Attempt to interfere with or disrupt the Service</li>
          <li>Reverse engineer, copy, modify, or redistribute the Service except as permitted by law</li>
          <li>Use the Service to transmit malicious software or harmful code</li>
          <li>Abuse Google Workspace APIs or violate Google policies</li>
          <li>Attempt unauthorized access to systems or user data</li>
        </ul>
        <p className="mb-4">
          We reserve the right to suspend or terminate access for violations of these Terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. User Content and Responsibility</h2>
        <p className="mb-4">
          You retain ownership of any content, data, labels, spreadsheets, presentations, or materials you create or process using the Service (“User Content”).
        </p>
        <p className="mb-4">
          You are solely responsible for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>The legality and accuracy of User Content</li>
          <li>Obtaining necessary rights or permissions</li>
          <li>Ensuring your use complies with applicable laws</li>
        </ul>
        <p className="mb-4">
          OpenTemply does not claim ownership of your User Content.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Privacy</h2>
        <p className="mb-4">
          Your use of the Service is subject to our Privacy Policy:
        </p>
        <p className="mb-4">
          <Link to="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</Link>
        </p>
        <p className="mb-4">
          Our Privacy Policy explains how we access, use, store, and protect Google user data.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Google API Services Compliance</h2>
        <p className="mb-4">
          Avery Label Merge’s use and transfer of information received from Google APIs complies with the{' '}
          <a href={LINKS.GOOGLE_API_TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
            Google API Services User Data Policy
          </a>, including the Limited Use requirements.
        </p>
        <p className="mb-4">
          OpenTemply does not:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Sell Google user data</li>
          <li>Use Google user data for advertising</li>
          <li>Use Google Workspace API data to train generalized AI or machine learning models</li>
          <li>Share Google user data for unrelated third-party purposes</li>
        </ul>
        <p className="mb-4">
          We access only the minimum data necessary to provide user-facing functionality.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Intellectual Property</h2>
        <p className="mb-4">
          The Service, including its software, branding, design, logos, and related materials, is owned by OpenTemply and protected by intellectual property laws.
        </p>
        <p className="mb-4">
          Except as expressly permitted, you may not:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Copy or reproduce the Service</li>
          <li>Create derivative works</li>
          <li>Remove proprietary notices</li>
          <li>Resell or sublicense the Service</li>
        </ul>
        <p className="mb-4">
          “Avery Label Merge” and “OpenTemply” may be trademarks or trade names of OpenTemply.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Service Availability</h2>
        <p className="mb-4">
          We aim to provide reliable access to the Service but do not guarantee uninterrupted or error-free operation.
        </p>
        <p className="mb-4">
          We may:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Modify or discontinue features</li>
          <li>Perform maintenance</li>
          <li>Update functionality</li>
          <li>Suspend access temporarily for operational or security reasons</li>
        </ul>
        <p className="mb-4">
          We are not liable for downtime, interruptions, or loss of data resulting from service issues.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Third-Party Services</h2>
        <p className="mb-4">
          The Service depends on third-party platforms and infrastructure, including Google Workspace services.
        </p>
        <p className="mb-4">
          OpenTemply is not responsible for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Third-party platform outages</li>
          <li>Google service interruptions</li>
          <li>Third-party policies or actions</li>
          <li>External websites or services linked from the Service</li>
        </ul>
        <p className="mb-4">
          Your use of third-party services is subject to their respective terms and policies.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Disclaimer of Warranties</h2>
        <p className="mb-4">
          The Service is provided “AS IS” and “AS AVAILABLE” without warranties of any kind, whether express or implied.
        </p>
        <p className="mb-4">
          To the maximum extent permitted by law, OpenTemply disclaims all warranties, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Merchantability</li>
          <li>Fitness for a particular purpose</li>
          <li>Non-infringement</li>
          <li>Reliability</li>
          <li>Availability</li>
          <li>Accuracy of generated outputs</li>
        </ul>
        <p className="mb-4">
          We do not guarantee that the Service will always be secure, error-free, or uninterrupted.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Limitation of Liability</h2>
        <p className="mb-4">
          To the fullest extent permitted by law, OpenTemply and its affiliates shall not be liable for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Indirect or consequential damages</li>
          <li>Loss of profits or revenue</li>
          <li>Loss of data</li>
          <li>Business interruption</li>
          <li>Damages arising from use or inability to use the Service</li>
        </ul>
        <p className="mb-4">
          Our total liability relating to the Service shall not exceed the amount paid by you, if any, for use of the Service during the twelve months preceding the claim.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Indemnification</h2>
        <p className="mb-4">
          You agree to indemnify and hold harmless OpenTemply, its affiliates, and personnel from claims, liabilities, damages, losses, and expenses arising from:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Your use of the Service</li>
          <li>Your User Content</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of applicable laws or third-party rights</li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">14. Termination</h2>
        <p className="mb-4">
          You may stop using the Service at any time by uninstalling the add-on and revoking Google account permissions.
        </p>
        <p className="mb-4">
          We may suspend or terminate access if:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>You violate these Terms</li>
          <li>We are required by law</li>
          <li>Continued operation creates security or legal risk</li>
        </ul>
        <p className="mb-4">
          Sections that by nature should survive termination will remain in effect.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">15. Changes to These Terms</h2>
        <p className="mb-4">
          We may update these Terms from time to time.
        </p>
        <p className="mb-4">
          Updated versions will be posted at:{' '}
          <Link to="/terms" className="text-primary-600 hover:text-primary-700 underline">Terms of Service Page</Link>
        </p>
        <p className="mb-4">
          Continued use of the Service after changes become effective constitutes acceptance of the updated Terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">16. Governing Law</h2>
        <p className="mb-4">
          These Terms shall be governed by and construed in accordance with the laws applicable in the jurisdiction where OpenTemply operates, without regard to conflict of law principles.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">17. Contact Information</h2>
        <p className="mb-4">
          If you have questions regarding these Terms, please contact:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>OpenTemply</strong></li>
          <li><strong>Website:</strong> <a href="https://opentemply.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">OpenTemply Website</a></li>
          <li><strong>Email:</strong> <a href={LINKS.SUPPORT_EMAIL_URL} className="text-primary-600 hover:text-primary-700 underline">support@opentemply.com</a></li>
        </ul>
      </div>
    </div>
  );
}
