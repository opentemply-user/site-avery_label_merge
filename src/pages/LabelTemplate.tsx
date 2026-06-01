import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { LABELS_DATA } from '../data/labels';
import { YOUTUBE_TUTORIAL_VIDEO_ID } from '../constants';

export function LabelTemplate() {
  const { slug } = useParams();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const labelProps = Object.values(LABELS_DATA).find(label => label.slug === slug);

  if (!labelProps) {
    return (
      <div className="bg-white min-h-[50vh] flex items-center justify-center font-sans text-slate-800">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Template Not Found</h1>
          <p className="text-slate-600 mb-6">The label template you are looking for does not exist.</p>
          <Link to="/labels" className="text-primary-600 hover:underline">Browse all templates</Link>
        </div>
      </div>
    );
  }

  const name = labelProps.name;
  const docId = labelProps.files[0].docsId;
  const title = `Label Template Compatible with ${name}`;
  
  const compatibles = labelProps.compatibilities;

  return (
    <div className="bg-white pb-24 font-sans text-slate-800">
      
      {/* Breadcrumb section */}
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-4">
        <nav aria-label="breadcrumb">
          <ul className="flex text-sm text-slate-500">
            <li>
              <Link to="/labels" className="hover:text-primary-600 transition-colors">Templates</Link>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/labels" className="font-semibold text-slate-800 hover:text-primary-600 transition-colors">More from Avery</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Header section */}
      <div className="max-w-5xl mx-auto px-4 text-center pb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
          <span className="block text-primary-600">Label Template</span> 
          Compatible with {name}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Download the most popular label templates for Google Docs, Word, PDF.
        </p>
      </div>

      {/* Google Docs Preview Section */}
      <div className="max-w-5xl mx-auto px-4 mb-20 text-center">
        <div className="border border-slate-200 rounded-xl bg-slate-50 overflow-hidden shadow-lg">
          
          <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 text-left border-b border-slate-200 bg-white">
            <div className="hidden sm:block max-w-[50%]">
              <div className="font-bold text-slate-900 truncate">Label template compatible with {name}</div>
              <div className="text-sm text-slate-500">By OpenTemply</div>
            </div>
            
            <div className="relative w-full sm:w-auto">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                Download template
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-lg shadow-xl z-20 overflow-hidden text-left">
                  <a href={`https://docs.google.com/document/d/${docId}/export?format=docx`} className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600 font-medium">Download as .DOCX</a>
                  <a href={`https://docs.google.com/document/d/${docId}/export?format=pdf`} className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600 font-medium">Download as .PDF</a>
                  <a href={`https://docs.google.com/document/copy?&id=${docId}`} target="_blank" rel="noreferrer" className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-primary-600 font-medium border-t border-slate-100">Copy & Edit in Google Docs</a>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full aspect-[4/3] min-h-[500px]">
            <iframe 
              className="w-full h-full border-0" 
              src={`https://docs.google.com/document/d/${docId}/preview`}
              title="Google Docs Preview"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Formats Section */}
      <div className="max-w-5xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-10">Download this template in all formats</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Word Format */}
          <div className="flex flex-col items-center py-6">
            <div className="mb-4 h-32 flex items-center justify-center text-[#2b579a]">
              <img src="/images/docx.svg" alt="Microsoft Word" className="h-[120px] object-contain" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Microsoft Word</h4>
            <p className="text-sm text-slate-600 my-4 max-w-[200px]">To create labels in Microsoft Word 2007 or later</p>
            <a href={`https://docs.google.com/document/d/${docId}/export?format=docx`} target="_blank" rel="noreferrer" className="mt-auto px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors w-4/5">Download .DOCX</a>
          </div>
          
          {/* PDF Format */}
          <div className="flex flex-col items-center py-6">
            <div className="mb-4 h-32 flex items-center justify-center text-red-600">
              <img src="/images/pdf.svg" alt="PDF" className="h-[120px] object-contain" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">PDF</h4>
            <p className="text-sm text-slate-600 my-4 max-w-[200px]">To create labels with your printer at any time</p>
            <a href={`https://docs.google.com/document/d/${docId}/export?format=pdf`} target="_blank" rel="noreferrer" className="mt-auto px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors w-4/5">Download .PDF</a>
          </div>
          
          {/* Google Docs Format */}
          <div className="flex flex-col items-center py-6">
            <div className="mb-4 h-32 flex items-center justify-center text-[#4285F4]">
              <img src="/images/docs.svg" alt="Google Docs" className="h-[120px] object-contain" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Google Docs</h4>
            <p className="text-sm text-slate-600 my-4 max-w-[200px]">To create labels in any version of Google Docs.</p>
            <a href={`https://docs.google.com/document/copy?&id=${docId}`} target="_blank" rel="noreferrer" className="mt-auto px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors w-4/5">Edit in Google Docs</a>
          </div>
        </div>
      </div>

      {/* Tutorial Video Section */}
      <div className="max-w-5xl mx-auto px-4 mb-20 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">How to use this template</h2>
        <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg border border-slate-200 aspect-video bg-slate-100">
          <iframe 
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${YOUTUBE_TUTORIAL_VIDEO_ID}`} 
            title="Tutorial video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Label description</h2>
        <div className="text-slate-600 leading-relaxed space-y-4">
          <p dangerouslySetInnerHTML={{ 
            __html: labelProps.snippet.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-600 hover:underline">$1</a>')
          }} />
        </div>
      </div>

      {/* Compatible Labels Section */}
      <div className="max-w-4xl mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Other compatible templates</h2>
        <div className="flex flex-wrap gap-2 text-slate-600">
          {compatibles.map((code, index) => (
             <span key={index} className="inline-block">
               <Link to={`/labels/avery-${code.toLowerCase().replace(' ', '-')}-template-google-docs`} className="text-primary-600 hover:underline font-medium">{code}</Link>
               {index < compatibles.length - 1 && ","}
             </span>
          ))}
        </div>
      </div>

      {/* Disclaimer Section */}
<div className="max-w-4xl mx-auto px-4 mb-16 bg-slate-50 p-6 rounded-xl border border-slate-200">
  <h2 className="text-xl font-bold text-slate-900 mb-3">Disclaimer</h2>

  <p className="text-sm text-slate-500 leading-relaxed mb-3">
    Avery® is a registered trademark of Avery Products Corporation and/or its affiliated entities.
    References to Avery products, template numbers, and specifications on this website are
    provided solely for the purpose of identifying product compatibility.
  </p>

  <p className="text-sm text-slate-500 leading-relaxed mb-3">
    This website, <strong>Avery Label Merge</strong>, is an independent service and is not
    affiliated with, sponsored by, endorsed by, authorized by, or otherwise associated with
    Avery Products Corporation or any of its affiliates. The use of the Avery name,
    trademarks, and product references does not imply any partnership, approval, or endorsement.
  </p>

  <p className="text-sm text-slate-500 leading-relaxed">
    All trademarks, service marks, trade names, product names, and logos appearing on this
    website are the property of their respective owners. Any such marks are used solely for
    nominative and descriptive purposes to identify compatible products and services.
    <strong> No claim of ownership is made with respect to any third-party trademarks.</strong>
  </p>
</div>

      {/* Features Value Props */}
      <div className="max-w-5xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-10 border-t border-slate-200">
          <div className="flex flex-col items-center">
            <div className="mb-6 h-28 flex items-center justify-center text-slate-800">
              <span className="material-symbols-outlined text-[96px]" style={{ fontVariationSettings: "'FILL' 1" }}>print</span>
            </div>
            <h3 className="font-bold text-sm tracking-wide text-gray-900 mb-2">PROFESSIONAL PRINTING</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Print quality labels in a couple of clicks right from Google Docs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-6 h-28 flex items-center justify-center text-slate-800">
              <span className="material-symbols-outlined text-[96px]" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card_off</span>
            </div>
            <h3 className="font-bold text-sm tracking-wide text-gray-900 mb-2">100% FREE TO USE</h3>
            <p className="text-slate-500 text-sm leading-relaxed">It's completely free to use. No hidden fees, watermarks, or subscriptions required.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-6 h-28 flex items-center justify-center text-slate-800">
              <span className="material-symbols-outlined text-[96px]" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
            </div>
            <h3 className="font-bold text-sm tracking-wide text-gray-900 mb-2">NEED HELP?</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Get help from our community of experts <a href="mailto:support@opentemply.com" className="text-primary-600 hover:underline">by emailing us</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
