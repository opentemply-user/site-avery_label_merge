import { Link } from 'react-router-dom';
import { LABELS_DATA } from '../data/labels';
import { TEMPLATE_SECTIONS } from '../constants';

export function Labels() {
  return (
    <div className="bg-white pb-24">
      {/* Header section */}
      <div className="bg-slate-50 border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Label templates for Google Docs
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find the most popular label templates for Google Docs. These label templates are available in blank sheets to fill in.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {Object.entries(TEMPLATE_SECTIONS).map(([sectionId, section]) => {
          const sectionLabels = Object.values(LABELS_DATA).filter(label => label.s.includes(sectionId));
          
          if (sectionLabels.length === 0) return null;

          return (
            <div key={sectionId}>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{section.title}</h2>
              <p className="text-lg text-slate-600 mb-8">{section.description}</p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectionLabels.map((label, index) => (
                  <li key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0 md:border-b-0 md:pb-0">
                    <Link
                      to={`/labels/${label.slug}`} 
                      className="text-lg font-medium text-[#3086F6] hover:text-[#1a73e8] hover:underline flex items-center"
                    >
                      <span className="material-symbols-outlined mr-2 text-sm">description</span>
                      {label.name} - Address Labels
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
