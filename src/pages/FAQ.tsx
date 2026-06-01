import React, { useEffect, useState } from 'react';

export function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "What label brands are supported?",
      a: "We support 5,000+ templates from all major brands including Avery, Avery-Zweckform, Herma, OnlineLabels.com, and SheetLabels.com. Can't find your template? Request it free and we'll add it within 48 hours."
    },
    {
      q: "Is it compatible with Chromebooks?",
      a: "Absolutely! Avery Label Merge operates purely within your browser via Google Docs & Sheets — avoiding any software installation. It functions perfectly on Chromebooks, Mac, Windows PCs, and all devices running Chrome."
    },
    {
      q: "Can I merge data from Google Sheets?",
      a: "Absolutely! Connect any Google Sheets spreadsheet with one click. Then insert merge fields like <<name>>, <<address>>, or <<city>> into your label. Avery Label Merge will create a personalized label for each row in your spreadsheet."
    },
    {
      q: "How can I avoid white borders when printing?",
      a: "Our add-on generates a print-ready PDF for your labels. When printing, select \"None\" or \"Actual Size\" for margins in the print dialog to ensure perfect alignment. Pro tip: Always try a test print on standard paper initially and match the label cuts by holding the printed sheet against your label paper up to a light source!"
    },
    {
      q: "Is my data secure?",
      a: "Yes. Your documents and data stay within Google's secure infrastructure. We never store your personal information or document content on our servers. Avery Label Merge only accesses the data it needs to create your labels."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-600">Got questions? We've got answers.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden hover:border-slate-300 transition-colors">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-900 pr-8">{question}</span>
        <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
          {answer}
        </p>
      </div>
    </div>
  );
}
