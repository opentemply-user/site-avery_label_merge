export function Features() {
  const features = [
    {
      icon: <span className="material-symbols-outlined text-[24px]">grid_on</span>,
      title: "5,000+ Templates",
      description: "Every major label brand supported — Avery, Herma, OnlineLabels, and more. Just search by product code."
    },
    {
      icon: <span className="material-symbols-outlined text-[24px]">difference</span>,
      title: "One-Click Mail Merge",
      description: "Connect Google Sheets and insert merge fields like <<name>> or <<address>>. Turn hundreds of rows into personalized labels."
    },
    {
      icon: <span className="material-symbols-outlined text-[24px]">crop_free</span>,
      title: "Print-Perfect Alignment",
      description: "Our templates match manufacturer specs exactly — no more wasted label sheets or misaligned prints."
    },
    {
      icon: <span className="material-symbols-outlined text-[24px]">barcode</span>,
      title: "100+ Barcode Types",
      description: "Support for over 100 types of barcodes, including both static and dynamic barcodes for all your label needs."
    },
    {
      icon: <span className="material-symbols-outlined text-[24px]">visibility</span>,
      title: "Live Preview",
      description: "See your labels before printing. The preview feature catches typos and formatting issues before they cost you."
    },
    {
      icon: <span className="material-symbols-outlined text-[24px]">security</span>,
      title: "Secure & Private",
      description: "Your data stays in Google's secure infrastructure. We never store your documents or personal information."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Essential Tools for Crafting Professional Labels</h2>
          <p className="text-lg text-slate-600">Robust functionality designed to make label generation straightforward, whether you need a dozen or ten thousand.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generate Labels in 3 Easy Steps</h2>
          <p className="text-lg text-slate-400">Design directly in Google Docs & Sheets with all the design tools you need. Go from an empty document to fully printed labels in minutes.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-20 right-20 h-0.5 bg-slate-800"></div>
          
          {[
            {
              step: "1",
              title: "Choose a Template",
              desc: "Search 5,000+ templates by brand or size. Find \"Avery 5160\" or \"2×4 inch\" — we've got you covered."
            },
            {
              step: "2",
              title: "Design Your Label",
              desc: "Add text, images, or merge fields from Google Docs. Style it however you like — fonts, colors, logos."
            },
            {
              step: "3",
              title: "Print & Done",
              desc: "Hit \"Create Labels\" to generate your print-ready document. Set your margins to \"None\" and begin printing."
            }
          ].map((item, i) => (
            <div key={i} className="relative text-center pt-8 md:pt-0">
              <div className="w-14 h-14 mx-auto bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center text-xl font-bold text-primary-400 relative z-10 mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
        
        {/* Showcase Item 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3 scale-105"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden aspect-[4/3] flex items-center justify-center p-6">
               <div className="w-full h-full bg-slate-50 border border-slate-200 rounded flex flex-col overflow-hidden">
                 <div className="bg-slate-200 h-8 flex items-center px-4"><div className="w-1/3 h-2 bg-slate-300 rounded"></div></div>
                 <div className="flex-1 p-4 flex gap-4">
                   <div className="w-1/3 border-r border-slate-200 pr-4">
                     <div className="h-4 bg-slate-200 rounded mb-4 w-1/2"></div>
                     <div className="space-y-2">
                       <div className="h-8 bg-primary-50 text-xs text-primary-700 font-medium flex items-center px-2 rounded border border-primary-200">{"<<First Name>>"}</div>
                       <div className="h-8 bg-primary-50 text-xs text-primary-700 font-medium flex items-center px-2 rounded border border-primary-200">{"<<Last Name>>"}</div>
                       <div className="h-8 bg-primary-50 text-xs text-primary-700 font-medium flex items-center px-2 rounded border border-primary-200">{"<<Address>>"}</div>
                     </div>
                   </div>
                   <div className="flex-1 border border-dashed border-slate-300 bg-white rounded p-4 flex flex-col justify-center items-center">
                      <div className="w-3/4 h-32 border border-slate-200 shadow-sm rounded-sm p-3 flex flex-col justify-center">
                        <div className="font-bold text-sm text-slate-800 flex gap-1 mb-1">
                          <span className="bg-primary-100 text-primary-800 px-1 rounded">{"<<First Name>>"}</span>
                          <span className="bg-primary-100 text-primary-800 px-1 rounded">{"<<Last Name>>"}</span>
                        </div>
                        <div className="text-xs text-slate-600 bg-primary-100 text-primary-800 px-1 rounded inline-block self-start">{"<<Address>>"}</div>
                      </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Mail Merge</span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Convert Spreadsheets to Labels Instantly</h3>
            <p className="text-lg text-slate-600 mb-8">
              Link your Google Sheets data and watch it seamlessly convert into precisely formatted labels. Eliminate tedious copy-pasting for good.
            </p>
            <ul className="space-y-4">
              {['Insert merge fields with one click', 'Process hundreds of rows automatically', 'Preview before printing'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Showcase Item 2 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-bold uppercase tracking-wider text-sm mb-2 block">Templates</span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Label Size Support</h3>
            <p className="text-lg text-slate-600 mb-8">
              Whether you need compact return address stickers, massive shipping labels, name tags, or file folder identifiers — we have you fully covered.
            </p>
            <ul className="space-y-4">
              {['Avery, Herma, OnlineLabels, and more', 'Search by product code or dimensions', 'Request custom templates free'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-slate-200 rounded-3xl transform rotate-3 scale-105"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden aspect-[4/3] p-6 flex items-center justify-center">
              <div className="w-full grid grid-cols-2 gap-4">
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:border-primary-400 cursor-pointer transition-colors">
                   <div className="text-sm font-bold text-slate-800">Avery 5160</div>
                   <div className="text-xs text-slate-500 mb-2">Address Labels</div>
                   <div className="grid grid-cols-3 gap-1 content-start mt-2">
                     <div className="h-6 bg-slate-200 rounded-sm"></div><div className="h-6 bg-slate-200 rounded-sm"></div><div className="h-6 bg-slate-200 rounded-sm"></div>
                     <div className="h-6 bg-slate-200 rounded-sm"></div><div className="h-6 bg-slate-200 rounded-sm"></div><div className="h-6 bg-slate-200 rounded-sm"></div>
                   </div>
                 </div>
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:border-primary-400 cursor-pointer transition-colors">
                   <div className="text-sm font-bold text-slate-800">Avery 5164</div>
                   <div className="text-xs text-slate-500 mb-2">Shipping Labels</div>
                   <div className="grid grid-cols-2 gap-1 content-start mt-2">
                     <div className="h-10 bg-slate-200 rounded-sm"></div><div className="h-10 bg-slate-200 rounded-sm"></div>
                   </div>
                 </div>
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group hover:border-primary-400 cursor-pointer transition-colors">
                     <div className="text-sm font-bold text-slate-800">Herma 4282</div>
                   <div className="text-xs text-slate-500 mb-2">File Folders</div>
                   <div className="grid grid-rows-4 gap-1 content-start mt-2">
                     <div className="h-3 w-3/4 bg-slate-200 rounded-sm inline-block"></div>
                     <div className="h-3 w-3/4 bg-slate-200 rounded-sm inline-block"></div>
                     <div className="h-3 w-3/4 bg-slate-200 rounded-sm inline-block"></div>
                   </div>
                 </div>
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden group flex flex-col items-center justify-center text-slate-400 hover:text-primary-600 hover:bg-primary-50 cursor-pointer transition-colors">
                   <div className="text-2xl font-light mb-1">+5000</div>
                   <div className="text-xs font-medium">More Templates</div>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
