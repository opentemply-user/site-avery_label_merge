import { useEffect } from 'react';
import { LINKS } from '../constants';
import { Link } from 'react-router-dom';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="lead text-lg text-slate-600 mb-6">
          Effective Date: May 18, 2026
        </p>
        <p className="mb-4">
          OpenTemply (“OpenTemply”, “we”, “our”, or “us”) operates the Avery Label Merge for Google Docs & Sheets add-on (“Avery Label Merge” or the “Service”), available through Google Workspace Marketplace and hosted at labelmaker.opentemply.com.
        </p>
        <p className="mb-4">
          We are committed to protecting your privacy and handling Google user data responsibly and transparently. This Privacy Policy explains what information we access, how we use it, how we protect it, and your rights regarding your data.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Access</h2>
        <p className="mb-4">
          Avery Label Merge accesses limited Google user data strictly for providing the functionality of the add-on inside Google Docs & Sheets.
        </p>
        <p className="mb-4">
          Depending on the features used, the Service may access:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Google account basic profile information (such as email address and display name)</li>
          <li>Google Docs & Sheets content and presentation/document data</li>
          <li>User-provided label data</li>
          <li>Spreadsheet or data source content selected by the user for mail merge or label generation</li>
          <li>Barcode or QR code generation input provided by the user</li>
        </ul>
        <p className="mb-4">
          We only request the minimum Google API scopes necessary for the operation of the Service.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Information</h2>
        <p className="mb-4">
          We use Google user data solely to provide and improve the core functionality of Avery Label Merge, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Creating labels within Google Docs & Sheets</li>
          <li>Performing merge operations using user-selected data</li>
          <li>Generating barcodes and QR codes</li>
          <li>Rendering and formatting labels</li>
          <li>Saving user preferences related to the add-on</li>
          <li>Providing technical support and troubleshooting</li>
        </ul>
        <p className="mb-4 font-semibold text-slate-800">
          Google user data is never used for:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Advertising</li>
          <li>Targeted advertising</li>
          <li>Selling data to third parties</li>
          <li>Data brokerage</li>
          <li>AI model training</li>
          <li>Credit scoring</li>
          <li>Marketing profiling</li>
          <li>Personalized advertising</li>
        </ul>
        <p className="mb-4">
          We do not use Google Workspace APIs to develop, improve, or train generalized artificial intelligence or machine learning models.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          OpenTemply does not sell, rent, trade, or disclose Google user data to third parties except in the following limited situations:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>When required by applicable law or legal process</li>
          <li>To protect the security, integrity, or rights of our users or services</li>
          <li>To trusted infrastructure or hosting providers solely for the purpose of operating the Service</li>
        </ul>
        <p className="mb-4">
          Any third-party service providers used by OpenTemply are required to maintain appropriate confidentiality and security protections.
        </p>
        <p className="mb-4">
          We do not transfer Google user data to third parties for advertising or unrelated commercial purposes.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Storage and Retention</h2>
        <p className="mb-4">
          Avery Label Merge is designed to minimize data collection and retention.
        </p>
        <p className="mb-4">
          We retain user data only for as long as necessary to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Provide the requested functionality</li>
          <li>Maintain service reliability</li>
          <li>Comply with legal obligations</li>
          <li>Resolve disputes or enforce agreements</li>
        </ul>
        <p className="mb-4">
          Temporary processing data may be automatically deleted after processing is completed.
        </p>
        <p className="mb-4">
          If users request deletion of their information, we will take reasonable steps to delete retained personal data within a reasonable timeframe, unless retention is required by law.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Security</h2>
        <p className="mb-4">
          We implement reasonable administrative, technical, and organizational safeguards to protect Google user data, including:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Encrypted HTTPS connections</li>
          <li>Access controls and authentication measures</li>
          <li>Limited internal access to data</li>
          <li>Secure hosting infrastructure</li>
          <li>Monitoring and security practices designed to prevent unauthorized access or disclosure</li>
        </ul>
        <p className="mb-4">
          While no method of electronic storage or transmission is completely secure, we take commercially reasonable measures to protect your information.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Google User Data and Limited Use Compliance</h2>
        <p className="mb-4">
          Avery Label Merge’s use and transfer of information received from Google APIs adheres to the{' '}
          <a href={LINKS.GOOGLE_API_TERMS_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 underline">
            Google API Services User Data Policy
          </a>, including the Limited Use requirements.
        </p>
        <p className="mb-4">
          We only access, use, store, or share Google user data to provide or improve user-facing functionality that is visible and expected by users.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. User Controls and Choices</h2>
        <p className="mb-4">
          Users may:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Revoke the add-on’s access to their Google account at any time through their Google Account permissions settings</li>
          <li>Stop using the Service at any time</li>
          <li>Request deletion of retained personal information by contacting us</li>
        </ul>
        <p className="mb-4">
          Revoking permissions may disable some or all functionality of the add-on.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Third-Party Services</h2>
        <p className="mb-4">
          The Service may rely on third-party infrastructure providers, such as cloud hosting providers, solely to support application functionality and delivery.
        </p>
        <p className="mb-4">
          These providers are not permitted to use Google user data for independent purposes.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Children’s Privacy</h2>
        <p className="mb-4">
          Avery Label Merge is not intended for use by children under the age required by applicable local law, and we do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">10. International Data Transfers</h2>
        <p className="mb-4">
          Depending on your location, your information may be processed in countries outside your jurisdiction where our infrastructure or service providers operate.
        </p>
        <p className="mb-4">
          We take reasonable measures to ensure such transfers comply with applicable privacy laws and maintain appropriate protections.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or Service functionality.
        </p>
        <p className="mb-4">
          Updated versions will be posted at:{' '}
          <Link to="/privacy" className="text-primary-600 hover:text-primary-700 underline">
            Privacy Policy Page
          </Link>
        </p>
        <p className="mb-4">
          Continued use of the Service after updates constitutes acceptance of the revised Privacy Policy.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Contact Information</h2>
        <p className="mb-4">
          If you have questions, requests, or concerns regarding this Privacy Policy or our data practices, please contact:
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
