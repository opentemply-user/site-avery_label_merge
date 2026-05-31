import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LINKS, ASSETS } from '../constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <img src={ASSETS.LOGO_URL} alt="Avery Label Merge" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">Avery Label Merge</span>
              <span className="text-[10px] text-slate-500 font-medium">by OpenTemply</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Features</a>
            <a href="/#how-it-works" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">How It Works</a>
            <a href="/#pricing" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Pricing</a>
            <Link to="/faq" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">FAQ</Link>
            <Link to="/contact" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">Contact</Link>
            <a 
              href={LINKS.MARKETPLACE_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#3086F6] hover:bg-[#1a73e8] text-white px-5 py-2 rounded-full font-medium transition-colors shadow-sm"
            >
              Install Free
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <span className="material-symbols-outlined text-[24px]">close</span> : <span className="material-symbols-outlined text-[24px]">menu</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg">
          <a href="/#features" className="block text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Features</a>
          <a href="/#how-it-works" className="block text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="/#pricing" className="block text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Pricing</a>
          <Link to="/faq" className="block text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/contact" className="block text-slate-600 font-medium py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          <a 
            href={LINKS.MARKETPLACE_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#3086F6] hover:bg-[#1a73e8] text-white px-5 py-3 rounded-full font-medium shadow-sm transition-colors"
          >
            Install Free
          </a>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Design Flawless Labels in Google Docs & Sheets — <span className="text-slate-900">In Minutes, Not Hours</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Avery Label Merge is the premier Google Docs & Sheets extension for generating labels compatible with Avery, OnlineLabels, Herma, and many other leading providers. Simply link your spreadsheet, select a template, add dynamic or static QR codes and barcodes, and start printing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <a 
                href={LINKS.MARKETPLACE_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:-translate-y-0.5"
              >
                <img src={ASSETS.GOOGLE_INSTALL_BTN_IMG} alt="Install Free from Google" className="h-14" />
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Main Mockup UI */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="h-10 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              </div>
              <div className="flex" style={{ height: '400px' }}>
                <div className="w-64 bg-slate-50 border-r border-slate-100 p-4 shrink-0 flex flex-col">
                  <div className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <img src={ASSETS.LOGO_URL} alt="Logo" className="w-5 h-5"/>
                    <div className="flex flex-col">
                      <span className="leading-none text-sm">Avery Label Merge</span>
                      <span className="text-[9px] text-slate-500 font-normal">by OpenTemply</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200">
                    <div className="flex gap-3 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-sm ring-4 ring-slate-50">1</div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800">Label Template</h4>
                        <p className="text-xs text-slate-500 mt-0.5">Avery 5160</p>
                      </div>
                    </div>
                    <div className="flex gap-3 relative z-10">
                      <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-xs font-bold flex items-center justify-center shrink-0 ring-4 ring-slate-50">2</div>
                      <div>
                        <h4 className="text-sm font-medium text-slate-600">Data Source</h4>
                        <p className="text-xs text-slate-400 mt-0.5">Select spreadsheet</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full bg-primary-600 text-white rounded-lg py-2.5 text-sm font-semibold shadow-sm">
                      Create Labels
                    </button>
                  </div>
                </div>
                
                <div className="flex-1 bg-[#F8F9FA] p-6 overflow-hidden flex flex-col items-center">
                  {/* Simulated Google Doc Page */}
                  <div className="bg-white w-full h-full rounded shadow-sm border border-slate-200 p-4 grid grid-cols-2 gap-2 opacity-80">
                    <div className="border border-dashed border-slate-300 rounded p-2 flex flex-col">
                      <div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                    </div>
                     <div className="border border-dashed border-slate-300 rounded p-2 flex flex-col">
                      <div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                    </div>
                     <div className="border border-dashed border-slate-300 rounded p-2 flex flex-col">
                      <div className="h-2 w-1/2 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-slate-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating popups */}
            <div className="absolute left-10 -bottom-14 z-20 bg-white rounded-xl shadow-xl border border-slate-100 p-3 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p className="text-sm font-semibold text-slate-800 m-0 leading-none">Labels Ready!</p>
            </div>
            
            {/* Top Barcode Label */}
            <div className="absolute -right-[120px] -top-6 z-30 bg-white rounded shadow-xl border border-slate-200 p-2.5 w-60 flex flex-col justify-between animate-bounce hover:z-40" style={{ animationDuration: '4.5s', animationDelay: '0.2s' }}>
              <div className="flex justify-between items-start mb-2 px-1">
                <div>
                  <p className="text-[8px] font-bold text-slate-500 tracking-wider uppercase">SKU: 90210</p>
                  <p className="text-sm font-bold text-slate-900 leading-tight">Organic Coffee</p>
                </div>
                <div className="font-mono text-xs font-bold text-slate-700 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">$14</div>
              </div>
              <div className="flex flex-col items-center pt-2 border-t border-slate-200 overflow-hidden w-full">
                <div className="flex justify-center h-12 overflow-hidden w-full opacity-90 transform scale-y-[1.8] scale-x-[1.1] origin-top text-slate-800">
                  <span className="material-symbols-outlined text-[48px] -mt-1 leading-none tracking-[-0.05em]" style={{ fontVariationSettings: "'FILL' 1" }}>barcode</span>
                  <span className="material-symbols-outlined text-[48px] -mt-1 leading-none tracking-[-0.05em]" style={{ fontVariationSettings: "'FILL' 1" }}>barcode</span>
                  <span className="material-symbols-outlined text-[48px] -mt-1 leading-none tracking-[-0.05em]" style={{ fontVariationSettings: "'FILL' 1" }}>barcode</span>
                  <span className="material-symbols-outlined text-[48px] -mt-1 leading-none tracking-[-0.05em]" style={{ fontVariationSettings: "'FILL' 1" }}>barcode</span>
                </div>
                <span className="text-[10px] tracking-[0.25em] text-slate-500 font-mono mt-2">40123456789012</span>
              </div>
            </div>

            {/* Middle Round Label */}
            <div className="absolute -right-[60px] top-[140px] z-20 bg-white rounded-full shadow-2xl border border-slate-100 p-1 animate-bounce hover:z-40" style={{ animationDuration: '5s', animationDelay: '0.8s' }}>
              <div className="w-[110px] h-[110px] bg-white border border-slate-100 rounded-full flex items-center justify-center relative overflow-hidden">
                <img src="/sample_labels/round_thank_you.png" alt="Thank You Label" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bottom Address Labels */}
            <div className="absolute -right-[108px] top-[290px] z-10 bg-white rounded-xl shadow-xl border border-slate-100 p-3 flex flex-col gap-2 animate-bounce hover:z-40" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="border border-[#3086F6]/30 rounded bg-[#3086F6]/10 p-2.5 w-48 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#3086F6] text-[20px] shrink-0">contact_mail</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">Eleanor Davis</p>
                  <p className="text-[10px] text-slate-600 leading-tight">1428 Riverside Ave</p>
                </div>
              </div>
              <div className="border border-[#3086F6]/30 rounded bg-[#3086F6]/10 p-2.5 w-48 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#3086F6] text-[20px] shrink-0">contact_mail</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 mb-0.5">Julian Thorne</p>
                  <p className="text-[10px] text-slate-600 leading-tight">902 Birchwood Ln</p>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

