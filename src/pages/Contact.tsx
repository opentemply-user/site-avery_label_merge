import React, { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { FORMS } from '../constants';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const searchParams = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const queryName = searchParams.get('name') || '';
  const queryEmail = searchParams.get('email') || '';
  const queryMessage = searchParams.get('message') || '';
  
  const queryProduct = searchParams.get('product');
  const initialProduct = queryProduct === 'Avery Label Merge' 
    ? queryProduct 
    : (queryProduct ? 'Other' : 'Avery Label Merge');
  const initialCustomProduct = (queryProduct && initialProduct === 'Other') ? queryProduct : '';

  const querySubject = searchParams.get('subject');
  const initialIssue = querySubject === 'Request New Template' || querySubject === 'Not Working'
    ? querySubject
    : (querySubject ? 'Other' : 'Request New Template');
  const initialCustomIssue = (querySubject && initialIssue === 'Other') ? querySubject : '';

  const [name, setName] = useState(queryName);
  const [email, setEmail] = useState(queryEmail);
  const [product, setProduct] = useState(initialProduct);
  const [customProduct, setCustomProduct] = useState(initialCustomProduct);
  const [issue, setIssue] = useState(initialIssue);
  const [customIssue, setCustomIssue] = useState(initialCustomIssue);
  const [details, setDetails] = useState(queryMessage);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!turnstileToken) {
      alert("Please complete the captcha.");
      return;
    }
    
    setIsSubmitting(true);
    setIsError(false);
    
    try {
      const payload = {
        googleFormAction: FORMS.GOOGLE_FORM_ACTION,
        formData: {
          [FORMS.FIELDS.EMAIL]: email,
          [FORMS.FIELDS.NAME]: name,
          [FORMS.FIELDS.PRODUCT]: product === 'Other' ? '__other_option__' : product,
          [FORMS.FIELDS.PRODUCT_OTHER]: product === 'Other' ? customProduct : undefined,
          [FORMS.FIELDS.SUBJECT]: issue === 'Other' ? '__other_option__' : issue,
          [FORMS.FIELDS.SUBJECT_OTHER]: issue === 'Other' ? customIssue : undefined,
          [FORMS.FIELDS.MESSAGE]: details
        },
        meta: {
          turnstileToken: turnstileToken,
          page: window.location.href,
          timestamp: Date.now()
        }
      };
      
      const response = await fetch(FORMS.WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSuccess(true);
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error('Error submitting form', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleComposeEmail = () => {
    const to = "support@opentemply.com";
    const subjectContent = issue === 'Other' ? customIssue : issue;
    const productContent = product === 'Other' ? customProduct : product;
    const subject = encodeURIComponent(`[${productContent} Support] ${subjectContent}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nIssue Details:\n${details}\n\n`);
    
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
    window.open(gmailLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Contact Us</h1>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-10 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary-50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="relative z-10 space-y-6">
          {isError ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px] text-red-600">error</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Message failed to send</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                We couldn't submit the form securely. Please send an email to <a href="mailto:support@opentemply.com" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">support@opentemply.com</a> or click the button below to compose a draft using your entered details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => setIsError(false)}
                  className="bg-[#3086F6] hover:bg-[#1a73e8] text-white font-bold py-3 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">refresh</span>
                  Try Form Again
                </button>
                <button 
                  onClick={handleComposeEmail}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">drafts</span>
                  Compose Email Draft
                </button>
              </div>
            </div>
          ) : isSuccess ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-[32px] text-green-600">check_circle</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Thank you for reaching out. Your response has been sent and you will receive an email from our team shortly.
              </p>
              <button 
                onClick={() => {
                  setIsSuccess(false);
                  setName('');
                  setEmail('');
                  setProduct('Avery Label Merge');
                  setCustomProduct('');
                  setIssue('Request New Template');
                  setCustomIssue('');
                  setDetails('');
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <p className="text-slate-600 mb-8 border-b border-slate-100 pb-6">
                Fill out the form below to submit a message to our support team. We generally respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="e.g. Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="e.g. jane@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Issue / Subject *</label>
                    <select 
                      value={issue} 
                      onChange={e => setIssue(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                    >
                      <option value="Request New Template">Request New Template</option>
                      <option value="Not Working">Not Working</option>
                      <option value="Other">Other...</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Product *</label>
                    <select 
                      value={product} 
                      onChange={e => setProduct(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all bg-white"
                    >
                      <option value="Avery Label Merge">Avery Label Merge</option>
                      <option value="Other">Other...</option>
                    </select>
                  </div>
                </div>

                {product === 'Other' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Please Specify Product *</label>
                    <input 
                      type="text" 
                      required={product === 'Other'}
                      value={customProduct} 
                      onChange={e => setCustomProduct(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="e.g. Custom Add-on"
                    />
                  </div>
                )}

                {issue === 'Other' && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">Please Specify Subject *</label>
                    <input 
                      type="text" 
                      required={issue === 'Other'}
                      value={customIssue} 
                      onChange={e => setCustomIssue(e.target.value)} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all"
                      placeholder="e.g. Question about billing"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Detailed Description *</label>
                  <textarea 
                    rows={5}
                    required
                    value={details} 
                    onChange={e => setDetails(e.target.value)} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 outline-none transition-all resize-y"
                    placeholder="Please describe exactly what you are experiencing..."
                  ></textarea>
                </div>

                <div className="flex justify-center pt-2">
                  <Turnstile 
                    siteKey={FORMS.TURNSTILE_SITE_KEY} 
                    onSuccess={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => setTurnstileToken('')}
                  />
                </div>

                <div className="pt-6 mt-2 border-t border-slate-100">
                  <button 
                    type="submit"
                    disabled={isSubmitting || !name || !email || !details || (issue === 'Other' && !customIssue) || (product === 'Other' && !customProduct) || !turnstileToken}
                    className="w-full flex items-center justify-center gap-3 bg-[#3086F6] hover:bg-[#1a73e8] disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-all shadow-sm"
                  >
                    {isSubmitting ? (
                      <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    ) : (
                      <span className="material-symbols-outlined text-[20px]">send</span>
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">
                    Your details remain private and are only used to respond back to your support query.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
