import React, { useState } from 'react';
import { LINKS } from '../constants';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">100% Free</h2>
          <p className="text-lg text-slate-600">No hidden fees, no subscriptions. Just create your labels.</p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <div className="border border-slate-200 rounded-3xl p-8 md:p-12 bg-white flex flex-col shadow-xl shadow-slate-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            
            <div className="relative z-10 text-center mb-10 border-b border-slate-100 pb-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Everything You Need</h3>
              <div className="my-6">
                <span className="text-6xl font-extrabold text-slate-900">$0</span>
              </div>
              <p className="text-slate-600 font-medium text-lg">Totally free, unlimited usage.</p>
            </div>
            
            <ul className="space-y-5 mb-10 relative z-10">
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 rounded-full p-1"><span className="material-symbols-outlined text-[20px] text-slate-800">check</span></div>
                <span className="text-slate-800 text-lg font-medium">Unlimited label printing</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 rounded-full p-1"><span className="material-symbols-outlined text-[20px] text-slate-800">check</span></div>
                <span className="text-slate-800 text-lg font-medium">Unlimited mail merges</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 rounded-full p-1"><span className="material-symbols-outlined text-[20px] text-slate-800">check</span></div>
                <span className="text-slate-800 text-lg font-medium">All 5,000+ templates</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-slate-100 rounded-full p-1"><span className="material-symbols-outlined text-[20px] text-slate-800">check</span></div>
                <span className="text-slate-800 text-lg font-medium">Community support</span>
              </li>
            </ul>
            
            <a 
              href={LINKS.MARKETPLACE_URL}
              target="_blank" rel="noopener noreferrer"
              className="w-full block relative z-10 text-center bg-slate-900 text-white hover:bg-black font-bold py-4 px-6 rounded-xl transition-all shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 text-lg"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


