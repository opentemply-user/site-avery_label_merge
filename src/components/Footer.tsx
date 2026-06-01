import { Link } from 'react-router-dom';
import { LINKS, ASSETS } from '../constants';

export function CTA() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Building Elegant Labels?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Begin generating flawless labels seamlessly from your spreadsheet data.
        </p>
        <div className="flex justify-center">
          <a 
            href={LINKS.MARKETPLACE_URL} 
            target="_blank" rel="noopener noreferrer"
            className="group flex justify-center items-center gap-3 bg-[#3086F6] hover:bg-[#1a73e8] text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-[#3086F6]/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#3086F6]/40"
          >
            <img src={ASSETS.LOGO_URL} alt="" className="w-6 h-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all"/>
            Install Free — Takes 30 Seconds
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={ASSETS.LOGO_URL} alt="Avery Label Merge" className="h-8 w-8 brightness-0 invert" />
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">Avery Label Merge</span>
                <span className="text-[10px] text-slate-500 font-medium">by OpenTemply</span>
              </div>
            </div>
            <p className="leading-relaxed mb-6 max-w-sm">
              The simplest method for generating professional mailing labels in Google Docs & Sheets. Experience elegant label creation.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href={LINKS.MARKETPLACE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Install</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href={LINKS.HELP_CENTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Avery Label Merge by OpenTemply. OpenTemply is a brand of ANVINZO. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={LINKS.TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="Follow Avery Label Merge on Twitter">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
